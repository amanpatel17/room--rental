
import React from 'react'


import { Link } from "react-router-dom";

import logo  from '../../images/logo.png'

const Header = () => {




  
  return (
   
    <header className="lead-demosticky-top shadow">
    <nav className="navbar navbar-expand-lg     navbar-light bg-white">
      <div className="container p-2">
        <a className="navbar-brand" href="/"><img src={logo} style={{width:'60px'}} /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span> 
    </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
       
          <ul className="navbar-nav mr-auto mt-3 mt-lg-0">
            <li className="nav-item">
 
<Link to='/' className="  nav-link">
<b>
Home

</b>
</Link>  
            </li>
            <li className="nav-item">
              <Link to='/contact-us' className="nav-link">
           <b>
           Contact
            </b>  
</Link>  

             
            </li>
            <li className="nav-item">
              <Link to='/about-us' className="nav-link">
            <b>
            About
              </b>  
</Link>  

             
            </li>
           
          </ul>

          
          <ul className="navbar-nav">
            <li className="nav-item">

<Link to='/profile' className="btn btn-outline-info rounded-pill">
Create Listing
</Link>              
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </header>
  
     
 

 




  );
};

export default Header;
