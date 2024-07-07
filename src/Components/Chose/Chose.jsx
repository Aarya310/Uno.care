import React from 'react'
import './Chose.css'
import { PiPlusThin } from "react-icons/pi";
import tag from '../Imag/tag.jpg';
import nabl from '../Imag/nabl.jpg';
import ph from '../Imag/ph.png';
import comp from '../Imag/comp.png'

const Chose = () => {
  return (
    <div>
      <section>
        <div className="container">
          <h4>Why Choose Us</h4>
          <div className="cards">
            <div className="card">
              <img src={nabl} alt='NABL' />
              <p><b className='b'>100%</b> authentic<br /> test from NABL <br /> certified lab</p>
              <span><PiPlusThin />  Get more about this</span>
            </div>
            <div className="card">
              <img src={tag} alt='Tag' />
              <p>Best <b className='b '>price</b> <br /> guaranteed</p>
              <span><PiPlusThin />  Get more about this</span>
            </div>
            <div className="card">
              <img src={comp} alt='Comp' />
              <p><b className='b'>100%</b><br /> digital health</p>
              <span><PiPlusThin />  Get more about this</span>
            </div>
            <div className="card">
              <img src={ph} alt='PH' />
              <p><b className='b'>Emergency services</b> <br /> with<br /> care coordination</p>
              <span><PiPlusThin />  Get more about this</span>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Chose;
