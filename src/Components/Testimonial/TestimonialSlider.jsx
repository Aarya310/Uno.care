import React, { useState } from 'react';
import './Testimonial.css';
import case_construction from '../Imag/case_construction.jpg';
import maan from '../Imag/maan.png';
import comp from '../Imag/comp.png';

const testimonials = [
  {
    image: case_construction,
    text: 'Using the software developed by uno.care , our efficiency skyrocketed! Its intutive, reliable & has significantly iimporved our workflow. Excellent support & seamless integration make it an invaluable tool for our team',
    name: 'Akshay',
    designation: 'CEO, Case Construction Pvt Ltd',
    rating: 5,
  },
  {
    image: maan,
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempora deserunt veritatis adipisci! Officia molestias ipsam excepturi nihil nisi quasi?',
    name: 'Akshay',
    designation: 'CEO, Case Construction Pvt Ltd',
    rating: 4,
  },
  {
    image: comp,
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempora deserunt veritatis adipisci! Officia molestias ipsam excepturi nihil nisi quasi?',
    name: 'Akshay',
    designation: 'CEO, Case Construction Pvt Ltd',
    rating: 3,
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const { image, text, name, designation, rating } = testimonials[currentIndex];

  return (
    <div className="testimonial-container">
      <div className="headingi">
        <h4>Testimonial</h4>
      </div>
      
      <div className="slider">
        <button className="arrow left-arrow" onClick={prevCard}>‹</button>
        <div className="cardis">
          <div className="cardi">
            <div className="cardi-left">
              <img src={image} alt={name} />
            </div>
            <div className="cardi-right">
              <p>{text}</p>
              <br />
              <b>{name}</b>
              <div className="cardi-bottom">
                <b>{designation}</b>
                <span className="rating">
                  {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <button className="arrow right-arrow" onClick={nextCard}>›</button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
