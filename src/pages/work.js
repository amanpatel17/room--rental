import React from "react";

import Layout from "../components/Layout/Layout";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiPhoneFindLine } from "react-icons/ri";
import { BsCheckCircleFill } from "react-icons/bs";
const work = () => {
  return (
    <Layout>
      <div className="container pt-5 mb-5">
      <div className="bg-light pt-3 border-5">

      <div className="text-center mt-3">
        <h3 >How to rent a room or find a room ?</h3>
      </div>
      <h5 className="text-center  mt-5">
        {" "}
        <GiTakeMyMoney /> &nbsp; Rent Out A Room
      </h5>
      <div className="row  text-muted p-5">
        <div className="col-md-4 mb-4">
          <div className="" >
            <div className="card-body">
              <h5 className="card-title text-info">Step 1 </h5>
              <p className="card-text h6  ">
             
                  <p>
                    {" "}
                    <BsCheckCircleFill className="text-success" /> &nbsp;Add
                    your room information in list a room page and then it will
                    be redirected to edit profile page to add the basic
                    information of your profile
                  </p>
               
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="">
            <div className="card-body">
              <h5 className="card-title text-info">Step 2 </h5>
              <p className="card-text h6">
                {" "}
                <p>
                  {" "}
                  <BsCheckCircleFill className="text-success" /> &nbsp; Click to
                  Rent Your Home and you will redirect Create listing page add
                  your room information in LIST and post the listing.
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="">
            <div className="card-body">
              <h5 className="card-title text-info">Step 3</h5>
              <p className="card-text h6  ">
              <p>
                {" "}
                <BsCheckCircleFill className="text-success" /> &nbsp; Start
                receiving the phone calls from the interested ones to proceed
                further.{" "}
              </p>
              </p>
            </div>
          </div>
        </div>
      </div>

      <h5 className="text-center mt-5">
        {" "}
        <RiPhoneFindLine /> &nbsp; Find A Room
      </h5>
      <div className="row text-muted p-2">
        <div className="col-md-6 mb-4">
          <div className="">
            <div className="card-body">
              <h5 className="card-title text-info">Step 1 </h5>
              <p className="card-text h6  ">
              <p>
                {" "}
                <BsCheckCircleFill className="text-success" /> &nbsp; Choose
                your preferences of choice base select and find rooms /
                roommates.
              </p>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="">
            <div className="card-body">
              <h5 className="card-title text-info">Step 2 </h5>
              <p className="card-text h6  ">
              <p>
                {" "}
                <BsCheckCircleFill className="text-success" /> &nbsp; Contact
                the post owner via the phone number provided in the post and
                enquire about further details.{" "}
              </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </Layout>
  );
};

export default work;
