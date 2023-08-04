const express = require('express');
const bcrypt = require('bcrypt');
// nodemailer is npm package that help you send something to email
const nodemailer = require('nodemailer');
const User = require('../models/user');
require("dotenv").config();
const router = express.Router();
const {EMAIL, PASSWORD} = process.env

// register
router.post('/register', async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10); 
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }
    
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    let message = {message:'Registered successfully'}
    res.status(201).send(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// login
router.post('/login', async (req, res)=>{
  const { username, password } =req.body;
  try {
    const user = await User.findOne({ username });
    if(!user){
        return res.status(401).json({message: 'Login failed username not found'})
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
    user.lastLogin = new Date();
    await user.save();
    let message = { message: 'Login successful', }
    res.send(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

//forgetPass
router.post('/forget-password', async (req, res)=>{
    const {email} = req.body;
    try{
        const user = await User.findOne({ email });
        if (!user){
            return res.status(404).json({ message: "Email not found" })
        }

        // 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000);
        user.resetToken = otp.toString();
        user.resetTokenExpiration = Date.now() + 600000; // OTP can use for 10 minutes (600,000 ms)
        await user.save();
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
              user: EMAIL,
              pass: PASSWORD,
            },
          });
    const mailOptions = {
        from: EMAIL,
        to: email,
        subject: 'Password Reset OTP',
        text: `Your OTP for password reset: ${otp}`,
      };
  
      await transporter.sendMail(mailOptions);
      let message = { message: 'Password reset OTP sent'}
      res.send(message);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }

})
//reset-password
router.post('/reset-password', async (req, res) => {
  const { email, otp, newPassword, confirmPassword } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.resetToken !== otp || user.resetTokenExpiration < Date.now()) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    // Update user's password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetToken = null;
    user.resetTokenExpiration = null;
    await user.save();
    let message = { message: 'Password reset successful' }
    res.send(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



module.exports = router;