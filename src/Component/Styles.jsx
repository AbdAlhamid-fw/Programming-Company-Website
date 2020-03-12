
import React from 'react';
import Style from  "./Style";
import changeCss from "../changeCss.css";


class Styles extends React.Component{
    
    constructor(props){
       super(props);
       this.state ={
        color : ""
    }
    }
    colors=['red','green','blue','white','black',"#9317174f","#1d3122e0",'#313532e0','#051846eb','#3d3f42eb'];

  //componentDidUpdate executed when any  change for state
      componentDidUpdate(){
        document.body.style.backgroundColor = this.state.color;
      }
      componentWillMount(){
        document.body.style = {padding:"100px"};
      }

    componentWillUnmount() {
    document.body.style.backgroundColor = "red"; // or restore the original value
}

    colorChange = (color) => {
      console.log("the state was :" ,this.state)
      this.setState({
          color: color
      })
      console.log("state now :", this.state,"color is " ,color);
      //document.body.style.backgroundColor = this.state.color;
    
    }

    render(){
        return(
            <div className="dropdown dropleft float-right colors-comp" >
            <button type="button" className="btn btn-primary dropdown-toggle "  data-toggle="dropdown">
              Colors
            </button>
           
              <div className="dropdown-menu  ">
            {this.colors.map((color) =>
                        <Style colorChange={this.colorChange} color ={color} key={color}/>
                        
                        )}
                        </div>
            </div>
            );
            }
            }

export default Styles;

