import './App.css'

import { Route , Routes} from 'react-router-dom'
import Register from './page/Register';
import Login from './page/Login';
import ForgetPass from './page/Forgetpass';
function App() {
  

  return (
    <>
      <Routes className='main'>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/forgetPass' element={<ForgetPass/>}/>
      </Routes>
    </>
  )
}

export default App
