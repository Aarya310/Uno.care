import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import './Num.css'
const Num = () => {
  return (
    <div className='num'>
      <div className="toll">
      <span>  <FaPhoneAlt />1800 8890 189</span>
      </div>
      <div className="maili">
        <span><IoMail /> Support@uno.care</span>
      </div>
    </div>
  )
};

export default Num
