
import React from 'react';
import ListItems from  "../ListItems";

function  Client() {
 const ourCLient = ["CCNN","BBR","FSS","SAMA","ROBI"];
 return (
   <div className="Client">
   <h3>Our Clients</h3>
 <ListItems listItems={ourCLient} />
   </div>
 );
}

export default Client;

