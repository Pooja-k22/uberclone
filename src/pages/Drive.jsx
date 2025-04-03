import React from "react";
import { Link } from "react-router-dom";
import driveimg from "../assets/driveimg.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons/faCalendarWeek";
import { faMoneyCheck } from "@fortawesome/free-solid-svg-icons/faMoneyCheck";
import Card from "react-bootstrap/Card";
import support from '../assets/24_7-Support.svg'
import safety from '../assets/Safety-Center.svg'
import commmunity from '../assets/Community-Guidelines.svg'


function Drive() {
  return (
    <>
      <div className="container">
        <h4 className="py-4 fw-bolder ">Drive</h4>
      </div>
      <div className="bg-black pb-5">
        <div className="container text-light ">
          <div className="row  ">
            <div className="col-md-6  d-flex flex-column justify-content-center align-items-start">
              <h1 className=" mb-3 fw-bolder" style={{ fontSize: "52px" }}>
                Drive when you want, make what you need
              </h1>
              <p>Earn on your own schedule.</p>
              <div className="d-flex jusify-content-between align-items-center gap-4 mt-5">
                <Link to="/login">
                  <button className="btn btn-light rounded-3 px-3 py-md-2 ">
                    Get started
                  </button>
                </Link>
                <Link to="/login">
                  <button className="custom-btn text-light fw-light">
                    Already have an account? Sign in
                  </button>
                </Link>
              </div>
            </div>

            <div className="col-md-6">
              <img
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_2144,w_2144/v1656511866/assets/67/3b671f-4ccd-484a-ad97-cded31823ed0/original/illustration-safety-01-1.png"
                alt=""
                width={"558px"}
                className=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* sec 2 */}
      <div className="container mt-5">
        <div className="row">
          <h1 className="fw-bold mb-3">Why drive with us</h1>
          <div className="col-md-12 ">
            <img src={driveimg} alt="" className="m-auto" />
          </div>
          <div className="col-md-12 mt-5">
            <div className="row mx-5 mt-4">
              <div className="col-md-4 ">
                <div>
                  <FontAwesomeIcon icon={faCalendarWeek} className="fs-5" />
                  <p
                    className="mt-3"
                    style={{ fontSize: "18px", fontWeight: "600px" }}
                  >
                    Set your own hours
                  </p>
                  <p>You decide when and how often you drive.</p>
                </div>
              </div>
              <div className="col-md-4">
                <FontAwesomeIcon icon={faMoneyCheck} className="fs-5" />
                <p
                  className="mt-3"
                  style={{ fontSize: "18px", fontWeight: "600px" }}
                >
                  Get paid fast
                </p>
                <p>Weekly payments in your bank account.</p>
              </div>
              <div className="col-md-4">
                <FontAwesomeIcon icon={faUser} className="fs-5" />
                <p
                  className="mt-3"
                  style={{ fontSize: "18px", fontWeight: "600px" }}
                >
                  Get support at every turn
                </p>
                <p>
                  If there’s anything that you need, you can reach us anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 ">
        <div className="row pt-5">
          {/* <div className="col"></div> */}
          <div className="col-md-6">
            <Card className="border border-0" style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_473,w_840/v1535744030/assets/7e/4c2f7e-da89-4c1e-a8cf-1b56172c6e5b/original/D_Fleet2x.png"
              />
              <Card.Body className="px-0">
                <Card.Title>Join a fleet</Card.Title>
                <Card.Text className="mt-2">
                  Find and join a fleet partner and start driving for them using
                  the Uber app.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6">
            <Card className="border border-0" style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_473,w_840/v1535753709/assets/ec/8183dc-ffee-468a-9ee8-175bd1fb1f55/original/D_Fleet_22x.png"
              />
              <Card.Body className="px-0">
                <Card.Title>Become a fleet partner</Card.Title>
                <Card.Text>
                  Start making money. Connect your drivers and upload the
                  required documents to your profile.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          {/* <div className="col"></div> */}
        </div>
      </div>

      <div className="container my-5 py-5">
        <h1 className="mb-3 fw-bold ">Safety on the road
        </h1>
        <p>Your safety drives us to continuously raise the bar.</p>
        <div className="row my-5 -">
            <div className="col-md-4">
            <div>
            <img className="mb-3" src={support} width={'48px'} alt="" />
            <h5 className="mb-3 ">Protection on every trip</h5>
            <p className="me-3">Each trip you take with the Uber app is insured to protect you and your rider.</p>
        </div>
            </div>
            <div className="col-md-4 ">
            <div>
            <img className="mb-3" src={safety} width={'48px'} alt="" />
            <h6 className="mb-3">Help if you need it</h6>
            <p className="me-4" style={{textAlign:'justify'}}>
            The Emergency Button calls 911. The app displays your trip details so you can quickly share them with authorities.</p>
        </div>
            </div>
            <div className="col-md-4">
            <div>
            <img className="mb-3" src={commmunity} width={'48px'} alt="" />
            <h6 className="mb-3" >   Community Guidelines</h6>
            <p className="me-3" style={{textAlign:'justify'}}>
         
            Our standards help to create safe connections and positive interactions with everyone. Learn how our guidelines apply to you.
            </p>
        </div>
            </div>
        </div>
      </div>

      {/* <Faq/> */}

      
      

    </>
  );
}

export default Drive;
