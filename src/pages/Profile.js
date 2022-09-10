import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../components/Layout/Layout";
import { getAuth, updateProfile } from "firebase/auth";
import { db } from "../components/Layout/firebase.config";
import { FaEdit } from "react-icons/fa";
import { BsCheckCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

import {
  doc,
  updateDoc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
} from "firebase/firestore";
import ListingItem from "../components/ListingItems";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);

  //getting data
  useEffect(() => {
    const fetchUserListings = async () => {
      const listingRef = collection(db, "listings");
      const q = query(
        listingRef,
        where("useRef", "==", auth.currentUser.uid),
        orderBy("timestamp", "desc")
      );
      const querySnap = await getDocs(q);
      // console.log(querySnap);
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      // console.log(listings);
      setListings(listings);
      setLoading(false);
    };
    fetchUserListings();
  }, [auth.currentUser.uid]);

  const [changeDetails, setChangeDetails] = useState(false);
  const [fromData, setFormData] = useState({
    name: auth.currentUser.displayName,
    // phone: auth.currentUser.displayPhone,
    email: auth.currentUser.email,
  });
  const { name, email , phone } = fromData;

  const logoutHandler = () => {
    auth.signOut();
    toast.success("Logout Succesfully", {
      position: toast.POSITION.TOP_CENTER
    });
   

    navigate("/signin");
  };

  // on change

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  // submit

  const onsubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name ) {
        await updateProfile(auth.currentUser, {
          displayName: name,
          // displayPhone: phone,
       
        
        });

        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, { name });
        toast.success("User Updated", {
          position: toast.POSITION.TOP_CENTER
        });
       
      }
    } catch (error) {

      toast.error("Somthing Went Wrong", {
        position: toast.POSITION.TOP_CENTER
      });
     
    }
  };

  //  delete Listing
  const onDelete = async (listingId) => {
    if (window.confirm("Are You Sure  want to delete ?")) {
      // await deleteDoc(doc, (db, "listings", listingId));
      await deleteDoc(doc(db, "listings", listingId));
      const updatedListings = listings.filter(
        (listing) => listing.id !== listingId
      );
      setListings(updatedListings);
      toast.sucess("Listing Deleted Successfully", {
        position: toast.POSITION.TOP_CENTER
      });
     
     
    }
  };

  // edit

  const onEdit = (listingId) => {
    navigate(`/editlisting/${listingId}`);
  };

  return (
    <Layout>
      <section id="">
        <div className="container">
          <div className="row ">
            <div className="col-md-12">
        
        
            <div className=" container bg-white p-4 border-1  mt-5 ">
                  <div className="card-body bg-light">
                    <div className="d-flex justify-content-between">
                      <h5>User Personal Details</h5>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          changeDetails && onsubmit();
                          setChangeDetails((prevState) => !prevState);
                        }}
                      >
                        {changeDetails ? (
                          <BsCheckCircleFill color="green" />
                        ) : (
                          <FaEdit color="red" />
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="card-body ">
                    <form>
                      <div>
                        <div className="form-group ">
                          <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            disabled={!changeDetails}
                            onChange={onChange}
                          />


                        </div>

                         {/* <div className="form-group ">
                          <label htmlFor="number">Phone Number</label>
                          <input
                            type="number"
                            className="form-control"
                            id="phone"
                            value={phone}
                            disabled={!changeDetails}
                            onChange={onChange}
                          />
                        </div>  */}

                        <div className="form-group">
                          <label htmlFor="email">Email address</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            aria-describedby="emailHelp"
                            disabled={!changeDetails}
                            onChange={onChange}
                          />
                        </div>
                        {/* <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div> */}
                      </div>
                    </form>

                    <div className="container d-flex justify-content-center align-items-center pb-4">
                      <button type="button" class="btn btn-outline-light">
                        <Link to="/create-listing">
                          <BsFillArrowRightCircleFill color="danger" />
                          &nbsp; Rent Your Home
                        </Link>
                      </button>
                    </div>

                    <button className="btn btn-danger" onClick={logoutHandler}>
                      Logout
                    </button>
                  </div>
              
                </div>
              
            </div>
            <div className="col-md-12">
            <div className=" pb-5 ">
                {listings && listings?.length > 0 && (
                  <>
                    <h4 className="text-center mt-5">Your Listings</h4>
                    <div>
                      {listings.map((listing) => (
                        <ListingItem
                          key={listing.id}
                          listing={listing.data}
                          id={listing.id}
                          onDelete={() => {
                            onDelete(listing.id);
                          }}
                          onEdit={() => onEdit(listing.id)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            
            </div>
          </div>
        </div>
      </section>

      {/* <div className='container w-50 mt-5 d-flex  justify-content-center'>

       <h4 className='bg-dark text-light p-1' >Profile Details</h4>
      </div> */}
    </Layout>
  );
};

export default Profile;
