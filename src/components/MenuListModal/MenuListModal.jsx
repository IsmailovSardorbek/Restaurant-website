import React from "react";
import "./menu-list-modal.css";

export default function MenuListModal({ showModal, setShowModal }) {
  if (showModal) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "visible";
  }

  return (
    <ul className={`modal-menu-list ${showModal ? "list-show" : ""}`}>
      <li
        className="menu-list_item"
        onClick={() => setShowModal(false)}
        style={{ fontWeight: "bold" }}
      >
        All
      </li>
      <li className="menu-list_item" onClick={() => setShowModal(false)}>
        Pan cake
      </li>
      <li className="menu-list_item" onClick={() => setShowModal(false)}>
        Kchachapuri
      </li>
      <li className="menu-list_item" onClick={() => setShowModal(false)}>
        Burger
      </li>
      <li className="menu-list_item" onClick={() => setShowModal(false)}>
        Hot-dog
      </li>
      <li className="menu-list_item" onClick={() => setShowModal(false)}>
        Free
      </li>
      <li className="menu-list_item" onClick={() => setShowModal(false)}>
        Drink
      </li>
    </ul>
  );
}
