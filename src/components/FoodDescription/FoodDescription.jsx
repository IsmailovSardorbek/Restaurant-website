import React from "react";
import "./food-description.css";
import galleryImage1 from "../../images/g-img-1.png";
import galleryImage2 from "../../images/g-img-2.png";
import galleryImage3 from "../../images/g-img-3.png";
import galleryImage4 from "../../images/g-img-4.png";

export default function FoodDescription() {
  return (
    <React.Fragment>
      <div className="food-description">
        <div className="content-wrapper">
          <div className="food-container">
            <div className="f-left">
              <div className="f-left-text">
                <h1>Mushroom Philly Cheesesteak</h1>
                <p>
                  Chopped on the grill the beef steak slices. The best practices
                  from US, Philly we brought here to the center of the world -
                  Prague. Come and get. Come and get. Do not be late. Come and
                  get.
                </p>
              </div>
            </div>
            <div className="f-right">
              <div className="images-container">
                <div className="images-wrapper">
                  <img src={galleryImage1} className="gallery-img" />
                  <img src={galleryImage2} className="gallery-img" />
                  <img src={galleryImage3} className="gallery-img" />
                  <img src={galleryImage4} className="gallery-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
