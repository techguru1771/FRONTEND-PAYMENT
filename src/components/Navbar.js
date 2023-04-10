import React from "react";
import logo from '../image/unical pics.jpg'
// import { Link } from 'react-router-dom'

// import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function Navbar() {
  let authUser = sessionStorage.getItem('user');
  console.log(authUser);

  return (
    <nav>
      <a href='/hello' to='/' className='logo'>
        <img src={logo} alt='logo'/>
      </a>
      <label className='menu-icon' htmlFor='menu-btn'>
        <span className='nav-icon'></span>
      </label>
      <input type='checkbox' id='menu-btn'/>
      <ul className='menu'>
        <li><Link to='/'>Home</Link></li>
        { authUser === 'USER' ? (
          <>
            <li><Link to="/UserAfterLogin">UserAfterLogin</Link></li>
            <li><Link to="/Welcome">Welcome</Link></li>
            <li><Link to="/PaystackIntegation">PaystackIntegation</Link></li>
            <li><Link to="/Logout">Logout</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/Register">Register</Link></li>
            <li><Link to= "/Login">Login </Link></li>
          </>
        )}
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/About">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
