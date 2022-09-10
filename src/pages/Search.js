
import React, {useState , useEffect} from 'react'


import {useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";

import { db } from "../components/Layout/firebase.config";

const Search = () => {
 
    const [listing, setListing] = useState("");
  
    
    const params = useParams();
    
    useEffect(() => {
      const fetchListing = async () => {
        const docRef = doc(db, "listings", params.listingId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setListing(docSnap.data());
   
        }
      };
      fetchListing();
    }, [params.listingId]);
    
    
      
    return (
  <form action="/" method="get">
  <label htmlfor="header-search">
    <span classname="visually-hidden"></span>
  </label>
  <input type="text" id="header-search" placeholder="Search blog posts" name="s" />
  <button type="submit">Search</button>
</form>



  
    )
  }
  
  export default Search;