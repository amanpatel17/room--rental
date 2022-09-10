import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../components/Layout/firebase.config";
import { getAuth } from "firebase/auth";
import { useNavigate, Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import SwipeCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { FaBed, FaBath } from "react-icons/fa";
import { MdMeetingRoom, MdBikeScooter } from "react-icons/md";
import { BiChair } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
//config
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// import '../css/slider.css'

SwipeCore.use([EffectCoverflow, Pagination]);

const Listing = () => {
  const [listing, setListing] = useState("");
  const [loading, setLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, "listings", params.listingId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setListing(docSnap.data());
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Layout>
      <div class="alert alert-info" role="alert">
        <h6>
          {listing.city},{listing.postal}
          <ImLocation2 className="text-success" />
        </h6>
     
      
      </div>


      <section className="main-content pb-5">
        <div className="container">
          <br />
          <br />
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="hotel-card bg-white rounded-lg shadow overflow-hidden d-block d-lg-flex">
                <div className="hotel-card_images">
                  <div
                    id="bootstrapCarousel"
                    className="carousel slide h-100"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner h-100">
                      <div className="">
                        <div
                          className=" carousel-item h-100 active text-center d-flex align-items-center justify-content-center container "
                          style={{ width: "350px" }}
                        >
                          {listing.imgUrls === undefined ? (
                            <Spinner />
                          ) : (
                            <Swiper
                              effect={"coverflow"}
                              grabCursor={true}
                              centeredSlides={true}
                              slidesPerView={1}
                              coverflowEffect={{
                                rotate: 100,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                              }}
                              spaceBetween={50}
                              navigation
                              className="mySwiper"
                            >
                              {listing.imgUrls.map((url, index) => (
                                <SwiperSlide key={index}>
                                  <img
                                    src={listing.imgUrls[index]}
                                    className="d-block w-100"
                                    alt={listing.name}
                                  />
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hotel-card_info p-4">
                  <div className="d-flex align-items-center mb-2">
                    <h5 className="mb-0 mr-2">{listing.name}</h5>
                   
                  </div>
                  <div className="d-flex justify-content-between align-items-end">
                   
                      <div className=" row container">
                       
                      <div className="col-md-6 pt-3">
     
     <p className="card-text">
     <h4>
              Price :{" "}
              ₹ {listing.regularPrice} 
            
            </h4>
         

      
       <p>
       <MdMeetingRoom /> &nbsp;{listing.rooms > 1
           ? `${listing.rooms} Rooms`
           : " 1 Rooms "}
       </p>

       <p>
       <FaBed /> &nbsp;{listing.bedrooms > 1
           ? `${listing.bedrooms} Bedrooms`
           : " 1 Bedrooms "}
       </p>
       <p>
       <FaBath /> &nbsp;{listing.bathrooms > 1
           ? `${listing.bathrooms} bathrooms`
           : " 1 Bathrooms "}
       </p>
       <p>  
         <BiChair /> &nbsp;{listing.furnished ? `Furnished house` : "Not furnished"}</p>
       <p> 
         <MdBikeScooter /> &nbsp;{listing.parking ? `Parking spot` : "No spot for parking"}</p>
      
       </p>
   
   </div>
                     
                      
                   
                    <div className=" col-md-6 pt-4">
                     
                    <div className="">
    
    
        <p className="card-text">
     
         <p> Address :&nbsp;
         <span className="text-muted">
         {listing.address}
          </span> 
         
         
          </p>
         
       
      
         <p style={{width: '18rem'}}>     Post on :&nbsp;
        <span className="text-muted">
        {listing.date}
        </span>
         
          </p>
         
            <p style={{width: '18rem'}}>   City :&nbsp;
        <span className="text-muted">
        {listing.city} ,  {listing.postal}
        </span>
         </p>


          <h6 >
         
        
         <p className="  p-1"> 
         Discription :&nbsp;
       <span className="text-muted">
       {listing.discription}
        </span>  
        
          </p>
          </h6>
           
        
          
     
     </p>
     <Link
            className="btn btn-success"
            to={`/contact/${listing.useRef}?listingName=${listing.name}`}
          >
            Contact Landlord
          </Link>
    
      </div>
    
     
  

                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </Layout>
  );
};

export default Listing;
