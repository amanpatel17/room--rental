import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../components/Layout/firebase.config";
import { useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const Contact = () => {
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState("");
  const [landlord, setLandlord] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();

  useEffect(() => {
    const getLandlord = async () => {
      const docRef = doc(db, "users", params.landlordId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLoading(false);
        setLandlord(docSnap.data());
        

      } else {
        toast.error("Unable to fetch data", {
          position: toast.POSITION.TOP_CENTER
        });
  
      }
    };
    getLandlord();
  }, [params.landlordId]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <Layout>
      <div className=" container shadow bg-light mt-5 p-3">
        <h3 className="text-center">Contact Details</h3>
        <div>
          {landlord !== "" && (
            <main>
              <h5>Name : {landlord?.name}</h5>
              <h5>Email : {landlord?.email}</h5>
              <h5>Phone : {landlord?.phone}</h5>
             

              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  value={message}
                  id="message"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
                <label htmlFor="floatingTextarea"> your message</label>
              </div>
              <a
                href={`mailto:${landlord.email}?Subject=${searchParams.get(
                  "listingName"
                )}&body=${message}`}
              >
                <button className="btn btn-info mt-2">Send Message</button>
              </a>
            </main>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Contact;