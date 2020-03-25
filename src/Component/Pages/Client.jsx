
import React from 'react';
import Image1 from "../../img/5.jpg";
import Image2 from "../../img/2.jpg";
import Image3 from "../../img/3.jpg";
class Client extends React.Component{
state = {
  hover1: false,
  hover2: false,
  hover3: false,
  hover4: false
}

hover = (name) => {
  this.setState({[name]: true});
}

unhover = (name) => {
  this.setState({[name]: false});
}

render() {

      const names = {
          n1:'Fadi selo',
          n2:'Ahmed fawal',
          n3:'Nour silo',
          n4:'abooood'
      }

      const testimonials = {
          t1: '"The service is amazing and cheap."',
          t2: '"Very professional people."',
          t3: '"One of the best in the field."',
          t4: '"I recommend it to everybody."'
      }


      return (
          <div className='testimonials' onMouseEnter={() => this.hover('hover1')} onMouseLeave={() => this.unhover('hover1')}>
              <div className='testimonials-holder'>
                  <img src={Image1} alt="osama"/>
                  <div  className="test-section">
                      {this.state.hover1 ? testimonials.t1 : names.n1}
                  </div>
              </div>
              <div className='testimonials-holder' onMouseEnter={() => this.hover('hover2')} onMouseLeave={() => this.unhover('hover2')}>
                  <img src={Image2} alt="ahmed"/>
                  <div  className="test-section">
                      {this.state.hover2 ? testimonials.t2 : names.n2}
                  </div>
              </div>
              <div className='testimonials-holder' onMouseEnter={() => this.hover('hover3')} onMouseLeave={() => this.unhover('hover3')} >
                  <img src={Image3} alt="sara"/>
                  <div className="test-section">
                      {this.state.hover3 ? testimonials.t3 : names.n3}
                  </div>
              </div>
              <div className='testimonials-holder' onMouseEnter={() => this.hover('hover4')} onMouseLeave={() => this.unhover('hover4')}>
                  <img src={Image1} alt="omar"/>
                  <div  className="test-section">
                      {this.state.hover4 ? testimonials.t4 : names.n4}
                  </div>
              </div>
          </div>
  )
}}


export default Client;
