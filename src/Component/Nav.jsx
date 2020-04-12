import React from "react";
import {Link} from "react-router-dom";
import Styles from './Styles';

function Nav(){
     return(
    
    <nav className="navbar navbar-expand-sm   NavBar sticky-top " >
    <Link className="navbar-brand" to="/">PCW </Link>
  
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
  
   
    <div className="collapse navbar-collapse fluid-container" id="collapsibleNavbar">
      <ul className="navbar-nav">
        
        <li className="nav-item ">
        <Link className="nav-link" to="/">Home</Link>
      </li>
  
      <li className="nav-item">
        <Link className="nav-link" to="/products">Products </Link>
      </li>
  
      <li className="nav-item">
        <Link className="nav-link" to="/services">Services </Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link" to="/client">Client </Link>
      </li>
  
      <li className="nav-item">
        <Link className="nav-link" to="/about-us">AboutUs </Link>
      </li>
  
      <li className="nav-item">
        <Link className="nav-link" to="/join-us">JoinUs </Link>
      </li>
  
      <li className="nav-item">
        <Link className="nav-link" to="/contact-us">ContactUs </Link>
      </li>
  
      </ul>
        <Styles />
    </div>
    {/* style */}
     <style jsx>{`
    .navbar{
      background: #fffffff2;
      padding: 3.35% 5em;
      font-family: "proxima nova blk";
      font-size: 13.7px;
      font-weight: bold;
      height : 10vh;
        }
     .collapse.navbar-collapse.fluid-container{
       justify-content: flex-end;
        }
        
     `}
     </style>
  </nav>
 
  )

   
}
export default Nav;