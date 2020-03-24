import React from 'react';
import ListItems from '../ListItems';
import {DataServices} from '../Data.js';
//import { reverse } from 'dns';

class Services extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      flexFlow  : {
        flexFlow :'row-reverse'
      }}}

 ListItem= ["MOBILE APP DEVELOPMENT","WEB DEVELOPMENT ","INTERNET OF THINGSBOD", " LEASINGSTART-UP"," ACCELERATIONDESIGN"];
 //data
 services = DataServices;
 
  chageFlexFlow = () => {
    if(this.state.flexFlow.flexFlow=="row-reverse"){
      this.setState({ 
        flexFlow : {
          flexFlow :'row'
      }
    });
      console.log(this.state);
     // return this.state.flexFlow.flexFlow;
    }else{
      this.setState({ 
        flexFlow : {
          flexFlow :'row-reverse'
      }
    });
      console.log(this.state);
     // return this.state.flexFlow.flexFlow;
    }} 
  render(){
     return (
        <div className="Services">
        <h1>{this.services.title}</h1>
          <div className="services-img p-0 mb-2" >
            <img src={this.services.img} alt="services-img"/>
          </div>
        <h4 className="mb-2">{this.services.text}</h4>
            {/*text and img */ }
        <div className="service container" >
            {this.services.data.map((item) =>
          <div className="service-items row m-0"  key={item} style={this.state.flexFlow}>
                {/*text*/  /*this.chageFlexFlow()*/}
          <div className='col-md-6 col-sm-12 p-2'>
                  <h2>{item.subtitle}</h2>
                  <h3>{item.text}</h3>
                  {item.items.map((item) =>
                  <div className="service-items-item" key={item}>
                    <h3>{item.itemName}</h3>
                    <h4>{item.itemText}</h4>
                    </div>
                  )}
          </div>

          {/*img*/}
          <div className="service-img col-md-6 col-sm-12 p-0" >
            <img src={item.img} alt="service-img" />
          </div>
          </div>
          
              )}
      </div>
        
        <ListItems title="Services"  listItems={this.ListItem} />
        </div>
      );
}
}

export default Services;

