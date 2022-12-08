import React from "react";
import "./hero.css";
import heroImg1 from "../../images/hero-img-1.png";
import heroImg2 from "../../images/hero-img-2.png";
import heroImg3 from "../../images/hero-img-3.png";
import heroImg4 from "../../images/hero-img-4.png";

export default function Hero() {
  return (
    <React.Fragment>
      <div className="hero">
        <div className="hero-content">
          <h1>MATOKA</h1>
          <p>georgian bakery</p>
          <div className="images">
            <img src={heroImg1} className="hero-img" />
            <img src={heroImg2} className="hero-img" />
            <img src={heroImg3} className="hero-img" />
            <img src={heroImg4} className="hero-img" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
