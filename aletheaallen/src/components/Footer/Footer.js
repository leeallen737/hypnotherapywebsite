import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer_left">
        <p>Web Design by Lee Allen</p>
      </div>
      <div className="footer_centre">
        <a href="https://afsfh.com/"><img src="/src/images/afsfh.png" alt="afsfh_link"/></a>
        <img src="../../images/holistic_services.gif" alt="holistic_services"/>
      </div>
      <div className="footer_right">Nav links here >></div>
    </footer>
  );
};

export default Footer;
