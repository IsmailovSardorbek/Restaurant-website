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
                <h1>What is Khachapuri ?</h1>
                <p>
                  Khachapuri is a traditional Georgian dish of cheese-filled
                  bread. The bread is leavened and allowed to rise, molded into
                  various shapes, and then filled in the center with a mixture
                  of cheese (fresh or aged, most commonly, specialized
                  Khachapuri cheese), eggs, and other ingredients. The bread
                  crust is traditionally torn off and dipped into the cheese.
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
