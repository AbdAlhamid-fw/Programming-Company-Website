
import React from 'react';
import Image1 from "../img/5.jpg";
import Image2 from "../img/2.jpg";
import Image3 from "../img/3.jpg";
import logo from "../img/logo.jpg";

function Carousel() {
  
  return (
    <div className="Carousel">
    
     <div id="demo" className="carousel slide" data-ride="carousel">
      {/* add layer*/}
        <div className="carousel-indicators p-5 m-b-5 carousel-layer container-fluid">
        <h2 className=" homeH2">Make your dream a reality with us </h2>
        <div className="logo ">
        <img src={logo} alt="Los Angeles" className=" img-responsive carousel-log-img "/></div>
        </div>
      <ul className="carousel-indicators">
        
        <li data-target="#demo" data-slide-to="0" className="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>

   
        <div className="carousel-inner inner">
          <div className="carousel-item active">
            <img src={Image1} alt="Los Angeles" className="carousel-img img-responsive"/>    
          </div>
          <div className="carousel-item">
            <img src={Image2} alt="Chicago" className="carousel-img img-responsive"/>
          </div>
          <div className="carousel-item">
            <img src={Image3} alt="New York" className="carousel-img img-responsive"/>
          </div>
        </div>

        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
</div>

    </div>
  );
}

export default Carousel;

