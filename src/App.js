import React from "react";

import '../src/css/index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgotPassword from './pages/ForgotPassword'
import { PrivateRoute } from "./components/PrivateRoute";
import Category from "./pages/Category";
import  CreateListing  from "./pages/CreateListing";
import Listing from "./pages/Listing";
import EditListing from "./pages/EditListing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ContactMe from "./pages/ContactMe";


const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/about-us" element={< About/>} />
        <Route path="/contact-us" element={< ContactMe/>} />
     
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/category/:categoryName/:listingId" element={<Listing />} />
        <Route path="/contact/:landlordId" element={<Contact />} />
        <Route path="/editlisting/:listingId" element={<EditListing />} />
       
      <Route path="/profile" element={<PrivateRoute/>} >
     <Route path="/profile" element={<Profile/>} />
     </Route>

        <Route path="/signup" element={<Signup />} />
      
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-listing" element={<CreateListing />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
