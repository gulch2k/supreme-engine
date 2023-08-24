import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from '../assets/logo.png'; // Replace this path with your logo image file path

function Navbar() {
  // State to keep track of logged in user
  const isLoggedIn = false; // Set to true if user is logged in
  const username = "John"; // Replace with actual username if available
  return (
    <nav className="navbar">
      <ul className="nav-list">
      <img src={logo} alt="Logo" className="logo" />
        <h1 className='Slogan'>We Have KILLER Prices!!🪓🩸</h1>
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
            Welcome
          </Link>
        </li>
        <li className="nav-item"></li>
      </ul>
    </nav>
  );
}

export default Navbar;
