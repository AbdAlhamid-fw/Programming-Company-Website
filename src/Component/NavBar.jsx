
import React from 'react';
import { BrowserRouter as Router, Route,Link} from "react-router-dom";
import Home from './Pages/Home';
import Products from './Pages/Products';
import Services from './Pages/Services';
import Client from './Pages/Client';
import ContactUs from './Pages/ContactUs';
import JoinUs from './Pages/JoinUs';
import AboutUs from './Pages/AboutUs';
import Styles from './Styles';


function NavBar() {
  
  return (
    <Router>
    
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark NavBar sticky-top " >
 
  <Link className="navbar-brand" to="logo">PCW </Link>

 
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
      <Link className="nav-link" to="/about us">About us </Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link" to="/join us">Join us </Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link" to="/contact us">Contact us </Link>
    </li>

    </ul>
      <Styles />
  </div>
</nav>
    
    
      <div className="container1">
    <Route path="/" component={Home} exact />
    <Route path="/products" component={Products} />
    <Route path="/services" component={Services} />
    <Route path="/client" component={Client} />
    <Route path="/about us" component={AboutUs} />
    <Route path="/join us" component={JoinUs} />
    <Route path="/contact us" component={ContactUs} />
     </div>
  </Router>
  );
}

export default NavBar;

