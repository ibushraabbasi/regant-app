/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Navbar.css'
// import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import profile from '../assets/profile.png'

export default function Navbar() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'black' 
  };
  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
           {/* <img src={Logo} alt="Regant-app"/>  */}
           <Link to='/dashboard' style={linkStyle}>Dashboard</Link>
        </li>
        
        <div className='nav-container' >
        <li><Link to="/addcart" style={linkStyle}><span><IoCartOutline/></span></Link></li>
         <li><Link to='/notification' style={linkStyle}><span><IoNotificationsOutline/></span></Link></li>
         <img src={profile}></img>
        
         <h6>Johnny Bravo</h6>
         <span className='subbheading'>Freelance</span>
        <span><IoChevronDown/></span>
         </div>
      </ul>
    </div>
  )
}
