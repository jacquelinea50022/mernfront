import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import logo from "./images/logo-color.png";
import "./style.css";

// Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light purple-bg">
        <NavLink className="navbar-brand" to="/">
          <img style={{ width: "25%" }} src={logo} alt="Logo" />
          
        </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
           <li className="nav-item purple-t">
             <NavLink className="nav-link purple-text" to="/create">
               Create New Blog
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}
