import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css"; // optional for styling

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 className="logo">Frontend Template Header</h1>
      <nav className="nav">
        <button className="nav-btn" onClick={() => navigate("/services")}>
          Services
        </button>
        <button className="nav-btn" onClick={() => navigate("/products")}>
          Products
        </button>
        <button className="nav-btn" onClick={() => navigate("/season")}>
          Seasonal
        </button>
        <button className="nav-btn" onClick={() => navigate("/livestock")}>
          Livestock
        </button>
        <button className="nav-btn" onClick={() => navigate("/weather")}>
          Weather
        </button>
      </nav>
    </header>
  );
};

export default Header;
