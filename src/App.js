import React,{Component} from 'react';
import Container from './Component/Layout/Container';
//import logo from './logo.svg';
//import "./bootstrap.min.css";
import './App.css';
//import './font-awesome.min.css';
import Header from './Component/Layout/Header';
import Footer from './Component/Layout/Footer';
import { BrowserRouter as Router} from "react-router-dom";

class  App extends Component {
  //look to this ,I can change style from function 
  getStyle = () => {
     return{
       padding : "0px"
     }
  }
  render() {
    return(
    <div className="App"  style={this.getStyle()} >
    <Router>
     <Header/>
     <Container />
     <Footer />
    </Router>
     </div>
    )
  
}
}
export default App;
