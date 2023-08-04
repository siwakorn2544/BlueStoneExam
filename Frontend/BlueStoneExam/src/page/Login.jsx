import logo from '../assets/img/logo2.png'
import faceBookLogo from '../assets/img/icons-facebook.png'
import igLogo from '../assets/img/icons-ig.png'
import lineLogo from '../assets/img/icons-line.png';
import youTubeLogo from '../assets/img/icons-youtube.png'
import { useState } from 'react';
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

const handleLogin = (e) =>{
    e.preventDefault();
    loginToSystem()
    console.log("hello")
}
const loginToSystem = () =>{
    fetch('http://localhost:9121/auth/login',{
        method:"POST",
        body:JSON.stringify({
            username,
            password
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
        <h3 className='text-center'>Login</h3>
        <form onSubmit={handleLogin}>
            <div className="form-outline mb-4">
              <input type="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder='Username' 
                className="form-control" />
            </div>
            <div className="form-outline mb-4">
              <input type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder='Password' 
                className="form-control" />
            </div>
            <div className="row mb-4">
              <div className="d-flex justify-content-center">
                <div className="text-center form-check">
                    <input className="form-check-input" 
                    type="checkbox" 
                    checked readOnly/>
                    <label className="form-check-label" >
                    Remember me</label>
                </div>
                <br />
              </div>
            </div>


            <button type="submit" className="btn btn-block w-100 text-white fw-bold" 
                style={{backgroundColor:"#1382c8"}}>Login</button>
            <div className="row mb-4">
              <div className="d-flex justify-content-center">
                <div className="text-center form-check">
                    <a href='/forgetPass'>Forget Password</a>
                </div>
                <br />
              </div>
            </div>

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

export default Login