import React from 'react'
import InputGroup from "react-bootstrap/InputGroup";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons/faLocationArrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircleStop } from "@fortawesome/free-solid-svg-icons/faCircleStop";

import Form from "react-bootstrap/Form";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons/faCircleDot";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';




function Ride() {
  return (
    <>
     <div className="container ">
        <h4 className="py-3 fw-bolder ">Ride</h4>
      </div>
    <div className='bg-black text-light m-0'>
        <div className="container ">
            <div className="row p-md-5 py-3 ">
            <div className="col-md-6">
                <img
                  src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1152,w_1152/v1692093054/assets/ba/9a388b-08c4-4024-a37b-6e9becc9b696/original/220428_UBER_CDMX_M-TS5-B_017884_VS_R2-%281%29.png"
                  alt=""
                  className="w-100"
                />
              </div>
    
              <div className="col-md-1 "></div>
              <div className="col-md-5 p-md-5">
                <h1 className=" fw-bolder mb-3  head">
                Get your ride right with Uber Reserve
                </h1>
                <p className="mb-4">Complete your plans today by reserving a ride.¹ Request your ride up to 90 days ahead with Uber Reserve, so getting there is the last thing on your mind.</p>
    
                {/* Location Input */}
                <InputGroup className="mb-3 custom-input rounded-3">
                  <InputGroup.Text className="bg-transparent border-0">
                    <FontAwesomeIcon icon={faCircleDot} />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Where from?"
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
                    placeholder="Where to?"
                    className="bg-clr border-0  p-3"
                  />
                </InputGroup>
    
                {/* Buttons */}
                <div className="d-flex gap-2 mb-5 mb-md-0 mt-4">
                  
                  <button className="btn btn-light fw-bold px-3">
                    Next
                  </button>
                </div>
              </div>
              
            </div>
          </div>

          {/* sec2 */}
          <div className="container  mt-5">
        <h1 className="my-5 fw-bold">Suggestions</h1>
        <div className="row text-black">
          <div className="col-md-4 rounded-3 bg-clr p-2">
            <p className="sug-head mb-0 fw-bold">Ride</p>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="sug-p me-5">
                  Go anywhere with Uber. Request a ride, hop in, and go.{" "}
                </p>
                <button
                  className="btn btn-light fw-bold rounded-3 "
                  style={{ fontSize: "14px" }}
                >
                  Details
                </button>
              </div>

              <img
                src="https://mobile-content.uber.com/launch-experience/ride.png"
                alt=""
                width={"128px"}
                
              />
            </div>
          </div>
          <div className="col-md-4 rounded-3 ms-md-4 mt-4 mt-md-0 bg-clr p-2">
            <p className="sug-head mb-0 fw-bold">Reserve</p>

            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="sug-p ">
                  Reserve your ride in advance so you <br />
                  can relax on the day of your trip.
                </p>
                <button
                  className="btn btn-light fw-bold rounded-3 "
                  style={{ fontSize: "14px" }}
                >
                  Details
                </button>
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

      {/* grid sec */}

      <div className="container mt-5">
      {/* Section 1: Reliably on Time */}
      <div className="row align-items-center pt-5">
        <div className="col-md-6 mb-3  p-md-5  mb-md-0 text-start">
          <h1 className="fw-bold" style={{fontSize:'36px'}}>Reliably on time</h1>
          <p className="my-3 ">
            Our technology helps ensure that you’re picked up on time for a stress-free ride.²
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1152/v1695664093/assets/db/adaf2f-5e3f-4adc-a645-fc278c959be4/original/1-reliably-on-time.png"
            className="img-fluid"
            alt="Reliably on time"
          />
        </div>
      </div>

      {/* Section 2: Ready When You Are */}
      <div className="row align-items-center mt-5 flex-column-reverse flex-md-row">
        <div className="col-md-6 text-center">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1152/v1695664057/assets/ee/725455-123d-4341-aeb8-a078e337d099/original/2-ready-when-you-are.png"
            className="img-fluid"
            alt="Ready when you are"
          />
        </div>
        <div className="col-md-6 mb-3 mb-md-0 p-md-5  text-start">
          <h1 className="fw-bold" style={{fontSize:'36px'}}>Ready when you are</h1>
          <p  className=' my-3 '>Your ride is on your schedule, with up to 15 minutes of wait time included.³</p>
        </div>
      </div>

      {/* Section 3: Tailored for You */}
      <div className="row align-items-center mt-5 ">
        <div className="col-md-6  text-start p-md-5   mb-3 mb-md-0">
          <h1 className="fw-bold " style={{fontSize:'36px'}}>Tailored for you</h1>
          <p  className='my-3 '>Ride options for every budget and occasion—and request your Favorite Driver.⁴</p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1152/v1695664018/assets/8c/5d20f3-e70c-4ab5-be50-0cbb313a209c/original/3-tailored-for-you.png"
            className="img-fluid"
            alt="Tailored for you"
          />
        </div>
      </div>

      {/* Section 4: Perfect for Travel */}
      <div className="row align-items-center mt-5 flex-column-reverse flex-md-row">
        <div className="col-md-6 text-center">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1152/v1695663809/assets/50/4dd061-b0f1-4791-a55e-9f4cc2d07a49/original/Screenshot-2023-09-25-at-1.43.07-PM.png"
            className="img-fluid"
            alt="Perfect for travel"
          />
        </div>
        <div className="col-md-6  text-start mb-3 p-md-5  mb-md-0">
          <h1 className="fw-bold" style={{fontSize:'36px'}}>Perfect for travel</h1>
          <p className=' my-3 '>
            Reservations available to and from major airports. Our flight-tracking technology helps
            ensure that you’ll have a ride ready when you land at your destination—even if your flight
            is delayed.⁵
          </p>
        </div>
      </div>
    </div>

    {/* sec 4 */}

    <div className="container mt-5">
        <div className="row pt-md-5">
            <div className="col-md-4 p-md-5 p-3">

                <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1104,w_1104/v1603822022/assets/6c/d0eef8-27e3-45ee-b19f-c1d258fa3a20/original/bow_tie4x.png" width={'30px'} alt="" />
                <h6 className='mt-3 fw-bold'>Reserve</h6>
                <p>Tap the Reserve icon in your updated Uber app. Reserve at least 15 minutes in advance.</p>
            </div>
            <div className="col-md-4 p-md-5 p-3 ">

            <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1603822008/assets/9c/c7acb6-d62e-4045-bc9c-2403f627c796/original/car_check_front4x.png" width={'30px'} alt="" />
                <h6 className='mt-3 fw-bold'>Receive confirmation</h6>
                <p>Reference your reservation details in the app and review your assigned driver as your trip nears. Cancel at no charge up to one hour in advance.</p>
            </div>
            <div className="col-md-4 p-md-5 p-3">

            <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1603822036/assets/84/8800d0-34b9-4390-aefd-dfbf5c157560/original/arrow_left_right4x.png" width={'30px'} alt="" />
                <h6 className='mt-3 fw-bold'>Ride</h6>
                <p>Meet your driver outside within the wait time included in your reservation. Enjoy the ride.</p>
            </div>
        </div>
    </div>

    <div className="container my-5 pb-5">
        <div className="row ">
            <div className="col-md-5">
            <div className=''><button className="custom-btn w-100  text-light fw-bolder d-flex justify-content-between align-items-center" style={{fontSize:'40px',textAlign:'justify'}}><span>Reserve now</span> <FontAwesomeIcon icon={faArrowRight} className='' style={{marginLeft:"120px"}} /></button></div>
            </div>
            <div className="col-md-2"></div>

            <div className="col-md-5 ">

            <div className=''><button className="custom-btn w-100  text-light fw-bolder d-flex justify-content-between align-items-center" style={{fontSize:'40px'}}>
            <span>See prices</span><FontAwesomeIcon icon={faArrowRight} className=''  /></button></div>
            </div>
        </div>
    </div>

    {/* sec */}
    <div className="container mt-5 ">
    <p className='' style={{textAlign:'justify'}}>¹When you request an Uber Reserve trip, the trip price you see will be an estimate that includes a reservation fee, which may vary depending on the location of the pickup address and/or the day and time of your trip. This fee is paid by riders for their driver's additional wait time and time/distance spent traveling to the pickup location.</p>

<p style={{textAlign:'justify'}}>
    ²Uber doesn’t guarantee that a driver will accept your ride request. Your ride is confirmed once you receive your driver details. Uber Reserve is available in select cities.
    
</p>
<p style={{textAlign:'justify'}}>³Wait time varies based on the vehicle option you select.</p>

<p style={{textAlign:'justify'}}>⁴Favorite Driver feature is only available in select regions.</p>

<p style={{textAlign:'justify'}}>⁵Available only at select airports. Waiting time of up to one hour after the estimated arrival time of your flight is free of charge. After that, the driver can cancel the trip request and the total fare will be charged to you. Your trip request is only confirmed once you have received your journey details. However, your driver remains free to cancel your trip request. In this case, the trip request will be offered to another nearby driver. Please note that Uber cannot guarantee that a driver will accept your trip request.</p>

<p style={{textAlign:'justify'}}>
    ⁶Applicable to UberX and most other ride types. Some ride types may require more lead time. Check the Reserve terms in your app for details.
    
</p>
<p style={{textAlign:'justify'}}>⁷Cancellation fees for Uber Reserve are higher than with on-demand. You can cancel at no charge up to 60 minutes before your reservation pickup time. If you cancel less than 60 minutes before your reservation, you’ll be charged the cancellation fee below for your driver’s time. You will not be charged a cancellation fee if no driver has confirmed your trip yet. You will receive a notification when your driver is on the way.</p>

<p className='mb-0' style={{textAlign:'justify'}}>You can find the cancellation fee amount that applies to your trip by clicking "See terms" from the in-app time selection screen that shows when you reserve a ride, and scrolling down to your preferred product type.</p>
    </div>
    </div>
    </>
  )
}

export default Ride