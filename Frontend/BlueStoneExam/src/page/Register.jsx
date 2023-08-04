import { useState } from "react"
import logo from '../assets/img/logo2.png'
import faceBookLogo from '../assets/img/icons-facebook.png'
import igLogo from '../assets/img/icons-ig.png'
import lineLogo from '../assets/img/icons-line.png';
import youTubeLogo from '../assets/img/icons-youtube.png'
import {useNavigate } from 'react-router-dom'
function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username:"",
        password:"",
        confirmPassword:"",
        email:"",
    })
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    const handleRegister = (e) =>{
        e.preventDefault();
        sendRegister()
        navigate('/login')
    }
    const sendRegister = () =>{
        fetch('http://localhost:9121/auth/register',{
            method:"POST",
            body:JSON.stringify({
                "username":formData.username,
                "password":formData.password,
                "confirmPassword":formData.confirmPassword,
                "email":formData.email,
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
  return (
    <div className="container">
        <div className='card'>
        <img src={logo} alt="logoBluestone"  style={{width:'399px', height:'127px'}}/>
            <h3 className='text-center'>Register</h3>
            <form onSubmit={handleRegister}>
                <div className="form-outline mb-4">
                  <input 
                  type="username" 
                  name="username"
                  value={formData.username} 
                  placeholder='Username' 
                  onChange={handleInputChange} className="form-control" />
                </div>

                <div className="form-outline mb-4">
                  <input 
                  type="password" 
                  name="password"
                  value={formData.password} 
                  placeholder='Password' 
                  onChange={handleInputChange} 
                  className="form-control" />

                </div>
                <div className="form-outline mb-4">
                  <input 
                  type="password" 
                  name="confirmPassword"
                  value={formData.confirmPassword}
                placeholder='confirmPassword' 
                onChange={handleInputChange} 
                className="form-control" />
                </div>
                <div className="form-outline mb-4">
                  <input 
                  type="email"
                  name="email"
                  value={formData.email} 
                  placeholder='Email' 
                  onChange={handleInputChange} 
                  className="form-control" />
                </div>

                <button type="submit" className="btn btn-block w-100 text-white fw-bold" 
                style={{backgroundColor:"#1382c8"}}>Register </button>
                
                <hr/>

                <div className="text-center">
                  <p>Contact us</p>
                  <a href="https://www.facebook.com/Bluestone.co.th/" 
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-link btn-floating mx-1" >
                    <img src={faceBookLogo} alt="FacebookIcon" style={{width:"50px", height:"50px"}}/>
                  </a>
                
                  <a href="https://www.instagram.com/bluestonethailand/" 
                  target="_blank" rel="noopener noreferrer" 
                  className="btn btn-link btn-floating mx-1">
                    <img src={igLogo} alt="igIcon" style={{width:"50px", height:"50px"}}/>
                  </a>
                
                  <a href="https://line.me/ti/p/~@bluestonethailand" 
                  target="_blank" rel="noopener noreferrer" 
                  className="btn btn-link btn-floating mx-1">
                    <img src={lineLogo} alt="lineIcon" style={{width:"50px", height:"50px"}}/>
                  </a>
                
                  <a href="https://www.youtube.com/channel/UCQ3mRpetmm5Ek-LLdTjwaNQ" 
                  target="_blank" rel="noopener noreferrer" 
                  className="btn btn-link btn-floating mx-1">
                    <img src={youTubeLogo} alt="YoutubeIcon" style={{width:"50px", height:"50px"}}/>
                  </a>
                
                <br/>
                  <a href="https://www.bluestone.co.th"  target="_blank" rel="noopener noreferrer" >https://www.bluestone.co.th</a>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register