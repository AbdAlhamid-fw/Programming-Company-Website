import React,{Component} from 'react';
//import Container from './Component/Layout/Container';
//import logo from './logo.svg';
//import "./bootstrap.min.css";
import './App.css';
import Header from './Component/Layout/Header';
import Footer from './Component/Layout/Footer';


class  App extends Component {
  getStyle = () => {
     return{
       padding : "0px"
     }
  }


  render() {
    return(
    <div className="App"  style={this.getStyle()} >
     <Header />
    
     <Footer />
     </div>
    )
  
}
//style

}
export default App;
