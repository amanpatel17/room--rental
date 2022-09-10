import React from "react";
import "../../css/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer_area section_padding_130_0">
        <div className="container">
          <div className="row">
            {/* Single Widget*/}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-footer-widget section_padding_0_130">
                {/* Footer Logo*/}
                <div className="footer-logo mb-3" />
                <p>
                  Appland is completely creative, lightweight, clean app landing
                  page.
                </p>
                {/* Copywrite Text*/}
                <div className="copywrite-text mb-5">
                  <p className="mb-0">
                  
                    <Link
                      className="ml-1"
to='/'
                    >
                    <b>ROOM_RENTAL</b>
                    </Link>
                  </p>
                </div>
                {/* Footer Social Area*/}
                <div className="footer_social_area">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="Instagram"
                  >
                    <i className="fab fa-instagram text-info" />
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="Linkedin"
                  >
                    <i className="fab fa-linkedin text-info" />
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="Facebook"
                  >
                    <i className="fab fa-facebook text-info" />
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="Twitter"
                  >
                    <i className="fab fa-twitter text-info" />
                  </a>
                </div>
              </div>
            </div>
            {/* Single Widget*/}
            <div className="col-12 col-sm-6 col-lg">
              <div className="single-footer-widget section_padding_0_130">
                {/* Widget Title*/}
                <h5 className="widget-title">About</h5>
                {/* Footer Menu*/}
                <div className="footer_menu">
                  <ul>
                    <li>
                      <a href="/about-us">About Us</a>
                    </li>
                    <li>
                      <a href="/faq">Faq</a>
                    </li>

                    <li>
                      <a href="/How-it-work">How it Work</a>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
            {/* Single Widget*/}
            <div className="col-12 col-sm-6 col-lg">
              <div className="single-footer-widget section_padding_0_130">
                {/* Widget Title*/}
                <h5 className="widget-title">Company</h5>
                {/* Footer Menu*/}
                <div className="footer_menu">
                  <ul>
                    
                   
                    <li>
                      <a href="/terms-of-use">Term OF Use</a>
                    </li>
                    <li>
                
                      <a href="/contact-us">Contact Us</a>
                    </li>
                    <li>
                
                      <a href="/privacy-policy">Privacy Policy</a>
                    </li>
                    
                   
                  </ul>
                </div>
              </div>
            </div>
            {/* Single Widget*/}
            <div className="col-12 col-sm-6 col-lg">
              <div className="single-footer-widget section_padding_0_130">
                {/* Widget Title*/}
                <h5 className="widget-title">Services</h5>
                {/* Footer Menu*/}
                <div className="footer_menu">
                  <ul>
                    <li>
                      <a href="#">Find A Roommate </a>
                    </li>
                    <li>
                      <a href="#">Advertise A Room</a>
                    </li>
        
                  
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>



      </footer>
       <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
Copyright © 2022 :
  <a className="text-white" href="/">Rooms-Grow</a>
</div>
    </>
  );
};

export default Footer;
