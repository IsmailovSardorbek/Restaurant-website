import React, { useState } from "react";
import "./food-list.css";
/* import imgUrl1 from "../../images/card-img-1.png";
import imgUrl2 from "../../images/card-img-2.png";
import imgUrl3 from "../../images/card-img-3.png";
import imgUrl4 from "../../images/card-img-4.png";
import imgUrl5 from "../../images/card-img-5.png";
import imgUrl6 from "../../images/card-img-6.png";
import imgUrl7 from "../../images/card-img-7.png";
import imgUrl8 from "../../images/card-img-8.png";
import imgUrl9 from "../../images/card-img-9.png";
import imgUrl10 from "../../images/card-img-10.png";
import imgUrl11 from "../../images/card-img-11.png";
import imgUrl12 from "../../images/card-img-12.png";
import imgUrl13 from "../../images/card-img-13.png";
import imgUrl14 from "../../images/card-img-14.png";
import imgUrl15 from "../../images/card-img-15.png"; */
import menuItems from "../../data/items.json";

export default function FoodList({ filteredItems }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  const [imageSource, setImageSource] = useState(null);

  const [closeModal, setCloseModal] = useState(true);

  document.body.style.overflowY = closeModal ? "visible" : "hidden";

  return (
    <React.Fragment>
      <div className="food-cards-grid">
        {filteredItems.map((item, index) => (
          <div className="food-card" key={index}>
            <img src={item.imgUrl} className="food-card-img" />
            <div className="card-body">
              <div className="food-card-title">
                <h3>Vegie Muffen</h3>
                <div className="price">16$</div>
              </div>
              <button
                className="card-button view"
                onClick={() => {
                  setImageSource(item.imgUrl);
                  setCloseModal(false);
                }}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`image-modal`}
        style={{
          display: !closeModal ? "flex" : "none",
        }}
      >
        <div style={{ position: "relative", width: "300px", height: "300px" }}>
          <img src={imageSource} className="modal-image" />
          <button
            className="close"
            onClick={() => setCloseModal((open) => !open)}
          >
            {" "}
            &times;{" "}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
