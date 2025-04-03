import { faApple } from '@fortawesome/free-brands-svg-icons/faApple'
import { faQrcode } from '@fortawesome/free-solid-svg-icons/faQrcode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'



function Loginpage() {
  return (
    <>
    <div className="d-flex align-items-center justify-content-center mt-5  ">
    <div className="container " style={{ maxWidth: "400px" }}>
        <h4 className=' fw-bold mb-4'>What's your phone number or email?</h4>

         <input type="text" placeholder='Enter phone number or email' className='form-control mb-3' />

         <button className='btn bg-black text-light w-100 mb-3'>Continue</button>

         <div className="d-flex align-items-center w-100 mb-3" >
            <hr className="flex-grow-1" />
            <span className="px-2">or</span>
            <hr className="flex-grow-1" />
        </div>

        <button  className="w-100 mb-3 py-2 border d-flex justify-content-center align-items-center" >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg75LWB1zIJt1VTZO7O68yKciaDSkk3KMdw&s" alt="" width={'20px'} className='me-2'/> Continue with Google
      </button>

      <button  className="w-100 py-2 mb-3 border d-flex justify-content-center align-items-center" >
      <FontAwesomeIcon icon={faApple} className='me-2 fs-4' /> Continue with Apple
      </button>

      <div className="d-flex align-items-center w-100 mb-3" >
            <hr className="flex-grow-1" />
            <span className="px-2">or</span>
            <hr className="flex-grow-1" />
        </div>

        <button  className="w-100 mb-4 border d-flex justify-content-center align-items-center py-2" >
        <FontAwesomeIcon icon={faQrcode} className='me-2 ' />Log in with QR code
      </button>
      <p style={{fontSize:'12px',textAlign:'justify'}}>By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.</p>

    </div>
   </div>
    
    </>
  )
}

export default Loginpage