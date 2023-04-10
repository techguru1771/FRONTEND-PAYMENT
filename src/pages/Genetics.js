import React from 'react'
// import Navbar from '../components/Navbar'
import './genetics.css'
import {Link} from "react-router-dom"
import Navbar from '../components/Navbar'

function Genetics() {
  return (
   <>
   <Navbar/>
   {/* <Navbar/> */}
    <div class="wrapper-gene">
        <div class="for-texts">
            <div class="main">
            <div class="pure">
                <h1 class="webs">Genetics & Biotechnology.</h1>
                <p class="purelife">
                    Discovering The YOU in YOU....
                </p>
            </div>
        </div>
        <div class="glot">
           <div class="reel">
            <div>
            <Link to="/Register" class="btnn">Register</Link>
            </div>
            <div>
            <Link to="/Login" class="btnn">Login </Link>
            </div>
           </div>
         </div>
        </div>
        </div>
        <div class="box">
            <span class="dna"></span>
            <span class="dna"></span>
            <span class="dna"></span>
            <span class="dna">Adenine</span>
            <span class="dna"></span>
            <span class="dna"></span>
            <span class="dna">Thymine</span>
            <span class="dna"></span>
            <span class="dna"></span>
            <span class="dna"></span>
            <span class="dna">Guanine</span>
            <span class="dna"></span>
            <span class="dna"></span>
            <span class="dna"></span>
            <span class="dna">Cytosine</span>
            <span class="dna"></span>
            <span class="dna"></span>
            <span class="dna"></span>
            <span class="dna"></span>
            <span class="dna"></span>
            <span class="dna"></span>
            <span class="dna"></span>
            <span class="dna"></span>
            <span class="dna"></span>
            <span class="dna"></span>
            <span class="dna"></span>
            <span class="dna"></span>
            <span class="dna"></span>
            <span class="dna"></span>
            <span class="dna"></span>
        </div>
   </>
  )
}

export default Genetics