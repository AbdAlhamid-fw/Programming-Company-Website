import React from 'react';
//import ListItems from '../ListItems';
import {DataServices} from '../Data.js';
//import { reverse } from 'dns';

class Services extends React.Component {
  constructor(props){
    super(props);
    this.state ={ 
      I :"web devloper"
      }}
 //data
 DataServices = DataServices;
 
    //change color
    chageFlexFlow = (id)=>{
      if(id %2==0){
        return {flexFlow :'row-reverse'}
      }else{
        return {flexFlow :'row'}
      }
    }
  render(){
     return (
        <div className="Services">  
        {/* services cover */}
        <div className="services-cover">
        <h1>{this.DataServices.title}</h1>
          <div className="services-img p-0 mb-2" >
            <img src={this.DataServices.img} alt="services-img"/>
          </div>
        <h4 className="mb-2 body-services text-cover">{this.DataServices.text}</h4>
          </div>
            {/*texts and imgs */ }
        <div className="service container" >
            {this.DataServices.data.map((item) =>
          <div className="service-items row m-0"  key={item} style={this.chageFlexFlow(item.id) /*item.flexFlow*/}>
                {/*text*/  /*this.chageFlexFlow()*/ }
          <div className='col-md-6 col-sm-12 service-cover-text '>
                  <h2>{item.subtitle}</h2>
                  <h3>{item.text}</h3>
                  <div className="lowerDiv">
                  {item.items.map((item) =>
                  <div className="service-items-item" key={item}>
                    <h3>{item.itemName}</h3>
                    <h4>{item.itemText}</h4>
                    </div>
                  )}
                  </div>
          </div>

          {/*img*/}
          <div className="service-img col-md-6 col-sm-12 p-0" >
            <img src={item.img} alt="service-img" />
          </div>
          </div>
          
              )}
      </div>
    
        {/* style */}
          <style jsx>{`
         .service.container{padding :0px}
           .body-services{
            font-size: 2.25em;
        }
           /*cover*/
          .services-cover{
            padding : 0 0 8% 0 ;
            margin : 0px 8%;
        
          }
          .service-cover-text{
           /* align-self: center;*/
            text-align: start;
            padding: 4% 9%;
          }
          .lowerDiv{
            padding-top :20%;
          }
          
        `}</style>
        </div>
      );
}
}

export default Services;

