import React from 'react';
//import LinksList from '../LinksList';
//import ListItems from '../ListItems';

function JoinUs() {
 return (
   <div className="JoinUs">
    <div className="JoinUs container " >
   <h2>Join us</h2>
  <div className="row">
     
 <form  class="col">

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
</div>
</div>
   </div>
 );
}

export default JoinUs;
