import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="logo-container">
          <img src={logo1} alt="Logo1" className="nav-logo" />
          <img src={logo2} alt="Logo2" className="nav-logo" />
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/updates">Tarot Updates</Link>
          <Link to="/PriceList">Price List</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
