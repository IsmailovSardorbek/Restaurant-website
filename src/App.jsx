import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import MenuListModal from "./components/MenuListModal/MenuListModal";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  );
}

export default App;
