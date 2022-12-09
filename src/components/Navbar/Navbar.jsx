import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../../images/logo.png";
import logo2 from "../../images/MATOKA.png";
import "./navbar.css";

export default function Navbar(props) {
  const [isOpened, setIsOpened] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [scrollHeight, setScrollHeight] = useState(window.scrollY);

  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  window.addEventListener("scroll", () => {
    setScrollHeight(window.scrollY);
  });

  function toggleMenu() {
    setIsOpened((isOpen) => !isOpen);
  }

  function hideMenu() {
    setIsOpened(false);
  }

  return (
    <div className={`navbar ${scrollHeight > 0 ? "scroll-header" : ""}`}>
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-logo">
            <Link to="/" onClick={hideMenu} className="home-link">
              <img
                src={windowWidth <= 700 || scrollHeight > 0 ? logo2 : logo1}
                className="logo"
              />
            </Link>
          </div>
          <div className={`menu ${isOpened ? "show" : ""}`}>
            <ul className="menu-list">
              <li>
                <Link to="/menu" className="nav-link" onClick={hideMenu}>
                  Menu
                </Link>
              </li>
              <li>
                <Link className="nav-link" onClick={hideMenu} to="/menu">
                  Cuisine
                </Link>
              </li>
              <li>
                <a className="nav-link" onClick={hideMenu} href="#reviews">
                  Reviews
                </a>
              </li>
              <li>
                <a className="nav-link" onClick={hideMenu} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <button className="contact" onClick={hideMenu}>
              <a href="tel:+420606600161">
                <i className="fa-solid fa-phone"></i>
                &nbsp; Get in touch
              </a>
            </button>
            <div
              className="mobile-bg"
              style={{ display: windowWidth < 700 ? "block" : "none" }}
            ></div>
          </div>
          <button className="menu-toggler" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
}
