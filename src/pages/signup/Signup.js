import './Signup.css'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

export default function Signup() {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form className='auth-form'>
       <h2>Sign up</h2>
       <p>Lorem ipsum dolor sit amet</p>
       <label>
        <input
        required
        type='text'
        placeholder='Full Name'
        onChange={(e) => setDisplayName(e.target.value)}
        value={displayName} />
       </label>
       <label>
        <input
        required
        type='text'
        placeholder='Email Address'
        onChange={(e) => setEmail(e.target.value)}
        value={email} />
       </label>
       <label>
        <input
        required
        type='password'
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
        value={password} />
       </label>
       <button className='btn'>Create Account</button>
       <span>Accept terms and conditions</span>
       <button className='btn'>Sign in with Google</button>
       <span>Already have an account?</span>
       <Link>Log In</Link>
    </form>
  )
}
