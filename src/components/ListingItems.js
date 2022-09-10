import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBed, FaBath } from "react-icons/fa";
import { BiChair } from "react-icons/bi";
import { MdMeetingRoom } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import "../css/listingitem.css";

import Map from "./Map";
import Rating from "./Rating";
const ListingItem = ({ listing, id, onDelete, onEdit }) => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-8 ">
            <div className="row p-2 bg-white border rounded">
              <div className="col-md-3  d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid img-responsive rounded product-image"
                  src={listing.imgUrls[0]}
                />
              </div>
              <div className="col-md-6 mt-1">
                <h5>{listing.name}</h5>
            
                <div className="d-flex flex-row">
                  <div className="ratings text-muted mr-2">
                    <ImLocation2 />
                    &nbsp; {listing.city}
                  </div>
                  {/* <span>310</span> */}
                </div>
                <div className="mt-1 mb-1 text-black ">
                  <span className="dot" />
                  <span>
                    {" "}
                    <MdMeetingRoom /> &nbsp;
                    {listing.rooms > 0 ? `${listing.rooms} Rooms` : "1 Rooms"}
                    &nbsp;
                  </span>

                  <span className="dot" />
                  <span>
                    {" "}
                    <FaBath /> &nbsp;
                    {listing.bathrooms > 0
                      ? `${listing.bathrooms} Bathrooms`
                      : "1 Bathrooms"}
                  </span>
                </div>
                <div className="mt-1 mb-1 ">
                  <span>
                    {" "}
                    Post on : &nbsp;
                    <span className="text-muted">{listing.date}</span>
                  </span>

                  <span>
                    {" "}
                    <ul className="hotel-checklist pl-0 mb-0">
                      <li>
                        {listing.parking
                          ? ` ✔ Parking spot `
                          : "✘ No parking   "}

                        <span className="text-muted">{listing.parking}</span>
                      </li>

                      <li>
                        {listing.furnished
                          ? `✔Furnished house`
                          : " ✘ No furnished"}

                        <span className="text-muted">{listing.parking}</span>
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                <div className="d-flex flex-row align-items-center">
                  <h4 className="mr-1">₹{listing.regularPrice}✅</h4>
                </div>

                <div className="d-flex flex-column mt-4">
                  <button className="btn  btn-sm  btn-light" type="button">
                    <Link to={`/category/${listing.type}/${id}`}>View</Link>
                  </button>

                  {onDelete && (
                    <button
                      className="btn rounded  btn-outline-danger"
                      onClick={() => onDelete(listing.id)}
                    >
                      Delete
                    </button>
                  )}

                  {onEdit && (
                    <button
                      className="btn rounded  btn-outline-info"
                      onClick={() => onEdit(listing.id)}
                    >
                      Edit
                    </button>
                  )}
                </div>
              </div>
            </div>
         
          </div>

        
        </div>
      </div>
    </>
  );
};

export default ListingItem;
