import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { useParams   , useLocation } from "react-router-dom";
import { db } from "../components/Layout/firebase.config";
import { toast } from "react-toastify";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import Spinner from "../components/Spinner";
import ListingItems from "../components/ListingItems";
import '../css/arrowdown.css'
import Search  from "../pages/Search";

const Category = () => {
  const [listing, setListing] = useState("");

  const [lastFetchListing, setLastFetchListing] = useState(null);
  const [loading, setLoading] = useState(true);

  
  const params = useParams();

  //fetch listing
  useEffect(() => {
    const fetchListing = async () => {
      try {
        //refrence
        const listingsRef = collection(db, "listings");
        //query
        const q = query(
          listingsRef,
          where("type", "==", params.categoryName),
          orderBy("timestamp", "desc"),
          limit(3)
        );
        //execute query
        const querySnap = await getDocs(q);
        const lastVisible = querySnap.docs[querySnap.docs.length - 3];
        setLastFetchListing(lastVisible);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListing(listings);
        setLoading(false);
      } catch (error) {
       
        toast.error("Unble to fetch data", {
          position: toast.POSITION.TOP_CENTER
        });
      }
    };
    //func call
    fetchListing();
  }, [params.categoryName]);

  //loadmore pagination func
  const fetchLoadMoreListing = async () => {
    try {
      //refrence
      const listingsRef = collection(db, "listings");
      //query
      const q = query(
        listingsRef,
        where("type", "==", params.categoryName),
        orderBy("timestamp", "desc"),
        startAfter(lastFetchListing),
        limit(8)
      );
      //execute query
      const querySnap = await getDocs(q);
      const lastVisible = querySnap.docs[querySnap.docs.length - 3];
      setLastFetchListing(lastVisible);
      const listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListing((prevState) => [...prevState, ...listings]);
      setLoading(false);
    } catch (error) {
     
      toast.error("Unble to fetch data", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };





  return (
    <Layout
    
    >
   



      <div class="alert alert-info" role="alert">
        <div className="container">
          <div className="row">
            <div className="col-md-6 " >
            <h6>
Find Your Rooms in  
         
        </h6>
              <h3 className=" ">Everywhere🌎</h3>
            
            <Search/>
            
            </div>




       

          </div>
        </div>
       
      </div>

      
      
      <div className=" container-fluid " id="myUL">
        {loading ? (
          <Spinner />
        ) : listing && listing.length > 0 ? (
          <div>
            {listing.map((list) => (
              <ListingItems listing={list.data} id={list.id} key={list.id} 
              
            
              />
            ))}
          </div>
        ) : (

      
          <h1 className="text-center">
            Opp's!
            <h4 className="pt-5">
            no listing for   {params.categoryName}
            </h4>
            
        </h1>
          
        )}
        <div className="d-flex align-items-center justify-content-center mb-4 mt-4">
          {lastFetchListing && (
            
            
            
            
            <button
              className="btn btn-outline-info  text-center  rounded-circle"
              onClick={fetchLoadMoreListing}
            >
             <span className=" fa fa-angle-down "></span>
        
            </button>
          )}
        </div>
      </div>

      
    </Layout>
  );
};

export default Category;
