import React  from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import Services from '../Pages/Services';
import Client from '../Pages/Client';
import ContactUs from '../Pages/ContactUs';
import JoinUs from '../Pages/JoinUs';
import AboutUs from '../Pages/AboutUs';

function Container(){
    return(
    <div className="container-fluid">
    <Route path="/" component={Home} exact />
    <Route path="/products" component={Products} />
    <Route path="/services" component={Services} />
    <Route path="/client" component={Client} />
    <Route path="/about-us" component={AboutUs} />
    <Route path="/join-us" component={JoinUs} />
    <Route path="/contact-us" component={ContactUs} />
    <style jsx>{`
      .container-fluid{
          padding :  0px;
      }

    `}    
    </style>
     </div>
    ) 
}
export default Container;


