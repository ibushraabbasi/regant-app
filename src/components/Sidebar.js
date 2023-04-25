import './Sidebar.css'
import Logo from '../assets/Logo.png'
import React from 'react'
import { FaGripLines } from "react-icons/fa";
import { BiHomeSmile } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { FiPieChart } from "react-icons/fi";
import { TbSocial } from "react-icons/tb";
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='siderbar-content'>
            <div className='user'>
                 <img src={Logo} alt="Regant-app" width='50%'/> 
                 <span><FaGripLines/></span>
                </div> 
        <nav className='links'>
            <ul>
                <li>
                    <NavLink exact to='/dashboard'>
                    <BiHomeSmile/>
                    <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/orders'>
                    <IoCartOutline/>
                    <span>Orders</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/marketingtool'>
                    <FiPieChart/>
                    <span>Marketing Tools</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/socialmedia'>
                    <TbSocial/>
                    <span>Social Media M.</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
        </div> 
    </div>
  )
}
