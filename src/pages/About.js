import React from 'react'
import Layout from '../components/Layout/Layout'
import '../css/about.css';

import { GiTakeMyMoney } from "react-icons/gi";

const About = () => {

    
  const img1 =
  "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
const img2 =
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";


  return (
    <Layout>
  




<div className="container mt-5 mb-4 bg-light">
<div className="p-3 ">
 
  <div className="row justify-content-center">
  <div className="card-body text-center">
    <h4>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, iste.
    </h4>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut iure nostrum, officiis natus corrupti blanditiis! Tenetur nisi nostrum, libero doloremque eligendi asperiores qui dolorem dicta nobis voluptas quod possimus placeat voluptates. Tempora ut sequi aspernatur suscipit magni temporibus, laboriosam molestiae debitis voluptatem ullam iure eos tempore odit voluptates aliquid..
  </div>
    <div className="col-12 col-sm-8 p-5">
      {/* Section Heading*/}
      <div className="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
        <h3>Founder & <span> Developer</span></h3>
        <div className=" p-5"><img src={img1} className="  rounded border w-50 " alt /></div>
        <h5 className='pt-1 '>Aman Patel </h5>
      
       
      
   

      </div>
    </div>
  
    
    <div className="col-12 col-sm-8 p-5 ">
      {/* Section Heading*/}
      <div className="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
        <h3>Our Creative <span> Team</span></h3>
        {/* <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p> */}
     
      </div>
    </div>
  </div>

<div className="container-xl pb-5">
  <div className="row">
    <div className="col-lg-8 mx-auto">
    
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        {/* Carousel indicators */}
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to={0} className="active" />
          <li data-target="#myCarousel" data-slide-to={1} />
          <li data-target="#myCarousel" data-slide-to={2} />
        </ol>   
        {/* Wrapper for carousel items */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="img-box"><img src={img1} alt /></div>
            <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
            <p className="overview"><b>Paula Wilson</b>, Media Analyst</p>
          </div>
          <div className="carousel-item">
            <div className="img-box"><img src={img2} alt /></div>
            <p className="testimonial">Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio.</p>
            <p className="overview"><b>Antonio Moreno</b>, Web Developer</p>
          </div>
          <div className="carousel-item">
            <div className="img-box"><img src={img1} alt /></div>
            <p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
            <p className="overview"><b>Michael Holz</b>, Seo Analyst</p>
          </div>
        </div>
        {/* Carousel controls */}
        <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
          <i className="fa fa-angle-left" />
        </a>
        <a className="carousel-control-next" href="#myCarousel" data-slide="next">
          <i className="fa fa-angle-right" />
        </a>

      </div>
    </div>
  </div>
</div>
</div>




<div className="col-lg-12 p-5">
    <div className=" border"> 
    
      <div className="card-body">
       <h2>
       Do you have an extra room to rent out ?


       </h2>
       
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


 
    </Layout>
  )
}

export default About