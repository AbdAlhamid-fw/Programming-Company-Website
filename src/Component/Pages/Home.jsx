
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from "../Carousel";
function Home() {
  return (
    <div className="Home">
     <Carousel />
    <h1>Home</h1>
   <Jumbotron fluid className="jumbo border rounded ">
            <div className="row">
                <div className="jumbotron-text float-right text-center col-md-5 offset-md-6">
                    <div className="jumbotron-header">Company Website PCW</div>
                    <div className="row">
                        <div className="col-md-8 offset-md-2" >
                        Fadi's Company <b> here. </b>
                        </div>
                    </div>
                </div>
            </div>
            
        </Jumbotron>
    

<style jsx>{`
  .jumbo.border.rounded{
     background : red;
     text-align : center;
  }
`}</style>
</div>
  );
}
export default Home;
