
import React from 'react';
import ListItems from '../ListItems';

function Services() {
 const ListItem= ["MOBILE APP DEVELOPMENT","WEB DEVELOPMENT ","INTERNET OF THINGSBOD", " LEASINGSTART-UP"," ACCELERATIONDESIGN"];
 return (
   <div className="Services">
   <ListItems title="Services"  listItems={ListItem} />

   < button className =" btn btn-danger " > Services </button>
   </div>
 );
}

export default Services;

