import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from '../assets/logo.png';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState("");
  

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
        <h1 className='Slogan'>We Have KILLER Prices!!🪓🩸</h1>
        <span className="span-line"></span>
        <div className="links">
        <Link to="/Login">Log in</Link>
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
      </div>
      </div>
  );
};

export default Navbar;
