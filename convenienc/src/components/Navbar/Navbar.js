import React from "react";
import { Link } from "react-router-dom";
import "./navbar-style.css";
import Logo from "./logo.PNG";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <img src={Logo} alt="logo" />
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to="/ourTeam">OurTeam</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
