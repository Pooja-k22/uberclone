import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import {  Nav, Container, Button,Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';



function Header() {
  return (
    <>
     <Navbar expand="lg" bg="black" variant="dark" className="shadow-sm p-2">
      <Container>
        {/* Uber Brand */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand className="text-light fs-4">Uber</Navbar.Brand>
        </Link>

        {/* Right-Aligned Hamburger Button (White) */}
        <Navbar.Toggle
          aria-controls="navbarNav"
          className="border-0 ms-auto"
        >
          <FontAwesomeIcon icon={faBars} className="text-light fs-3" />
        </Navbar.Toggle>

        {/* Navbar Items */}
        <Navbar.Collapse id="navbarNav">
          <Nav className="w-100 flex-column flex-lg-row align-items-start align-items-lg-center">
            <Nav.Link as={Link} to="/ride" className="text-light">
              Ride
            </Nav.Link>
            <Nav.Link as={Link} to="/drive" className="text-light">
              Drive
            </Nav.Link>
            <Nav.Link href="#" className="text-light">
              Business
            </Nav.Link>
            <Nav.Link href="#" className="text-light">
              About
            </Nav.Link>

            {/* Right Side: Language, Help, Login & Sign Up */}
            <div className="d-flex flex-column flex-lg-row  align-items-lg-center ms-md-auto mt-3 mt-lg-0">
              {/* Language Dropdown */}
              <Dropdown>
                <Dropdown.Toggle
                  variant="black"
                  id="dropdown-basic"
                  className="text-light border-0 ps-0"
                >
                  <FontAwesomeIcon icon={faGlobe} className="text-light me-2" />
                  EN
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">English</Dropdown.Item>
                  <Dropdown.Item href="#">Spanish</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* Help */}
              <Nav.Link href="#" className="text-light mt-2 mt-lg-0">
                Help
              </Nav.Link>

              {/* Login & Sign Up */}
              <Nav.Link as={Link} to="/login" className="text-light mt-2 mt-lg-0">
                Login
              </Nav.Link>
              <Link to="/login">
                <Button variant="light" className="mt-2 mt-lg-0 rounded-5">
                  Sign Up
                </Button>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
    </>
  )
}

export default Header