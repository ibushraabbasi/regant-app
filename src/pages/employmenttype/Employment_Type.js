import React from 'react'
import './Employment_Type.css'
import Google from '../imgs/Google.png'
import { Link } from 'react-router-dom';

export default function Employment_Type() {
  const linkStyle = {
    textDecoration: "none",
    color: '#1476FF',
    fontSize: '14px',
    fontWeight: '600'
  };
  return (
    <div>
       <form className='auth-form'>
       <h2 className='heading'>Choose Employment Type</h2>
       <span className='subheadingEmploy'>Lorem ipsum dolor sit amet</span>
        <div className='occupationbtn'>
          <button className='text'>Graphic Designer</button>
          <button className='text'>Motion Designer</button>
        </div>
        <div className='occupationbtn'>
          <button className='text'>Copywriter</button>
          <button className='text'>Advertiser</button>
        </div>
        <div className='occupationbtn'>
          <button className='text'>Photographer</button>
          <button className='text'>Videographer</button>
        </div>
        <div className='occupationbtn'>
          <button className='text'>Social Media Manager</button>
          <button className='text'>Copywriter</button>
        </div>
       <button className='create-account-button'>Continue</button>
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
    </div>
  )
}
