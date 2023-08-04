const express = require('express')
const bodyParser = require('body-parser');

const mongoose = require("mongoose")
const PORT = process.env.PORT || 9121
require("dotenv").config();
const {MONGO_PASS} = process.env
const {EMAIL, PASSWORD} = process.env
const cors = require('cors');
const app = express()
//Middleware
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(`mongodb+srv://go2pete:${MONGO_PASS}@cluster0.nyyxcno.mongodb.net/TestBluestone`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


module.exports = app