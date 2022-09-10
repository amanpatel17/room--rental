import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Spinner from "../components/Spinner";

 
import { toast } from "react-toastify";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { db } from "../components/Layout/firebase.config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Map from './Map'
const CreateListing = () => {

  const [geoLoactionEnable, setGeoLocationEnable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: " ",
    name: "",
    rooms: 1,
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    city: "",
    postal: 0,
    discription: "",
    date: "",
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    images: {},
   
  });

  const {
    type,
    name,
    rooms,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    city,
    postal,
    discription,
    offer,
    date,
    regularPrice,
    discountedPrice,
    images,
  
  } = formData;

  const auth = getAuth();
  const navigate = useNavigate();
  const isMounted = useRef(true);



  
  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        setFormData({
          ...formData,
          useRef: user.uid,
        });
      });
    } else {
      navigate("/signin");
    }

    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  }

  //mutate func
  const onChangeHandler = (e) => {
    let boolean = null;
    if (e.target.value === "true") {
      boolean = true;
    }
    if (e.target.value === "false") {
      boolean = false;
    }
    //files
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files,
      }));
    }
    //text/booleans/number
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
  };

  //form submit
  const onSubmit = async (e) => {
    e.preventDefault();
  
    // if (discountedPrice >= regularPrice) {
    //   setLoading(false);

     
    //   return;
    // }
    if (images > 6) {
      setLoading(true);
      
      toast.error("Max 6 Images can be selected", {
        position: toast.POSITION.TOP_CENTER
      });

      return;
    }


    //store images to firebase storage
    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
        const storageRef = ref(storage, "images/" + fileName);
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            
              toast.warning("Please Wait", {
                position: toast.POSITION.TOP_CENTER
              });
            
            
          },
          (error) => {
            reject(error);
          },
          //success
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    };
    const imgUrls = await Promise.all(
      [...images].map((image) => storeImage(image))
    ).catch(() => {
      setLoading(false);
      toast.error("Image not uploaded", {
        position: toast.POSITION.TOP_CENTER
      });
      return;
    });
    


    //save form data
    const formDataCopy = {
      ...formData,

      imgUrls,
    
    
      timestamp: serverTimestamp(),
    };
 
    delete formDataCopy.images;
    // !formDataCopy.offer && delete formDataCopy.discountedPrice;
    const docRef = await addDoc(collection(db, "listings"), formDataCopy);
    toast.success("Listing Created!", {
      position: toast.POSITION.TOP_CENTER
    });
    setLoading(false);
    navigate(`/category/${formDataCopy.type}/${docRef.id}`);
  };
 
  return (
    <Layout>

      

      
      <div class="alert alert-info" role="alert">
        <h6>  Create your listing & rent your home </h6>
      </div>

      <div className="container-fluid px-1 mx-auto">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <div className="card">
              <h5 className="text-center mb-4">Create Your Listing</h5>
              <form className="form-card" onSubmit={onSubmit}>
                <div className="form-group  d-flex  justify-content-between">
                  <div className="d-flex  flex-row mt-4">
                   <p className="text-danger">  Please Select Again </p>
                   <div className="form-check ">
<input
 type="radio"
  value="girls"
  onChange={onChangeHandler}
  defaultChecked
  name="type"
  id="type"
/>
<label className="form-control-label px-3" htmlFor="girls">
  <b>GIRLS</b>
</label>
</div>

<div className="form-check ms-3">
<input
  type="radio"
  name="type"
  value="boys"
  onChange={onChangeHandler}
  id="type"
/>
<label className="form-control-label  px-3" htmlFor="boys">
  <b>BOYS</b>
</label>
</div>
{/*  
<div className="form-check ">
<input
 type="radio"
  value="both"
  onChange={onChangeHandler}
  
  name="type"
  id="type"
/>
<label className="form-control-label px-3" htmlFor="both">
  <b>BOTH</b>
</label>
</div> */}

<div className="form-check ms-3">
<input
  type="radio"
  name="type"
  value="pg"
  onChange={onChangeHandler}
  id="type"
/>
<label className="form-control-label  px-3" htmlFor="pg">
  <b>PG</b>
</label>
</div>
</div>



                </div>

                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label htmlFor="name" className="form-control-label px-3">
                      Name<span className="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={onChangeHandler}
                      required
                  
                    />{" "}
                  </div>

                  <div className="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label htmlFor="rooms" className="form-control-label px-3">
                      Rooms<span className="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="number"
                      id="rooms"
                      value={rooms}
                      onChange={onChangeHandler}
                      required
                  
                    />{" "}
                  </div>

                  <div className="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label
                      htmlFor="bedrooms"
                      className="form-control-label px-3"
                    >
                      Bedrooms<span className="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="number"
                      id="bedrooms"
                      value={bedrooms}
                      onChange={onChangeHandler}
                      required
                  
                    />{" "}
                
                  </div>


                  <div className="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label
                      htmlFor="bathrooms"
                      className="form-control-label px-3"
                    >
                      Bathrooms<span className="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="number"
                      id="bathrooms"
                      value={bathrooms}
                      onChange={onChangeHandler}
                      required
                  
                    />{" "}
                  </div>
                  
                  {/* city */}
                  <div className="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label
                      htmlFor="city"
                      className="form-control-label px-3"
                    >
                      City<span className="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="city"
                      value={city}
                      onChange={onChangeHandler}
                      required
                  
                    />{" "}
                  </div>
                  {/* postal */}
                  <div className="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label
                      htmlFor="postal"
                      className="form-control-label px-3"
                    >
                      Postal<span className="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="number"
                      id="postal"
                      value={postal}
                      onChange={onChangeHandler}
                      required
                  
                    />{" "}
                  </div>

                  {/* date picker */}
                  <div className="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label
                      htmlFor="date"
                      className="form-control-label px-3"
                    >
                      Date<span className="text-danger"> *</span>
                    </label>{" "}
                    <div>
             
                    <input type="date" 
                
                      id="date"
                      value={date}
                      onChange={onChangeHandler}
                      required
                    
                    />

                        
                   
               
            </div>
                 
                 
                  </div>

                  <div className="form-group col-sm-6 flex-column d-flex">
                    <div className="mb-3 ">
                      <label
                        htmlFor="parking"
                        className="form-control-label px-3"
                      >
                        Parking
                      </label>
                      <div className="d-flex flex-row ">
                        <div className="form-check">
                          <input
                            type="radio"
                            value={true}
                            onChange={onChangeHandler}
                            name="parking"
                            id="parking"
                          />
                          <label
                            className="form-control-label px-3"
                            htmlFor="yes"
                          >
                            Yes
                          </label>
                        </div>

                        <div className="form-check ms-3">
                          <input
                            type="radio"
                            name="parking"
                            value={false}
                            defaultChecked
                            onChange={onChangeHandler}
                            id="parking"
                          />
                          <label
                            className="form-control-label px-3"
                            htmlFor="no"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group col-sm-6 flex-column d-flex">
                    <div className="mb-3 ">
                      <label
                        htmlFor="furnished"
                        className="form-control-label px-3"
                      >
                        Furnished
                      </label>
                      <div className="d-flex flex-row ">
                        <div className="form-check">
                          <input
                            type="radio"
                            value={true}
                            onChange={onChangeHandler}
                            name="furnished"
                            id="furnished"
                          />
                          <label
                            className="form-control-label px-3"
                            htmlFor="yes"
                          >
                            Yes
                          </label>
                        </div>

                        <div className="form-check ms-3">
                          <input
                            type="radio"
                            name="furnished"
                            value={false}
                            defaultChecked
                            onChange={onChangeHandler}
                            id="furnished"
                          />
                          <label
                            className="form-control-label px-3"
                            htmlFor="no"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label
                      htmlFor="regularPrice"
                      className="form-control-label px-3"
                    >
                      Regular Price <span className="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="number"
                      id="regularPrice"
                      name="regularPrice"
                      value={regularPrice}
                      onChange={onChangeHandler}
                      required
                  
                    />
                      <p className="ms-4 mt-2">₹/Monthly</p>{" "}
                  </div>



  
       
                  <div className="form-group col-sm-12 flex-column d-flex">
                    <label
                      htmlFor="address"
                      className="form-control-label px-3"
                    >
                      Address<span className="text-danger"> *</span>
                    </label>
                    <textarea
                      placeholder="Enter Your Address"
                      id="address"
                      value={address}
                      onChange={onChangeHandler}
                      required
                    />
                  </div>

             <Map/>

                 
                 
                    {/* <div className="form-group col-sm-6 flex-column d-flex">
                      {" "}
                      <label
                        htmlFor="discountedPrice"
                        className="form-control-label px-3"
                      >
                        Discounted Price <span className="text-danger"> *</span>
                      </label>{" "}
                      <input
                        type="number"
                        id="discountedPrice"
                        name="discountedPrice"
                        value={discountedPrice}
                        onChange={onChangeHandler}
                        required
                    
                      />{" "}
                    </div> */}
                

<div className="form-group col-sm-12 flex-column d-flex">
                    <label
                      htmlFor="discription"
                      className="form-control-label px-3"
                    >
                      Discription<span className="text-danger"> *</span>
                    </label>
                    <textarea
                      placeholder="  your discription.."
                      id="discription"
                      value={discription}
                      onChange={onChangeHandler}
                      required
                    />
                  </div>

                  <div className="form-group col-sm-12 flex-column d-flex">
                    {" "}
                    <label
                      htmlFor="formFile"
                      className="form-control-label  px-3"
                    >
                      Select image<span className="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="file"
                      width={"10px"}
                      id="images"
                      name="images"
                      onChange={onChangeHandler}
                      max="6"
                  
 
  className="form-control"

                      accept=".jpg,.png,.jpeg"
                      multiple
                      required
                    />{" "}
                  </div>

                  <div className="form-group col-sm-12 flex-column d-flex">
                    <div className="mb-3"></div>
                    <input
                      disabled={!name || !address || !city || !regularPrice || !images}
                      className="btn btn-info w-100"
                      type="submit"
                      value="Create Listing"
                    />
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

export default CreateListing;
