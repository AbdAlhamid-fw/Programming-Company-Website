
import React from 'react';
import LinksList from '../LinksList';
import ListItems from '../ListItems';

//import image1 from '../img/ContactUs1.jpg';

function ContactUs() {
  const emails = ["Eng.Fadi@gmail.com","Abood@gmail.com","Eng.Nour@gmail.com"];
  const phones = ["0622121112","54546554464","564564564545","5464653486","09554454624"];
 /*const contactUs ={
  background: rgba(0,0,0,0.4)
 }*/
 return (
   <div className="ContactUs container " >
  
     <div className="row">
        
    <form role="form" class="col">

  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" placeholder="Enter email" id="email"/>
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" placeholder="Enter password" id="pwd"/>
  </div>
  <textarea className="form-control textarea-contactUs" name="textarea" id="textarea" cols="30" rows="5">message</textarea>
  <button  class="btn btn-primary">Send</button>
</form>
    
    <div  className="col">
    <div className="contactUs-emails">
      <LinksList linksLable={emails} title="Emails" href="emails"/>
      </div>
      <div className="contactUs-emails pt-60">
      <ListItems listItems={phones} title="Phones"/>
      </div>
    </div>
   </div>


   
   </div>
 );
}

export default ContactUs;

