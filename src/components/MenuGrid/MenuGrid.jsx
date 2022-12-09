import React, { useState } from "react";
import "./menu-grid.css";
import halalImg from "../../images/halal-img.png";
import { Link } from "react-router-dom";
import FoodList from "../FoodList/FoodList";
import menuArrow from "../../images/menu-arrow.png";
// import MenuListModal from "../MenuListModal/MenuListModal";
import categories from "../../data/categories.json";
import menuItems from "../../data/items.json";

export default function MenuGrid() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  const [showModal, setShowModal] = useState(false);

  const [filteredItems, setFilteredItems] = useState(menuItems);

  const handleFilter = (category) => {
    if (category === "All") setFilteredItems(menuItems);
    else {
      setFilteredItems(
        menuItems.filter(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        )
      );
    }
  };
  return (
    <>
      <div className="menu-grid">
        <div className="wrapper">
          <div className="menu-content-wrapper">
            <div className="m-left">
              {windowWidth < 600 ? (
                <>
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
                  <div
                    className="menu-list-card"
                    style={{
                      position: "absolute",
                      left: `${showModal ? "5%" : "-100%"}`,
                      paddingRight: "3rem",
                    }}
                  >
                    <div
                      className="menu-card-title"
                      style={{ display: windowWidth < 600 ? "none" : "flex" }}
                    >
                      <h2>Menu</h2>
                      <img src={halalImg} className={`card-title-img`} />
                    </div>
                    <ul className="menu-card-list">
                      {categories.map((category, index) => (
                        <li
                          className="list-item"
                          key={index}
                          onClick={() => {
                            handleFilter(category);
                            setShowModal(false);
                          }}
                        >
                          {category}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <div className="menu-list-card">
                  <div
                    className="menu-card-title"
                    style={{ display: windowWidth < 600 ? "none" : "flex" }}
                  >
                    <h2>Menu</h2>
                    <img src={halalImg} className={`card-title-img`} />
                  </div>
                  <ul className="menu-card-list">
                    {categories.map((category, index) => (
                      <li
                        className="list-item"
                        key={index}
                        onClick={() => handleFilter(category)}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="m-right">
              <FoodList filteredItems={filteredItems} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
