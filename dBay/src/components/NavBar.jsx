import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
      <img src={logo} alt="Logo" className="logo" />
        <h1 className='Slogan'>We Have KILLER Prices!!🪓🩸</h1>
        <span className="span-line"></span>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">
            Signup
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">
            See Cart
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/user" className="nav-link">
            Welcome, Warlord
          </Link>
        </li>
        <li className="nav-item"></li>
      </ul>
    </nav>
  );
}

export default Navbar;
