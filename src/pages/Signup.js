import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Layout from "./../components/Layout/Layout";
import OAuth from "../components/Layout/OAuth";

import { BsFillEyeFill } from "react-icons/bs";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../components/Layout/firebase.config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone:"",
    password: "",
  });
  const { name, email, phone, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmitHndler = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      updateProfile(auth.currentUser, { displayName: name }) ;
      // updateProfile(auth.currentUser, { displayPhone: phone }) ;
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formDataCopy);
      navigate("/");
      toast.success("signup successfully", {
        position: toast.POSITION.TOP_CENTER
      });
    
    } catch (error) {
      toast.error("Somthing Went Wrong", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };
  return (
    <Layout>

    
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className=""  style={{width: '600px' }}>
        <div className="card" style={{borderRadius: '1rem'} }>
          <div className="row g-0">
            
            {/* <div className="col-md-6 col-lg-7 d-flex align-items-center"> */}
              <div className="card-body p-4 p-lg-5 text-black">
                <form   onSubmit={onSubmitHndler}>
                  {/* <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}} />
                    <span className="h1 fw-bold mb-0">Logo</span>
                  </div> */}
                  <h4 className="fw-normal mb-3 pb-3 text-center" style={{letterSpacing: 1}}>Signup into your account</h4>
                 

                  <div className="form-outline mb-4">
                    <label className="form-label"  htmlFor="name">Name</label>
                    <input type="text" id="name"  
           value={name}
           onChange={onChange} className="form-control form-control-lg" />
                  </div>


                  <div className="form-outline mb-4">
                    <label className="form-label"  htmlFor="email">Email address</label>
                    <input type="email" id="email"  
           
              value={email}
              onChange={onChange} className="form-control form-control-lg" />
                  </div>

                  <div className="form-outline mb-4">
                      <label className="form-label"  htmlFor="phone">
                       Phone Number
                      </label>
                      <input
                        type="number"
                        id="phone"
                        required
                        value={phone}
                        onChange={onChange}
                        className="form-control  form-control-lg "/>
                    </div> 

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input  id="password"    type={showPassword ? "text" : "password"}
              value={password}
              onChange={onChange} className="form-control form-control-lg" />
                    <span>
             Show Password  &nbsp;
              <BsFillEyeFill
                className="text-danger ms-2"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowPassword((prevState) => !prevState);
                }}
              />
            </span>{" "}
                  </div>
                  <div className="pt-1 mb-2">
                    <button className="btn btn-info btn-lg btn-block" type="submit">Signup</button>
                    <OAuth/>
                  </div>
                  {/* <a className="small text-muted" href="#!">Forgot password?</a> */}
               
                  <p className=" pb-lg-2" style={{color: '#393f81'}}> 
                  <span>Alredy have an account</span> <Link to="/signin">Login</Link>
                 </p>
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/* </div> */}


    </Layout>
  );
};

export default Signup;