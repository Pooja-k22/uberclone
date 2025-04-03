import React from "react";
import Accordion from "react-bootstrap/Accordion";

function Faq() {
  return (
    <>
      <div className="container mt-5">
        <h2 className="fw-bold mb-5">Frequently asked questions</h2>
        <Accordion>
          <Accordion.Item eventKey="0" className="border-0  p-2">
            <Accordion.Header className="shadow " >
              Can I have a lost item delivered to me?
            </Accordion.Header>
            <Accordion.Body>
              The Uber app helps provide a delivery solution that can save you a
              trip across town, whether it’s for a last-minute birthday gift or
              your forgotten keys. Just choose Package in the Uber app.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="border-0 p-2">
            <Accordion.Header className="shadow">Can I rent a car using Uber?</Accordion.Header>
            <Accordion.Body>
              Yes. Find out more about how car rentals work.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className="border-0 p-2">
            <Accordion.Header className="shadow">
              Can I request a ride that picks up friends in different locations?
            </Accordion.Header>
            <Accordion.Body>
              Yes. Set up a group ride in the Uber app, invite your friends, and
              arrive at your destination together.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" className="border-0 p-2">
            <Accordion.Header className="shadow">Can I request a taxi on Uber?</Accordion.Header>
            <Accordion.Body>
              Uber makes it easy to get a taxi nearby in the cities where Uber
              Taxi is available. There’s no need to find a cab stand, hail a cab
              on the street, or even call the local cab company. Instead, you
              can use the Uber app or website to request a taxi in just a few
              taps or clicks.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4" className="border-0  p-2">
            <Accordion.Header className="shadow">
              Is there an Uber ride option for 5 people?
            </Accordion.Header>
            <Accordion.Body>
              Request UberXL for a van or SUV that fits up to 6 people at an
              affordable price. It’s perfect for a family trip or a ride to the
              airport.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default Faq;
