import React from "react";
// import './style.css';
import Navbar from "../components/Navbar";
import {useState} from 'react'
import axios from 'axios'

function Register() {
  const initialState=Object.freeze({
    firstname:"",
    lastname:"",
    password:"",
    email:""
  })

  const [formData, setFormData] = useState(initialState)
  console.log(formData)

  const HandleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value})
  }
  const HandleSubmit = (e) => {
    e.preventDefault();
    try{
      axios.post('http://127.0.0.1:8000/api/Register/', formData
      ).then(res => {
        console.log(res.data);
      })
      window.location.href = '/Login'
    }catch(err){
          console.log(err)
      }
    }

  return (
    <>
      {/* <Navbar/> */}
      <Navbar />
  
    <div className="wrapper-Register">
    
      <div className="form-wrapper">
        <h1>Create Account</h1>
        <form onSubmit={HandleSubmit} >
          <div className="firstname">
            <label htmlFor="firstname">First Name</label>
            <input
              // className="#"
              placeholder="First Name"
              type="text"
              name="firstname"
              value={formData.firstname}
              noValidate
              onChange={HandleChange}
            />
          </div>
          <div   className="lastname">
            <label htmlFor="lastname">Last Name</label>
            <input
              className="#"
              placeholder="Last Name"
              type="text"
              name="lastname"
              value={formData.lastname}
              noValidate
              onChange={HandleChange}
            />
          </div>
          <div   className="email">
            <label htmlFor="Email">Email</label>
            <input
              className="#"
              placeholder="Email"
              type="email"
              name="email"
              value={formData.email}
              noValidate
              onChange={HandleChange}
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              className="#"
              placeholder="Password"
              type="password"
              name="password"
              value={formData.password}
              noValidate
              onChange={HandleChange}
            />
          </div>
          <div className="createAccount">
            <button type="submit" >Create Account</button>
           
          </div> 
            <div className="create">
            <button type="submit"> <a class="h-c-button h-c-button--flat" href="https://accounts.google.com/SignUp?continue=https://myaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dcreate-account-button" title="Create an account">Create Email</a></button>
            </div>
            <div className="Account-gmail">
            <a href="login" className="A-tag">Already Have an Account</a>
            </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Register;
