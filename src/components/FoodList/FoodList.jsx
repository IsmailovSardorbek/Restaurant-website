import React, { useState } from "react";
import "./food-list.css";

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
        {filteredItems.map((item, index) => {
          return index === 0 ? (
            <div className="food-card" key={index}>
              <img src={item.imgUrl} className="food-card-img" />
              <div className="card-body">
                <div className="food-card-title">
                  <h3>{item.title}</h3>
                  <div className="price">{item.price}</div>
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
          ) : (
            <div className="food-card" key={index}>
              <img src={item.imgUrl} className="food-card-img" />
              <div className="card-body">
                <div className="food-card-title">
                  <h3>{item.title}</h3>
                  <div className="price">{item.price}</div>
                </div>
                {windowWidth < 700 ? (
                  <button
                    className="card-button view"
                    onClick={() => {
                      setImageSource(item.imgUrl);
                      setCloseModal(false);
                    }}
                  >
                    View
                  </button>
                ) : (
                  <div className="card-buttons">
                    <button className="card-button">+</button>
                    <button className="card-button">Order now</button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
