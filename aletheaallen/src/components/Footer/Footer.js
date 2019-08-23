import React from "react";
import "./Footer.css";
import { Link, } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer_left">
        <p>WEB DESIGN BY LEE ALLEN</p>
      </div>
      <div className="footer_centre">
        <img className="holistic_services"/>
        <img className="afsfh"/>
      </div>
      <div className="footer_right"><div>
        <ul className="footer_navigation_items">
          <li>
            <Link to="/" href="/">HOME</Link>
          </li>
          <li>
            <Link to="/about" href="/About">ABOUT</Link>
          </li>
          <li>
            <Link to="/hypnotherapy" href="/hypnotherapy">HYPNOTHERAPY</Link>
          </li>
          <li>
            <Link to="/services" href="/services">SERVICES</Link>
          </li>
          <li>
            <Link to="/contactform" href="/contactform">CONTACT</Link>
          </li>
        </ul>
      </div>
      </div>
      
    </footer>
  );
};

export default Footer;
