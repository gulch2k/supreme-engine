import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

export const Navbar = ({setToken}) =>  {
  const username = localStorage.getItem('username');
  const userToken = localStorage.getItem('userToken');

  const logOutHandler = () => {
    setToken("");
    localStorage.clear();
  }
  return (
    <nav>
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="Slogan">Cry of Commerce; We Have KILLER Prices!!🪓🩸 Prices you would want to KILL FOR!🪓🩸</h1>
      {userToken && <h4 className="welcome-message">Welcome, {userToken}!</h4>}
      <span className="span-line"></span>
      <ul>
        <li>
          <Link to="/">
            Shop
          </Link>
        </li>
        {!userToken && (
          <>
            <li>
              <NavLink to ="/signup">Signup</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </>
        )}
        {userToken && (
          <li>
            <NavLink to="/Logout" onClick={()=>logOutHandler()}>Logout</NavLink>
          </li>
        )}
        {userToken && (
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
        )}
      </ul>
    </nav>
  );
}
