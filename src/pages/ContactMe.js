import React, {useState} from "react";
import Layout from "../components/Layout/Layout";
import { toast } from "react-toastify";


const ContactMe = () => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { name, phone, email, address, message } = userData;

    if (name && phone && email && address && message) {
      const res = fetch(
        "https://room-rental-b473c-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
          name,
            
            phone,
            email,
            address,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
       name: "",
          
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        toast.success("Submit Sucessfully", {
          position: toast.POSITION.TOP_CENTER
        });
      } else {
        toast.error("plesae fill the form", {
          position: toast.POSITION.TOP_CENTER
        });
      }
    } else {
      toast.error("Please fill the form", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };







  return (
    <Layout>
      <div className="container-fluid px-1 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-7  border-5 bg-light col-lg-8 col-md-9 col-11 text-center">
           
            <div className="p-5">
              <h3 className="text-center mb-4">
                Contact Us
              </h3>
              <form className="form-card" onsubmit="event.preventDefault()">
                <div className="row  text-left">
                  <div className="form-group col-12  flex-column d-flex">
                    {" "}
                    <label className="form-control-label px-3">
                     Name<span className="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="name"
                      name="name"
                    placeholder="Name"
                    value={userData.name}
                    onChange={postUserData}
               
                    />{" "}
                  </div>
                </div>




                <div className="row text-left">
                  <div className="form-group col-12  flex-column d-flex">





                    {" "}
                    <label className="form-control-label px-3">
                Email<span className="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={userData.email}
                      onChange={postUserData}
                  
                    />{" "}
                  </div>
                  <div className="form-group col-12  flex-column d-flex">
                    {" "}
                    <label className="form-control-label px-3">
                      Phone number<span className="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      value={userData.phone}
                      onChange={postUserData}
                      placeholder="Phone Number"
                 
                    />{" "}
                  </div>
                  <div className="form-group col-12  flex-column d-flex">
                    {" "}
                    <label className="form-control-label px-3">
                      Address<span className="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={userData.address}
                      onChange={postUserData}
                      placeholder="Enter your address"
                   
                    />{" "}
                  </div>
                </div>
               
                <div className="row justify-content-between text-left">
                  <div className="form-group col-12 flex-column d-flex">
                    {" "}
                    <label className="form-control-label px-3">
                 Message
                      <span className="text-danger"> *</span>
                    </label>{" "}
                   <textarea name="message" type='text' id="message"    value={userData.message}
                    onChange={postUserData}
                    placeholder="Enter Your Message"></textarea>
                  </div>
                </div>

                <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label"
                        className="main-hero-para">
                        I agree that the RoomsGrow may contact me at the
                        email address or phone number above
                      </label>
                    </div>

                <div className="row justify-content-end">
                  <div className="form-group col-12">
                    {" "}
                    <button type="submit" className="btn-block btn-info" onClick={submitData} >
                     Send
                    </button>{" "}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactMe;
