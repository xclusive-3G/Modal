import React, { useState } from "react";
import "./navbar.scss";
import logo from "..//images/logo.svg";
import hamburger from "..//images/icon-hamburger.svg";
import arrow from "..//images/icon-arrow-down.svg";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="hero">
      <div className="main-container">
        <img src={logo} alt="logo" className="logo" />
        <ul
          className={isMobile ? "navlist-mobile" : "navList"}
          onClick={() => setIsMobile(false)}
        >
          <li className="about">
            <a href="#about">About</a>
          </li>
          <li className="service">
            <a href="#services">Services</a>
          </li>
          <li className="project">
            <a href="#project">Projects</a>
          </li>
          <li className="contact">
            <span className="spans">
              <a href="#span" className="contact">
                Contact
              </a>
            </span>
          </li>
        </ul>

        <div
          className="mobile-hamburger"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <CloseIcon /> : <img src={hamburger} alt="hamburger" />}
        </div>
      </div>

      <div className="heroContent">
        <h1>We are creatives</h1>
        <img src={arrow} alt="arrow" className="arrow" />
      </div>
    </div>
  );
};

export default Navbar;
