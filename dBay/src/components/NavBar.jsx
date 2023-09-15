import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from '../assets/logo.png';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState("");
  

  return (
    <nav className="navbar">
      <ul className="nav-list">
      <img src={logo} alt="Logo" className="logo" />
        <h1 className='Slogan'>We Have KILLER Prices!!🪓🩸</h1>
        <span className="span-line"></span>
        <li className="nav-item">
          {isLoggedIn && <p>Welcome, {firstName}!</p>}
        </li>
        {!isLoggedIn && (
          <Link to="/LogIn" className="nav-link">
            Log in
          </Link>
        )}
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
        </li>
        <li className="nav-item"></li>
      </ul>
    </nav>
  );
}

export default Navbar;
