import React, { useState } from "react";
import "./food-list.css";
import imgUrl1 from "../../images/card-img-1.png";
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
import imgUrl15 from "../../images/card-img-15.png";
// import FoodListItems from "../../data/data.json";

export default function FoodList() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <React.Fragment>
      <div className="food-cards-grid">
        <div className="food-card">
          <img src={imgUrl1} className="food-card-img" />
          <div className="card-body">
            <div className="food-card-title">
              <h3>Vegie Muffen</h3>
              <div className="price">16$</div>
            </div>
            <button className="card-button view">View</button>
          </div>
        </div>

        <div className="food-card">
          <img src={imgUrl2} className="food-card-img" />
          <div className="card-body">
            <div className="food-card-title">
              <h3>Vegie Muffen</h3>
              <div className="price">16$</div>
            </div>
            {windowWidth < 700 ? (
              <button className="card-button view">View</button>
            ) : (
              <div className="card-buttons">
                <button className="card-button">+</button>
                <button className="card-button">Order now</button>
              </div>
            )}
          </div>
        </div>
        <div className="food-card">
          <img src={imgUrl3} className="food-card-img" />
          <div className="card-body">
            <div className="food-card-title">
              <h3>Vegie Muffen</h3>
              <div className="price">16$</div>
            </div>
            {windowWidth < 700 ? (
              <button className="card-button view">View</button>
            ) : (
              <div className="card-buttons">
                <button className="card-button">+</button>
                <button className="card-button">Order now</button>
              </div>
            )}
          </div>
        </div>
        <div className="food-card">
          <img src={imgUrl4} className="food-card-img" />
          <div className="card-body">
            <div className="food-card-title">
              <h3>Vegie Muffen</h3>
              <div className="price">16$</div>
            </div>
            {windowWidth < 700 ? (
              <button className="card-button view">View</button>
            ) : (
              <div className="card-buttons">
                <button className="card-button">+</button>
                <button className="card-button">Order now</button>
              </div>
            )}
          </div>
        </div>
        <div className="food-card">
          <img src={imgUrl5} className="food-card-img" />
          <div className="card-body">
            <div className="food-card-title">
              <h3>Vegie Muffen</h3>
              <div className="price">16$</div>
            </div>
            {windowWidth < 700 ? (
              <button className="card-button view">View</button>
            ) : (
              <div className="card-buttons">
                <button className="card-button">+</button>
                <button className="card-button">Order now</button>
              </div>
            )}
          </div>
        </div>
        <div className="food-card">
          <img src={imgUrl6} className="food-card-img" />
          <div className="card-body">
            <div className="food-card-title">
              <h3>Vegie Muffen</h3>
              <div className="price">16$</div>
            </div>
            {windowWidth < 700 ? (
              <button className="card-button view">View</button>
            ) : (
              <div className="card-buttons">
                <button className="card-button">+</button>
                <button className="card-button">Order now</button>
              </div>
            )}
          </div>
        </div>
        <div className="food-card">
          <img src={imgUrl7} className="food-card-img" />
          <div className="card-body">
            <div className="food-card-title">
              <h3>Vegie Muffen</h3>
              <div className="price">16$</div>
            </div>
            {windowWidth < 700 ? (
              <button className="card-button view">View</button>
            ) : (
              <div className="card-buttons">
                <button className="card-button">+</button>
                <button className="card-button">Order now</button>
              </div>
            )}
          </div>
        </div>
        <div className="food-card">
          <img src={imgUrl8} className="food-card-img" />
          <div className="card-body">
            <div className="food-card-title">
              <h3>Vegie Muffen</h3>
              <div className="price">16$</div>
            </div>
            {windowWidth < 700 ? (
              <button className="card-button view">View</button>
            ) : (
              <div className="card-buttons">
                <button className="card-button">+</button>
                <button className="card-button">Order now</button>
              </div>
            )}
          </div>
        </div>
        <div className="food-card">
          <img src={imgUrl9} className="food-card-img" />
          <div className="card-body">
            <div className="food-card-title">
              <h3>Vegie Muffen</h3>
              <div className="price">16$</div>
            </div>
            {windowWidth < 700 ? (
              <button className="card-button view">View</button>
            ) : (
              <div className="card-buttons">
                <button className="card-button">+</button>
                <button className="card-button">Order now</button>
              </div>
            )}
          </div>
        </div>
        <div className="food-card">
          <img src={imgUrl10} className="food-card-img" />
          <div className="card-body">
            <div className="food-card-title">
              <h3>Vegie Muffen</h3>
              <div className="price">16$</div>
            </div>
            {windowWidth < 700 ? (
              <button className="card-button view">View</button>
            ) : (
              <div className="card-buttons">
                <button className="card-button">+</button>
                <button className="card-button">Order now</button>
              </div>
            )}
          </div>
        </div>
        <div className="food-card">
          <img src={imgUrl11} className="food-card-img" />
          <div className="card-body">
            <div className="food-card-title">
              <h3>Vegie Muffen</h3>
              <div className="price">16$</div>
            </div>
            {windowWidth < 700 ? (
              <button className="card-button view">View</button>
            ) : (
              <div className="card-buttons">
                <button className="card-button">+</button>
                <button className="card-button">Order now</button>
              </div>
            )}
          </div>
        </div>
        <div className="food-card">
          <img src={imgUrl12} className="food-card-img" />
          <div className="card-body">
            <div className="food-card-title">
              <h3>Vegie Muffen</h3>
              <div className="price">16$</div>
            </div>
            {windowWidth < 700 ? (
              <button className="card-button view">View</button>
            ) : (
              <div className="card-buttons">
                <button className="card-button">+</button>
                <button className="card-button">Order now</button>
              </div>
            )}
          </div>
        </div>
        <div className="food-card">
          <img src={imgUrl13} className="food-card-img" />
          <div className="card-body">
            <div className="food-card-title">
              <h3>Vegie Muffen</h3>
              <div className="price">16$</div>
            </div>
            {windowWidth < 700 ? (
              <button className="card-button view">View</button>
            ) : (
              <div className="card-buttons">
                <button className="card-button">+</button>
                <button className="card-button">Order now</button>
              </div>
            )}
          </div>
        </div>
        <div className="food-card">
          <img src={imgUrl14} className="food-card-img" />
          <div className="card-body">
            <div className="food-card-title">
              <h3>Vegie Muffen</h3>
              <div className="price">16$</div>
            </div>
            {windowWidth < 700 ? (
              <button className="card-button view">View</button>
            ) : (
              <div className="card-buttons">
                <button className="card-button">+</button>
                <button className="card-button">Order now</button>
              </div>
            )}
          </div>
        </div>
        <div className="food-card">
          <img src={imgUrl15} className="food-card-img" />
          <div className="card-body">
            <div className="food-card-title">
              <h3>Vegie Muffen</h3>
              <div className="price">16$</div>
            </div>
            {windowWidth < 700 ? (
              <button className="card-button view">View</button>
            ) : (
              <div className="card-buttons">
                <button className="card-button">+</button>
                <button className="card-button">Order now</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
