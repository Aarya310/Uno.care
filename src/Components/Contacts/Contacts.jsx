import React from 'react'
import './Contacts.css'
import maan from '../Imag/maan.png'
import { SiFacebook } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
const Conatcts = () => {
  return (
    <div>
    <div className='cont'>
        <div className="photo">
            <img src={maan} alt='/'/>
        </div>
        <div className='Address'>
             <h5>Address</h5>
      <span><FaPhoneVolume />  1800 8890 189</span>
      <span><IoMail /> Support@uno.Care</span>
      <span><FaLocationDot />  Indore, Madhya Pradesh</span>
        </div>
        <div className='Quick'>
          <p>Quick Links</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className='sociali-icons'>
        <SiFacebook />
        <FaXTwitter />
        <FaInstagramSquare />
        <FaLinkedin />
        </div>
    </div>
    <hr/>
    <div className="footer">
    <FaRegCopyright /> Uno.care, All Right Reserved
    </div>
    </div>
  );
}

export default Conatcts

