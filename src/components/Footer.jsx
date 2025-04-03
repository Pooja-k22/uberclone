import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import appstoreapple from "../assets/app-store-apple.svg"

import img from "../assets/app-store-google.svg"


function Footer() {
  return (
    <>
      <div className="bg-black text-light ">
        <div className="container pt-5">
          <h4 className=" pt-5">Uber</h4>
          <p className="mt-4 ">Visit Help Center</p>
          <div className="row pt-4 mt-5">
            <div className="col-md-3">
              <h5>Company</h5>
              <ul className="list-unstyled my-3 foot">
                <li className="mb-2">About us</li>

                <li className="mb-2"> Our offerings</li>

                <li className="mb-2"> Newsroom</li>

                <li className="mb-2"> Investors</li>

                <li className="mb-2"> Blog</li>

                <li> Careers</li>
              </ul>
            </div>
            <div className="col-md-3 mt-4 mt-md-0">
              <h5>Products</h5>
              <ul className="list-unstyled my-3 foot">
                <li className="mb-2">Ride</li>

                <li className="mb-2"> Drive</li>

                <li className="mb-2"> Deliver</li>

                <li className="mb-2"> Eat</li>

                <li className="mb-2"> Uber for Business</li>

                <li className="mb-2"> Uber Freight</li>

                <li className="mb-2"> Gift cards</li>

                <li className="mb-2"> Uber Health</li>
              </ul>
            </div>
            <div className="col-md-3 mt-4 mt-md-0">
              <h5>Global citizenship</h5>
              <ul className="list-unstyled my-3 foot">
                <li className="mb-2">Safety</li>

                <li className="mb-2"> Sustainability</li>
              </ul>
            </div>
            <div className="col-md-3 mt-4 mt-md-0">
              <h5>Travel</h5>
              <ul className=" list-unstyled my-3 foot">
                <li className="mb-2">Reserve</li>

                <li className="mb-2"> Airports</li>

                <li> Cities</li>
              </ul>
            </div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-md-between justify-content-start align-items-start align-items-md-center my-5">
            {/* icons */}
            <div className="d-flex justify-content-between align-items-center mb-4 mb-md-0 fs-5 gap-5">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faXTwitter} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="d-flex flex-column flex-md-row align-items-start ">
              <button className="bg-black text-light border-0 me-md-4">
                <FontAwesomeIcon icon={faGlobe} className="me-2" />
                English
              </button>

              <button className="bg-black text-light border-0 me-md-4">
                <FontAwesomeIcon icon={faLocationDot} className="me-3" />
                Kochi
              </button>
            </div>
          </div>

          <div className="mb-5">
            <img src={img} className="me-3" style={{width:'120px'}} alt="" />

            <img src={appstoreapple}  style={{width:'120px'}} alt="" />
            
          </div>
          <div className=" d-md-flex justify-content-between align-items-center text-secondary pb-5" style={{fontSize:"12px"}}>

          <p>© 2025 Uber Technologies Inc.</p>
          <div className="d-flex justify-content-between align-items-center gap-5" >
            <p> Privacy</p>

            <p> Accessibility</p>

            <p> Terms</p>
          </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Footer;
