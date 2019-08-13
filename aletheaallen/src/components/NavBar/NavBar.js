import React from "react";
import "./NavBar.css";
import DrawToggleButton from "../SideDrawer/DrawToggleButton";

const NavBar = props => (
  <header className="header">
    <span className="logo_social_icons">
    <div className="logo">
      <a href="/">The Logo</a>
    </div>
    <div className="social_media"><i class="fab fa-facebook-square"></i><i class="fab fa-twitter-square"></i><i class="far fa-envelope-open"></i></div>
    </span>
    <nav className="navbar">
      <div>
        <DrawToggleButton click={props.drawerClickHandler} />
      </div>
      <div>
        <ul className="toolbar_navigation_items">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">ABOUT</a>
          </li>
          <li>
            <a href="/">HYPNOTHERAPY</a>
          </li>
          <li>
            <a href="/">SERVICES</a>
          </li>
          <li>
            <a href="/">CONTACT</a>
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
