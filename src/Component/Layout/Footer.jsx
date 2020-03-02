
import React from 'react';
import LinksList from '../LinksList';
import ListItem from '../ListItems';

function Footer() {
  const linksLable = ["home","services","join us"];
  const emails = ["Eng.Fadi@gmail.com","Abood@gmail.com","Eng.Nour@gmail.com"]
  return (

    <footer  className="Footer jumbotron">
      <div class ="container-fluid">
        <div className="row footer-row">
  
            <div className= "col Footer-part1">
                 <ListItem title="LinksList" listItems={linksLable}/>
             </div>

            <div className= "col Footer-part1">
                 <LinksList title="linksLable" linksLable={linksLable} href="linksLable"/>
             </div>

            <div className= "col Footer-part1">
                 <LinksList title="emails" linksLable={emails} href="email"/>
            </div>

        </div>
        <div className="row">

            <div className= "col Footer-part1"> 
                <LinksList title="col 4" linksLable={linksLable}/>
             </div>

             <div className= "col Footer-part1"> 
                <LinksList title="col 5" linksLable={linksLable}/>
             </div>

         </div>
            
      </div>  
  </footer>
  );
}

export default Footer;

