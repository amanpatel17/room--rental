import React from "react";
import Layout from "./../components/Layout/Layout";
import '../css/homepage.css';
import {  useNavigate } from "react-router-dom";

import Slider from "./Slider";


import Typewriter from "typewriter-effect";


import { GiTakeMyMoney } from "react-icons/gi";


const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* banner */}
      <section id="hero-banner">
      <div className=" img text-center">
       <h1 className="h1  text-white p-5 h1-responsive">Find You Next Perfect Rooms</h1>
    
     
     
       <p className="text-white ">
      
       <div className="App">
         
      <Typewriter
  
       onInit={(typewriter)=> {
     typewriter
      .typeString(" Room")

       .pauseFor(1000)
       .deleteAll()
     
       .typeString(" House ")
       .deleteAll()
       .typeString(" Hostel ")
       .deleteAll()
       .typeString(" PG ")
       
       .start();
       }}
    
       />
    </div>
    



       
              </p>
</div> 



<div className="col-md-12 ">
<section id="rooms-section">
        <div className="container">
    
    <h1 className="h1 h-responsive mb-4">
    Choosing the room 
    </h1>
    <h6>
There are many preferences to consider while choosing the room. One of the preference is to choose a room based on the number of bedrooms in the house. Click on the below ones to select the rooms.
</h6>
  </div>
</section>

       



  <div className="row ">
    <div className="col-xl-4 col-lg-6" onClick={() => navigate('/category/boys')}>
      <div className="card l-bg-cherry  my-lst">
        <div className="card-statistic-3 p-4">
          <div className="card-icon card-icon-large"><i className="fas fa-male" /></div>
          <div className="mb-4">
            <h5 className="card-title mb-0">BOYS</h5>
          </div>
          <div className="row align-items-center mb-2 d-flex">
            <div className="col-8">
              <h2 className="d-flex align-items-center mb-0">
              100+ Rooms
              </h2>
            </div>
          
          </div>
          <div className="progress mt-1 " data-height={8} style={{height: 8}}>
            <div className="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} style={{width: '25%'}} />
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-4 col-lg-6" onClick={() => navigate('/category/girls')}>
      <div className="card l-bg-blue-dark  my-lst">
        <div className="card-statistic-3 p-4">
          <div className="card-icon card-icon-large"><i className="fas fa-female" /></div>
          <div className="mb-4">
            <h5 className="card-title mb-0">GIRLS</h5>
          </div>
          <div className="row align-items-center mb-2 d-flex">
            <div className="col-8">
              <h2 className="d-flex align-items-center mb-0">
                100+ Rooms
              </h2>
            </div>
           
          </div>
          <div className="progress mt-1 " data-height={8} style={{height: 8}}>
            <div className="progress-bar l-bg-green" role="progressbar" data-width="25%" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} style={{width: '25%'}} />
          </div>
        </div>
      </div>
    </div>
   
    <div className="col-xl-4 col-lg-6" onClick={() => navigate('/category/pg')}>
      <div className="card l-bg-orange-dark  my-lst">
        <div className="card-statistic-3 p-4">
          <div className="card-icon card-icon-large"><i className="fas fa-user" /></div>
          <div className="mb-4">
            <h5 className="card-title mb-0">PG</h5>
          </div>
          <div className="row align-items-center mb-2 d-flex">
            <div className="col-8">
              <h2 className="d-flex align-items-center mb-0">
              100+ Rooms
              </h2>
            </div>
            
          </div>
          <div className="progress mt-1 " data-height={8} style={{height: 8}}>
            <div className="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} style={{width: '25%'}} />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



     
      </section>



      <div className="">
  <div className="col-lg-12 p-5">
    <div className="shadow bg-white"> 
    
      <div className="card-body">
       <h2>
       Do you have an extra room to rent out ?


       </h2>
       <p>An easiest way to rent a room and find flatmates.</p>
       
        <div className="row">
          <div className="col-8 b-r align-self-center">
            <div className="d-flex">
     <a href="/profile">
       <button className="btn btn-info rounded-pill ">
Rent Home
       </button></a> 
              <div className="display-6 text-info"></div>
            
            </div>
          </div>
          <div className="col-4 text-center">
            <h1 className="font-light m-b-0"><GiTakeMyMoney/></h1> 
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      
      {/* Property */}



<section id="property-section">
<div className="container">
   
    <h1 className="h1 h-responsive mb-4">
Recently Add Rooms
    </h1>
    <h6>Rooms for rents is availble in your place Click the link and see for more details. </h6>
  


<Slider/>

</div>

</section>

{/* service */}



{/* 

<section id="about-section" className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6" >
              <div className="image mt-3">
                <img src={img2}   alt="" />
              </div>
            </div>
            <div className="col-md-5 mt-3 pl-5">
              <h6 className="h6 text-info  m-0">About Us</h6>
              <h1 className="h1 h1-responsive mb-3 ">
                we Provide The Best Room For You!
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, eligendi?
                <br />
                <p></p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                animi!
              </p>
              <button className="btn  rounded-pill btn-info">Learn More</button>

              <div className="col-md-5  my-auto mr-auto"></div>
            </div>
          </div>
        </div>
      </section> */}
      

  
   





          
  



{/* mail section
<section id="mail-section">
<div className="newsletter-subscribe">
  <div className="container">
    <div className="intro">
      <h2 className="text-center">Subscribe for our Newsletter</h2>
      <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
    </div>
    <form className="form-inline" method="post">
      <div className="form-group"><input className="form-control rounded-pill " type="email" name="email" placeholder="Your Email" /></div>
      <div className="form-group"><button className=" btn btn-danger rounded-pill" type="submit">Send </button></div>
    </form>
  </div>
</div>


</section> */}
        
        
            


    </Layout>
  );
};

export default HomePage;
