import React from 'react'
import { Link } from 'react-router-dom'

function Section5() {
  return (
    <>
     {/* section 5 */}
     <div className="bg-black">
        <div className="container py-5   text-light  mt-5">
          <div className="row m-md-5">
            <div className="col-md-6  ">
              <h2 className="fw-bold mb-3">Looking for business solutions?</h2>
              <p style={{ fontSize: "20px" }}>
                Get information about how companies leverage{" "}
                <a href="#">Uber for Business</a>:
              </p>
              <ul>
                <li> Business travel</li>
                <li> Courtesy rides</li>
                <li> Meal programs</li>
                <li>Item delivery</li>
              </ul>

              <div className="d-flex jusify-content-between align-items-center gap-4 mt-5">
                <Link to='/login'>
                  <button className="btn btn-light rounded-3 px-3 py-md-2 ">
                    Get started
                  </button>
                </Link>
                <button className="custom-btn text-light fw-light">Check out our solutions</button>
              </div>
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <img
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_648,w_1152/v1691776332/assets/d6/48f5b6-bb5f-450e-8733-90aefecbd09e/original/U4B_Spot_U4BWebsite.jpg"
                alt=""
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section5