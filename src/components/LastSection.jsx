import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
FontAwesomeIcon

function LastSection() {
  return (
    <>
      <div className="last-bg ">
        <div className="container py-5">
          <div className="row">
            <h2 className="fw-bold mb-4">Do more in the app</h2>
            <div className="col-md-6">
              <div className="d-flex justify-content-start align-items-center bg-light p-4">
                <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_188,w_188/v1690807720/assets/a5/9986ad-0d9f-4396-8539-389bce97f579/original/Final-Download-Uber-App.png" alt="" width={"150px"} />
                <div className="ms-5 me-5">
                    <h5>Download the Uber app</h5> <p>Scan to download</p>
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className="col-md-6">
            <div className="d-flex justify-content-start align-items-center bg-light p-4">
                <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_188,w_188/v1690810558/assets/e2/4f1914-1e23-4896-ad77-22e88c37c2f9/original/Rider-App-Icon_iOS.svg" alt="" width={"150px"} />
                <div className="ms-5 me-5">
                    <h5>Sign up to ride</h5> 
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <p>Certain requirements and features vary by country, region, and city.</p>
      </div>
    </>
  );
}

export default LastSection;
