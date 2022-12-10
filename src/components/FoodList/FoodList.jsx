import React, { useState } from "react";
import "./food-list.css";
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
        {filteredItems.map((item, index) => {
          if (index === 0) {
            return (
              <div className="food-card" key={index}>
                <img src={item.imgUrl} className="food-card-img" />
                <div className="card-body">
                  <div className="food-card-title">
                    <h3>{item.title}</h3>
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
            );
          } else {
            return (
              <div className="food-card">
                <img src={item.imgUrl} className="food-card-img" />
                <div className="card-body">
                  <div className="food-card-title">
                    <h3>Vegie Muffen</h3>
                    <div className="price">16$</div>
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
          }
        })}

        <div
          className={`image-modal`}
          style={{
            display: !closeModal ? "flex" : "none",
          }}
        >
          <div
            style={{ position: "relative", width: "300px", height: "300px" }}
          >
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
      </div>
    </React.Fragment>
  );
}
