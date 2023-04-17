import React from 'react'
import './Navbar.css'
import Logo from '../assets/Logo.png'

export default function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
           <img src={Logo} alt="Regant-app"/> 
        </li>
      </ul>
    </div>
  )
}
