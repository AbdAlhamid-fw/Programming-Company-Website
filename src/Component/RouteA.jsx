import React from "react";
import { BrowserRouter as Route} from "react-router-dom";
import Home from './Pages/Home';
import Products from './Pages/Products';
import Services from './Pages/Services';
import Client from './Pages/Client';
import ContactUs from './Pages/ContactUs';
import JoinUs from './Pages/JoinUs';
//it is not used 
function RouteA(){
    return(
    <React.Fragment>
    <Route path="/" component={Home} exact />
    <Route path="/products" component={Products} />
    <Route path="/services" component={Services} />
    <Route path="/client" component={Client} />
    <Route path="/about us" component={Services} />
    <Route path="/join us" component={JoinUs} />
    <Route path="/contact us" component={ContactUs} />
    </React.Fragment>
    );
}
export default RouteA;