import React from "react";
//import {Link} from 'react-router-dom';
function LinksList(props){  
    
  /*  function handleClick(e) {
    e.preventDefault(); }*/
     // props are linksLable , href                        
   if(props.linksLable){
    var listItems = props.linksLable.map((link) =>
    <li  className="nav-item"  key={link}> 
       <a href={props.href} >{link}</a>
    </li>
       );
    }
        return (
        
           <div className="LinksList">
           <h3>{props.title}</h3>
           <ul className="nav first nav-pills flex-column ">
              {listItems}
           </ul>
        </div>
        
    )
}
export default LinksList;