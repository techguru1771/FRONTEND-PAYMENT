import React from "react";
import { Redirect, Link } from "react-router-dom";
import Navbar from "./Navbar";

function UserAfterLogin() {
    let authuser = sessionStorage.getItem('Key_Variable')
    console.log(authuser)
    if (authuser == null) {
        return (<Redirect to ="/Login" />)
    }
    else {
        let name = sessionStorage.getItem('username')
        console.log(name)
        return(
            <div>
                <Navbar />
               <div className="wrapper">
               <div className="form-wrapper">
               <br /> <br />
               <h3 className="margin">WELCOME</h3>
               <br /> <br />
               
                <Link to ="/Welcome"> <button type="button" className="btn btn-info margin"> Payment </button></Link>
            </div>
            </div>
            </div>
        )
    }
  
}

export default UserAfterLogin;