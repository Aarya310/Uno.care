import React from 'react'
import { SiFacebook } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import arneel from '../Imag/arneel.jpg';
import './Home.css'

const Home = () => {
  return (
    <div>
      <div className="home-left">
        <h1>Comprehensive <span>Healthcare</span><br/></h1>
        <h1 className='service'>Service!</h1>
        
        <div className='para'>
        <p>Aims to spark a <b className='hr'>healthcare revolution </b> in the<br/></p>
       <p className='p2'> hinterlands & suburbs of India.
        </p>
        </div>
        <div className='req'>
            <button>Request meeting</button> 
            {/* <div className='arrow'>Arrow</div> */}
        </div>
        <div className='social-icons'>
        <SiFacebook />
        <FaXTwitter />
        <FaInstagramSquare />
        <FaLinkedin />
        </div>
        <div className='mail'>
        <IoMdMail /> <span>support@uno.care</span>
        </div>
      </div>
      <div className='home-right'>
        <img src={arneel} alt=""/>
    </div>
    </div>
  )
}

export default Home
