import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

export const Navbar = ({setToken}) =>  {

  const logOutHandler = () => {
    setToken("");
    localStorage.clear();
  }
  return (
    <nav>
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="Slogan">We Have KILLER Prices!!🪓🩸</h1>
      <span className="span-line"></span>
      <ul>
        <li>
          <Link to="/">
            Shop
          </Link>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/Logout" onClick={()=>logOutHandler()}>Logout</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
}
