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


//fix in index
//Index.js:

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Pages
import Home from './Home';
import About from './main_pages/About';
import Faq from './main_pages/Faq';
import Signup from './main_pages/Signup';
import Login from './main_pages/Login';
import Terms from './main_pages/Terms';
import Privacy from './main_pages/Privacy';
import Header from './header_footer/Header';
import Footer from './header_footer/Footer';

//Dashboards
import Admin_Dashboard from './dashboards/admin_dashboard/Admin_Dashboard';
import Vendor_Dashboard from './dashboards/vendor_dashboard/Vendor_Dashboard';
import Customer_Dashboard from './dashboards/customer_dashboard/Customer_Dashboard';

// auth wrapper
import AuthenticatedWrapper from './auth/AuthenticatedWrapper'

const Layout = ({ children }) => (
    <div>
      <Header />
        {children}
      <Footer />
    </div>
  );

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Signup} />
            <Route path="/login" component={Login} />
            {/* Authenticated routes */}
            {/* dashboard routes */}
            <AuthenticatedWrapper path="/admin-dashboard" component={Admin_Dashboard} />
            <AuthenticatedWrapper path="/vendor-dashboard" component={Vendor_Dashboard} />
            <AuthenticatedWrapper path="/customer-dashboard" component={Customer_Dashboard} />

            {/* pages that have same header and footer */}
            <Layout>
              <Route path="/about" component={About} />
              <Route path="/faq" component={Faq} />
              <Route path="/terms-&-conditions" component={Terms} />
              <Route path="/privacy-policy" component={Privacy} />
            </Layout>

        </Switch>
    </BrowserRouter>),
  document.getElementById('root')
);
export default RouteA;