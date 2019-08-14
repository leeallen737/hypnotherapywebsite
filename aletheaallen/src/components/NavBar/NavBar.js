import React from "react";
import "./NavBar.css";
import DrawToggleButton from "../SideDrawer/DrawToggleButton";
import { Link, } from 'react-router-dom';

const NavBar = props => (
  <header className="header">
    <span className="logo_social_icons">
    <div className="logo">
      <a href="/"></a>
    </div>
    <div className="social_media"><a href=""><i class="fab fa-facebook-square"></i></a><a href="/"><i class="fab fa-twitter-square"></i></a><a href="mailto:alethea@aletheaallen.co.uk"><i class="far fa-envelope-open"></i></a></div>
    </span>
    <nav className="navbar">
      <div>
        <DrawToggleButton click={props.drawerClickHandler} />
      </div>
      <div>
        <ul className="toolbar_navigation_items">
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
            <Link to="/contact" href="/contactform">CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
    <div>
      <h1 className="my-heading"></h1>
    </div>
  </header>
);

export default NavBar;
