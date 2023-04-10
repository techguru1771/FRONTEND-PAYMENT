import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
import './style.css'





function Welcome() {
  return (
    <>
    <Navbar/>
    <div>
    <div className="wrapper-Welcome">
      <div className="form-wrapper-Welcome">
        <br /> <br />
        <h2 class="margin">WELCOME </h2>
        <br />
        <br />
        <Link to="/paymentgateway">
          <button type="button" className="Payment-btn">
           Payment
          </button>
        </Link>
      </div>
    </div>
  </div>
  </>
    
  )
};

export default Welcome;