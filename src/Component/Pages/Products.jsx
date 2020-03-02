import React from 'react';
import ListItems from  "../ListItems";

function  Products() {
 const ourProducts = ["MTN website ","fand app","resial app","and ......"];
 return (
   <div className="Products">
   <h3>Our Productss</h3>
 <ListItems listItems={ourProducts} />
   </div>
 );
}

export default Products;

