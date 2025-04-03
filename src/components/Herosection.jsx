import { faLocationArrow } from "@fortawesome/free-solid-svg-icons/faLocationArrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons/faCircleDot";
import { faCircleStop } from "@fortawesome/free-solid-svg-icons/faCircleStop";
import Navbar from 'react-bootstrap/Navbar';
import {  Nav, Container, Button,Dropdown } from "react-bootstrap";

import LastSection from './LastSection'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from "./Section4";
import Section5 from "./Section5";
import Faq from './Faq'
import { Link } from "react-router-dom";




function Herosection() {
  return (
    <>
    <Navbar  bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#" className='fw-bold fs-4'>Ride</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav"  />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto d-none d-md-flex">
            <Nav.Link href="#">Request a ride</Nav.Link>
            <Nav.Link href="#">Reserve a ride</Nav.Link>
            <Nav.Link href="#">See prices</Nav.Link>
            <Nav.Link href="#">Explore ride options</Nav.Link>
            <Nav.Link href="#">Airport rides</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <div className="container mt-5">
        <div className="row ">
          <div className="col-md-5 p-md-5">
            <h1 className=" fw-bolder mb-3  head">
              Request a ride for now or later
            </h1>
            <p className="mb-4">Add your trip details, hope in, and go.</p>

            {/* Location Input */}
            <InputGroup className="mb-3 custom-input rounded-3">
              <InputGroup.Text className="bg-transparent border-0">
                <FontAwesomeIcon icon={faCircleDot} />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Enter location"
                className="bg-clr border-0 p-3"
              />
              <InputGroup.Text className="bg-transparent border-0 py-2 fs-3">
                <FontAwesomeIcon icon={faLocationArrow} />
              </InputGroup.Text>
            </InputGroup>

            {/* Destination Input */}
            <InputGroup className="mb-3 custom-input rounded-3">
              <InputGroup.Text className="bg-transparent border-0">
                <FontAwesomeIcon icon={faCircleStop} />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Enter destination"
                className="bg-clr border-0  p-3"
              />
            </InputGroup>

            {/* Buttons */}
            <div className="d-flex gap-2 mb-5 mb-md-0 mt-4">
              <Link to='/login'>
                <button className="btn bg-black text-light fw-bold px-4 py-2">
                  See prices
                </button>
              </Link>
              <button className="btn btn-light fw-bold px-3">
                Schedule for later
              </button>
            </div>
          </div>

          <div className="col-md-1 "></div>

          <div className="col-md-6">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1152,w_1152/v1683919251/assets/42/a29147-e043-42f9-8544-ecfffe0532e9/original/travel-ilustra.png"
              alt=""
              className="w-100"
            />
          </div>
        </div>
      </div>
      
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Faq/>
      <LastSection/>
     

      

      
    </>
  );
}

export default Herosection;
