import React from "react";
//import {Link} from 'react-router-dom';
// pass listItems , title
function ListItem(props){ 
    const itemsArr = props.listItems;   
    if(itemsArr){
    var listItems = itemsArr.map((item) =>
    <li  className="nav-item"  key={item}>{item}</li>
       );
    }
        return (
        
           <div className="ListItems container mb-2 pb-2 pt-2">
           <h3>{props.title }</h3>
           <ul className="nav first nav-pills flex-column ">
              {listItems}
           </ul>
        </div>
        
    )
}
export default ListItem;