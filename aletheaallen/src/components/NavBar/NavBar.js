import React from "react";
import "./NavBar.css";
import DrawToggleButton from "../SideDrawer/DrawToggleButton";
import { Link, } from 'react-router-dom';

const NavBar = props => (
  <header className="header">
    <div className="desktop_logo_social_icons">
    <div className="logo">
      <a href="/"><div className="logo_name">ALETHEA ALLEN</div>
      <div className="logo_job_title">HYPNOTHERAPY</div>
      <div className="logo_slogan">FINDING HAPPINESS</div></a>
    </div>
    <div className="social_media"><a href="/"><i class="fab fa-facebook-square"></i></a><a href="/"><i class="fab fa-twitter-square"></i></a><a href="mailto:alethea@aletheaallen.co.uk"><i class="far fa-envelope-open"></i></a></div>
    </div>
    <nav className="navbar">
      <div>
        <DrawToggleButton click={props.drawerClickHandler} />
      </div>
      <div>
        <ul className="toolbar_navigation_items">
          <div className="active_link">
          <li>
            <Link to="/" href="/">HOME</Link>
          </li>
          </div>
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
    </nav>
    <div className="social_and_logo">
      <div className="logo_name">ALETHEA ALLEN</div>
      <div className="logo_job_title">HYPNOTHERAPY</div>
      <div className="logo_slogan">FINDING HAPPINESS</div>
    <div><a href="/"><i class="fab fa-facebook-square"></i></a><a href="/"><i class="fab fa-twitter-square"></i></a><a href="mailto:alethea@aletheaallen.co.uk"><i class="far fa-envelope-open"></i></a></div>
    </div>
  </header>
);

export default NavBar;
