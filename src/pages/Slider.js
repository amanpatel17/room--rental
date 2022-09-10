import React, { useState, useEffect } from "react";

import { db } from "../components/Layout/firebase.config";
import {
  collection,
  getDoc,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import SwipeCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Spinner from "../components/Spinner";
import "../css/slider.css";

import SwiperCore, { Virtual } from "swiper";
import { FaBed, FaBath } from "react-icons/fa";

import { ImLocation2 } from "react-icons/im";

SwipeCore.use([EffectCoverflow, Pagination]);
SwiperCore.use([Virtual, Navigation, Pagination]);
const Slider = () => {
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigat = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      const listingRef = collection(db, "listings");
      const q = query(listingRef, orderBy("timestamp", "desc"), limit(6));
      const querySnap = await getDocs(q);
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setLoading(false);
      setListings(listings);
    };
    fetchListings();
    // console.log(listings === null ? "loading" : listings);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      {listings === null ? (
        <Spinner />
      ) : (
        <div className="container mydiv">
          <div className="row">
            {listings.map(({ data, id }) => (
              <div className="col-md-4  pt-2">
           
                <div className="bbb_deals">

                  <div className="bbb_deals_slider_container">
                    <div className=" bbb_deals_item">
                      <div className="bbb_deals_image">
                        <img src={data.imgUrls[0]} alt={data.name} />
                      </div>
                      <div className="bbb_deals_content">
                        <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                         
                            <div className="bbb_deals_item_name">{data.name}</div>
                      
                          <div className="bbb_deals_item_price_a ml-auto">
                          
                          </div>
                        </div>
                        <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                        
                        <div className="bbb_deals_item_category">
                        City :&nbsp;{data.city}   <ImLocation2 className="text-success"/>
                          </div>
                        
                          <div className="bbb_deals_item_price ml-auto">
                          ₹ {data.regularPrice} 
                          </div>
                       
                        </div>
                        <div className="">
                                           Post on : &nbsp;{data.date}
                            </div>
                           
                        <div className="available">
                          <div className="available_line d-flex flex-row justify-content-start">
                            <div className="available_title">

                           <button  className="btn btn-outline-info"  key={id}
                onClick={() => {
                  navigat(`/category/${data.type}/${id}`);
                }}>
                              Available
                           </button>
                            </div>
                         
                          </div>
                          <div className="available_bar">
                            <span style={{ width: "17%" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
