import React, { useState } from "react";
import "./menu-grid.css";
import halalImg from "../../images/halal-img.png";
import { Link } from "react-router-dom";
import FoodList from "../FoodList/FoodList";
import menuArrow from "../../images/menu-arrow.png";
import MenuListModal from "../MenuListModal/MenuListModal";

export default function MenuGrid() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <MenuListModal showModal={showModal} setShowModal={setShowModal} />
      <div className="menu-grid">
        <div className="wrapper">
          <div className="menu-content-wrapper">
            <div className="m-left">
              {windowWidth < 600 ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    maxWidth: "400px",
                    margin: "auto",
                    marginBottom: "1.2rem",
                  }}
                >
                  <h4
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowModal((open) => !open)}
                  >
                    Menu{" "}
                    <img
                      src={menuArrow}
                      className={`menu-arrow  ${showModal ? "rotate" : ""}`}
                    />
                  </h4>
                  <div style={{ cursor: "pointer" }}>All</div>
                </div>
              ) : (
                <div className="menu-list-card">
                  <div className="menu-card-title">
                    <h2>Menu</h2>
                    <img src={halalImg} className={`card-title-img`} />
                  </div>
                  <ul className="menu-card-list">
                    <li className="list-item">
                      <Link to="/menu" className="list-item-link">
                        All
                      </Link>
                    </li>
                    <li className="list-item">
                      <Link to="/menu" className="list-item-link">
                        Pan cake
                      </Link>
                    </li>
                    <li className="list-item">
                      <Link to="/menu" className="list-item-link">
                        Kchachapuri
                      </Link>
                    </li>
                    <li className="list-item">
                      <Link to="/menu" className="list-item-link">
                        Burger
                      </Link>
                    </li>
                    <li className="list-item">
                      <Link to="/menu" className="list-item-link">
                        Hot-Dog
                      </Link>
                    </li>
                    <li className="list-item">
                      <Link to="/menu" className="list-item-link">
                        Free
                      </Link>
                    </li>
                    <li className="list-item">
                      <Link to="/menu" className="list-item-link">
                        Drink
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="m-right">
              <FoodList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
