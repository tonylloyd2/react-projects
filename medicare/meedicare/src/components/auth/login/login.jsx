// import { Link } from 'react-router-dom';
import './Loginstyle.css'
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

function Login() {

  return (

    <div className="container">
    <div className="title">Login</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
         
          
          <div className="input-box" >
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your email" required />
          </div>
         
          <div className="input-box">
            <span className="details">Password</span>
            <input type="text" placeholder="Enter your password" required />
          </div>
        
        </div>
        <div className="button">
          <input type="submit" value="Login" />
        </div>
        <div className="signup"></div>
        <div className="forgot-password">
            
            {/* <Link to="/signup"><p>forgot password ?</p></Link> */}

        </div>
      </form>
    </div>
  </div>


    )
}

export default Login ;
