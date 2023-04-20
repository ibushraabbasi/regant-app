import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Google from '../imgs/Google.png'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const linkStyle = {
    textDecoration: "none",
    color: '#1476FF',
    fontSize: '14px',
    fontWeight: '600'
  };
  
  return (
    <form className='auth-form'>
    <h2 className='signup'>Log In</h2>
    <span className='subheading'>Start your 30-day free trial.</span>
    <label className='form'>
     <input
     className='box'
     required
     type='text'
     placeholder='E-Mail Address'
     onChange={(e) => setEmail(e.target.value)}
     value={email} />
    </label>
    <label className='form'>
     <input
     className='box'
     required
     type='text'
     placeholder='Password'
     onChange={(e) => setPassword(e.target.value)}
     value={password} />
    </label>
    <div className='input-name'>
    <input type="checkbox" className='check-button'></input>
    <p className='remember'>Remember</p>
    <Link className='forgetLink'>Forget Password?</Link>
   </div>
    <button className='create-account-button'>Sign In</button>
   <div>
    <button className='signingoogle'><img src={Google} alt="Regant-app" className='img'/>Sign in with Google</button>
   </div>
    <div className='last-box'>
    <span className='last-line'>Don't have an account?</span>
    <Link to="/signup" style={linkStyle}>Create an acount</Link>
    </div>
 </form>
  )
}
