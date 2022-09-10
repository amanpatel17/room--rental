import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { BsFillEyeFill } from "react-icons/bs";
import Layout from "./../components/Layout/Layout";
import OAuth from "../components/Layout/OAuth";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        toast.success("Login Successfully", {
          position: toast.POSITION.TOP_CENTER
        });
        navigate("/");
      }
    } catch (error) {
     
      toast.error("invalid Email and Password", {
        position: toast.POSITION.TOP_CENTER
      });
    
    }
  };

  return (
    <Layout>
      <div className="container h-100  ">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="  " style={{ width: "600px" }}>
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                {/* <div className="col-md-6 col-lg-7 d-flex align-items-center "> */}
                <div className="card-body p-4 p-lg-5 text-black">
                  <form onSubmit={loginHandler}>
                    <h4
                      className="fw-normal mb-3 pb-3 text-center"
                      style={{ letterSpacing: 1 }}
                    >
                      Login into your account
                    </h4>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="email">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={onChange}
                        className="form-control  form-control-lg "/>
                    </div>
                    
                    

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={onChange}
                        className="form-control form-control-lg"
                      />
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
                      <button
                        className="btn btn-info btn-lg btn-block"
                        type="submit"
                      >
                        Signup
                      </button>
                      <OAuth />
                    </div>
                    {/* <a className="small text-muted" href="#!">Forgot password?</a> */}
                    <Link to="/forgot-password">Forgot Password </Link>
                    <p className=" pb-lg-2" style={{ color: "#393f81" }}>
                      <span>New User</span> <Link to="/signup">Sign up</Link>
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

export default Signin;
