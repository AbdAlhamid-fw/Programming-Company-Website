
import React from 'react';

function  Style(props) {
 const color = props.color;
 return(
     <div className="style-comp ml-2" >
        <button onClick={ ()=> props.colorChange(color)} style= {{background :color }} className="col color-comp">    
        </button>
     </div>
 )
}

export default Style;

