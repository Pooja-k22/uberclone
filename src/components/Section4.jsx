import React from "react";

function Section4() {
  return (
    <>
     {/* section 4  Uber app to help you travel*/}
     <div className="container mt-md-5 pt-md-5">
        <div className="row p-5 ">
          <h2 className="fw-bold mb-4">
            Use the Uber app to help you travel your way
          </h2>
          <div className="col-md-4">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1072,w_1072/v1692743834/assets/54/f60161-cf6b-4401-a309-8bb196c0014c/original/U_CoastalCalifornia_White_Final-%281%29.jpg"
              alt=""
              className="w-100"
            />
            <div className="mt-3">
              <p className="fw-bold">Ride Options</p>
              <p>
                {" "}
                There’s more than one way to move with Uber, no matter where you
                are or where you’re <br />
                headed next.
              </p>
              <button className="btn rounded text-light px-4 py-2 bg-black fw-bold mt-3">
                Search ride options
              </button>
            </div>
          </div>

          <div className="col-md-4 mt-5 mt-md-0">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1072,w_1072/v1692743890/assets/f9/ba27c4-665c-4cca-8161-9e3f87f49994/original/Airport-rides.png"
              alt=""
              className="w-100"
            />
            <div className="mt-3">
              <p className="fw-bold">700+ airports</p>
              <p>
                You can request a ride to and from most major airports. Schedule
                a ride to the airport for one less thing to worry about.
              </p>
              <button className="btn rounded text-light bg-black px-4 py-2 fw-bold mt-3">
                Search airports
              </button>
            </div>
          </div>

          <div className="col-md-4 mt-5 mt-md-0">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_768/v1689609697/assets/b8/c39de0-6e13-485b-ba45-66511170c62a/original/SS_Commuter.jpg"
              alt=""
              className="w-100"
            />
            <div className="mt-3">
              <p className="fw-bold">10,000+ cities</p>
              <p>
                The app is available in thousands of cities worldwide, so you
                can request a ride even when you’re far from home.
              </p>
              <button className="btn rounded text-light bg-black px-4 py-2 fw-bold mt-3">
                Search cities
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
