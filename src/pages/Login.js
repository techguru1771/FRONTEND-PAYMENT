import React from 'react'
// import './style.css';

import {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router"
import Navbar from '../components/Navbar'


function Login() {
  const initialState=Object.freeze({
    email:"",
    password:"",
  })
  const [formData, setFormData] = useState(initialState)
  console.log(formData)
  let navigate = useNavigate()

  const HandleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value})
  }


  const HandleSubmit = (e) => {
    e.preventDefault();

    try{
      axios.post('http://localhost:8000/api/Signin/', formData
      ).then(res => {
        if(res.data){
          console.log(res.data.token);
         sessionStorage.setItem("token",res.data.token )
         sessionStorage.setItem("user", "USER" )
         sessionStorage.setItem('User', formData.email)
         axios.defaults.headers["Authorization"] = `Bearer ${sessionStorage.getItem("token")}` 
         navigate ("/Welcome")
        }
       
      })
      
      

      
    }catch(err){
          console.log(err)
      }
      setFormData('')
    }

  return (
    <>

      <Navbar />
       <div className="wrapper-Login">
   <div className="form-wrapper">
       <h1>User Login</h1>
       
       <form onSubmit={HandleSubmit}>
       <div className="email">
       <label htmlFor="email">Email</label>
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
         placeholder="password"
         type="password"
         name="password"
         value={formData.password}
         noValidate
         onChange={HandleChange}
       />
     </div>  

     <div className="createAccount">
            <button type="submit-log" >Login</button>
          
          </div>
          <div className="Account-gmail">
            <a href="login" className="A-tag">Already Have an Account</a>
            </div>

       </form>
   </div>
</div>
 
    </>
   
  )
}

export default Login;







