
import Navbar from './Navbar'
import React from 'react'
import './style.css'


export default function About() {
  return (
   <>
    <Navbar/>
    <div className="About">
        <div className="About-text">  
          <h2>ABOUT</h2>
          <p>
            <h3>MISSON</h3>
            To Help students make payments online FASTER and more CONVENIENTLY from the comfort of their Space.
          </p>
            <p>
              <h3>VISSION</h3>
              To serve students Better
              To help students stay FOCUS on their Academics while making payments without going to the banks
            </p>
        </div>
    </div>
   </>
  )
}

