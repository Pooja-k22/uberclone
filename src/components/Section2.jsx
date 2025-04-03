import React from 'react'
import { Link } from 'react-router-dom'

function Section2() {
  return (
    <>
    {/* section 2  suggesion*/}
    <div className="container mt-5">
        <h1 className="my-5 fw-bold">Suggestions</h1>
        <div className="row">
          <div className="col-md-4 bg-clr p-4">
            <p className="sug-head mb-0 fw-bold">Ride</p>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="sug-p me-5">
                  Go anywhere with Uber. Request a ride, hop in, and go.{" "}
                </p>
                <Link to='/login'>
                  <button
                    className="btn btn-light fw-bold rounded-3 "
                    style={{ fontSize: "14px" }}
                  >
                    Details
                  </button>
                </Link>
              </div>

              <img
                src="https://mobile-content.uber.com/launch-experience/ride.png"
                alt=""
                width={"128px"}
              />
            </div>
          </div>
          <div className="col-md-4 ms-md-4 mt-4 mt-md-0 bg-clr p-4">
            <p className="sug-head mb-0 fw-bold">Reserve</p>

            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="sug-p ">
                  Reserve your ride in advance so you <br />
                  can relax on the day of your trip.
                </p>
                <Link to='/login'>
                  <button
                    className="btn btn-light fw-bold rounded-3 "
                    style={{ fontSize: "14px" }}
                  >
                    Details
                  </button>
                </Link>
              </div>

              <img
                src="https://mobile-content.uber.com/uber_reserve/reserve_clock.png"
                alt=""
                width={"128px"}
              />
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  )
}

export default Section2