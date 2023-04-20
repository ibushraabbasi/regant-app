import './Signup.css'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import Google from '../imgs/Google.png'

export default function Signup() {
  const [displayName, setDisplayName] = useState('')
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
       <h2 className='signup'>Sign up</h2>
       <span className='subheading'>Lorem ipsum dolor sit amet</span>
       <label className='form'>
        <input
        className='box'
        required
        type='text'
        placeholder='Full Name'
        onChange={(e) => setDisplayName(e.target.value)}
        value={displayName} />
       </label>
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
        type='password'
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
        value={password} />
       </label>
       <button className='create-account-button'>Create Account</button>
      <div className='input-name'>
       <input type="checkbox" className='check-button'></input>
       <label className='line'>Accept terms and conditions</label>
      </div>
      <div>
       <button className='signingoogle'>  <img src={Google} alt="Regant-app" className='img'/>  Sign in with Google</button>
      </div>
      
       <div className='last-box'>
       <span className='last-line'>Already have an account?</span>
       <Link to="/login" style={linkStyle}>Log in</Link>
       </div>
    </form>
  )
}
