import React from 'react'
import './Clients.css';
import case_construction from '../Imag/case_construction.jpg';
import maan from '../Imag/maan.png';
import arneel from '../Imag/arneel.jpg';
import liugong from '../Imag/liugong.jpg';
import national_steels from '../Imag/national_steels.png';
import shakti from '../Imag/shakti.png';
const Clients = () => {
  return (
    <div>
      <section className='ov'>
      <div className="images">
        <div className="heading">
            <h4>Clients</h4>
        </div>
        
            <img src={case_construction} alt=''/>
            <img src={maan} alt=''/>
            <img src={arneel} alt=''/>
            <img src={liugong} alt=''/>
            <img src={national_steels} alt=''/>
            <img src={shakti} alt=''/>
        </div>
      </section>
    </div>
  );
}

export default Clients
