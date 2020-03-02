
import React from 'react';
import Image1 from "../img/5.jpg";
import Image2 from "../img/2.jpg";
import Image3 from "../img/3.jpg";

function Carousel() {
  
  return (
    <div className="Carousel">
    
     <div id="demo" class="carousel slide" data-ride="carousel">
      <ul class="carousel-indicators">
        
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
        <h2 class="carousel-indicators p-5 m-b-5 homeH2">Make your dream a reality with us </h2>
      </ul>


        <div class="carousel-inner inner">
          <div class="carousel-item active">
            <img src={Image1} alt="Los Angeles" className="carousel-img"/>    
          </div>
          <div class="carousel-item">
            <img src={Image2} alt="Chicago" className="carousel-img"/>
          </div>
          <div class="carousel-item">
            <img src={Image3} alt="New York" className="carousel-img"/>
          </div>
        </div>

      
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>

</div>

    </div>
  );
}

export default Carousel;

