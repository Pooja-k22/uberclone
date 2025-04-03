import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons/faCreditCard";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons/faCalendarDay";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";

function Section3() {
  return (
    <>
      {/* section 3 plan for later */}

      <div className="container mt-5">
        <h1 className="fw-bold mb-4">Plan for later</h1>
        <div className="row p-3 p-md-0 ">
          <div className="col-md-7 sec-3-bg ">
            <div className="row ">
              <div className="col-12 col-md-6 py-5 ps-md-5 px-4 px-md-0 ">
                <h2 className="fw-bolder mb-4 " style={{ fontSize: "36px" }}>
                  Get your ride right with Uber Reserve
                </h2>
                <p className="">Choose date and time</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="bg-light">
                    <input
                      type="date"
                      className="bg-light border-0 p-2 "
                      style={{ borderRadius: "12px" }}
                    />
                  </div>

                  <div className=" ">
                    <Dropdown className="">
                      <Dropdown.Toggle
                        variant="light"
                        id="dropdown-basic"
                        className="px-4  pe-5 py-2"
                      >
                        <FontAwesomeIcon icon={faClock} className="me-3 " />
                        Time
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">8:00 AM</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">8:30 AM</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">9:00 AM</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">9:00 AM</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                {/* button */}
                <button className="w-100 btn text-white  py-3 mt-4 bg-black ">
                  Next
                </button>
              </div>
              {/* watch img */}
              <div className="col-6 sec-3-img d-none d-md-block"></div>
            </div>
          </div>

          <div className="col-md-5 mt-5 p-md-3 mt-md-3">
            <h5 className="mb-1 fw-bolder ms-4">Benefits</h5>
            <div className="p-md-5 p-4" style={{ fontSize: "18px" }}>
              <p className="d-flex justify-content-start align-items-center">
                {" "}
                <FontAwesomeIcon icon={faCalendarDay} className="me-3" />{" "}
                <span>
                  Choose your exact pickup time up to 90 days in advance.
                </span>
              </p>
              <p className="d-flex justify-content-start align-items-center">
                {" "}
                <FontAwesomeIcon icon={faClock} className="me-3" />{" "}
                <span>Extra wait time included to meet your ride.</span>
              </p>
              <p className="d-flex justify-content-start align-items-center">
                <FontAwesomeIcon icon={faCreditCard} className="me-3" />{" "}
                <span>Cancel at no charge up to 60 minutes in advance.</span>
              </p>
              <Link to="/ride">
                <button className=" btn btn-light shadow learn-btn">
                  See terms
                </button>
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="container  mt-md-5 pt-md-5">
        <div className="row pt-md-5">
          <div className="col-md-6 sec-4-img"></div>
          <div className="col-md-6 p-5">
            <h2 className="fw-bolder mt-5 mb-3">
              Ride with friends seamlessly
            </h2>
            <p>
              Riding with friends just got easier: set up a group ride in the
              Uber app, invite your friends, and arrive at your destination.
              Friends who ride together save together.
            </p>

            <Link to="/ride">
              <button className=" btn btn-light shadow learn-btn">Learn</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
