
import React from 'react';
import {Link} from "react-router-dom";



function Footer() {
  return (

    <footer  className="text-center">

          <div className=" footerCover">
            <div>
                <h2 className="footer-title1">Say Hi and let's create something</h2>
                <h3 className="footer-title2"> great together</h3>
                <Link className="nav-link" to="/join-us">
                <button className="footer-btn"> Join Us  </button>
                </Link>
            </div>
          </div>

        <div className="row footer-links">
             <div className="col"> <Link className="nav-link" to="/">PCW</Link></div>
             <div className="col"><Link className="nav-link" to="/Contact-us">Contact</Link></div>
             <div className="col"><Link className="nav-link" to="/Services">Services</Link></div>
             <div className="col"><Link className="nav-link" to="/About-us">About</Link></div>
             <div className="col"><Link className="nav-link" to="/Blog">Blog</Link></div>
             <div className="col"><Link className="nav-link" to="/In">In</Link></div>
         </div>
      <style jsx>{`
        footer{
          font-size: 10px;
        }
       .footerCover{
        background-color: #E43A70;
        font-family: proxima nova regular,Montserrat;
        height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color:#fff;
        letter-spacing: .2em;
          }
          .footer-title1{
            font-family: proxima nova regular;
            font-size: 5.5em;
          }
          .footer-title2{
          font-family: proxima nova bold;
          font-size: 5.5em;
          font-weight: bold;
        }
        .footer-btn{
          margin-top: 6%;
          padding: .6em 3.5em;
          border-radius: 100px;
          font-size: 2em;
          color: #e43a70;
          background: #fff;
          border: none;
          font-weight: bold;
        }
        .footer-links{
          height: 10vh;
         align-items: center;
      /* justify-items: center; */
         font-size: 1.125em;
         letter-spacing: .2em;
         margin: 0px 5em;
         padding: 1.125em 0 1.5em;
        }
      `}
      </style>
  </footer>
  );
}

export default Footer;

