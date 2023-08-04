import {useNavigate } from 'react-router-dom'
import logo from '../assets/img/logo2.png'
import { useState } from "react"
function Forgetpass() {
 const [IsSubmit, setSubmit] = useState(false)
 const [email, setEmail] = useState('')
 const [verifyCode, setVerifyCode] = useState('')
 const [password, setPassword] = useState('')
 const [confirmPassword, setconfirmPassword] = useState('')
 const navigate = useNavigate();

 const handleSendOTP = (e) =>{
    e.preventDefault();
    sendOTP()
    setSubmit(true)
 }
 const handleSomeThing = (e) =>{
    e.preventDefault();
    resetPass()
 }
const sendOTP = () =>{ 
    fetch('http://localhost:9121/auth/forget-password',{
        method:"POST",
        body: JSON.stringify({
             email
             }),
        headers:{
            "Content-type": "application/json"
          }
    } 
    )
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => console.error(error))
}
const resetPass = () =>{
    fetch('http://localhost:9121/auth/reset-password',{
        method:"POST",
        body: JSON.stringify({
            "email":email,
            "otp":verifyCode,
            "newPassword":password,
            "confirmPassword":confirmPassword
        }),
        headers:{
            "Content-type": "application/json"
        }
    }
    )
    .then(response => response.json())
    .then(data => {
        alert(data.message)
        navigate('/login')
    })

    .catch(error => console.error(error))
}

  return (
    <div className="container">
        <div className="card">
        <img src={logo} alt="logoBluestone"  style={{width:'399px', height:'127px'}}/>
        <h3 className='text-center'>Forget Password</h3>
        <form onSubmit={handleSendOTP}>
          <div className="control">
            <input type="email" name="email" placeholder='Email' 
            value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
          </div>
          <br/>
          <button type="submit" className="btn btn-block w-100 text-white fw-bold" 
                style={{backgroundColor:"#1382c8"}}> Send reset Token </button>
        </form>
        {IsSubmit &&(
            <form onSubmit={handleSomeThing}>
                    <>
                    <div className='control'>
                        <div className="form-outline mb-4 mt-3">
                            <input type="number" name="verifyCode" placeholder='verifyCode' 
                            value={verifyCode} onChange={(e) => setVerifyCode(e.target.value)} className="form-control" />
                        </div>
                        <div className="form-outline mb-4">
                            <input type="password" name="password" placeholder='password' 
                            value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                        </div>
                        <div className="form-outline mb-4">
                            <input type="password" name="confirmPassword" placeholder='Confirm Password' 
                            value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} className="form-control" />
                        </div>
                    </div>
                    
                    <button type='submit' className="btn btn-block w-100 text-white fw-bold" 
                        style={{backgroundColor:"#1382c8"}}>Submit</button>
                    </> 
            </form>
             )}
            <hr/>
            <div className="text-center">
            <a href="https://www.bluestone.co.th" target="_blank" rel="noopener noreferrer" >https://www.bluestone.co.th</a>
            </div>
        </div>
        
    </div>
  )
}

export default Forgetpass