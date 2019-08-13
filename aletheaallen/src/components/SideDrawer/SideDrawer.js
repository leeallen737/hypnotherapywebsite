import React from "react";
import { Link } from 'react-router-dom';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
  <nav className={drawerClasses}>
    <ul>
      <li>
      <Link to="/home" href="/">HOME</Link>
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
      <Link to="/contact" href="/contactform">CONTACT</Link>
      </li>
    </ul>
  </nav>
  );
};

export default sideDrawer;