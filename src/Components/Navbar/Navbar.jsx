import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <h3>UNO.care</h3>
          <div className="menu">
            <ul>
              <li>
                <Link to="/">Clients</Link>
              </li>
              <li>
                <Link to="/">Our servings</Link>
              </li>
              <li>
                <Link to="/">Testimonial</Link>
              </li>
              <li>
                <Link to="/">Support</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <li>
               
              <div class="contact-info">
                <span class="contact-label"><u>Contact Us</u></span>
                <span class="contact-number">1800-8990-189</span>
              </div>
             
            </li>
            <FaSearch />
          <IoGlobeOutline  />
            <div className="login-container">
      <FaUser className="login-icon" />
      <span className="login-text">  Login</span>
    </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
