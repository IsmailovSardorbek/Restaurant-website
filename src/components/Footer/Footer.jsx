import React from "react";
import "./footer.css";
import logo from "../../images/MATOKA.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <React.Fragment>
      <div className="footer" id="footer">
        <div className="footer-wrapper">
          <div className="footer-content">
            <div className="footer-logo">
              <a href="#">
                <img src={logo} />
              </a>
            </div>
            <ul className="footer-menu">
              <li>
                <Link to="/menu" className="footer-link">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/menu" className="footer-link">
                  Cuisine
                </Link>
              </li>
              <li>
                <a href="#reviews" className="footer-link">
                  Reviews
                </a>
              </li>
              <li>
                <a href="tel:+420606600161" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
            <div className="contact-number">
              <a href="tel:+420606600161">+420 606 600 161</a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
