import React from "react";
import { Link } from "react-router-dom";
import "./navbar-style.css";
import Logo from "./logo.PNG";

function Navbar() {
<<<<<<< HEAD
    return (
        <nav>
            <div className="container">
            <img src="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen_Shot_2020-06-29_at_4-removebg-preview.png?v=1593461018232" width="60" alt="logo" />
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                    <li><Link to="/ourTeam">OurTeam</Link></li>
                
                </ul>
            </div>
        </nav>

    )
=======
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
>>>>>>> a065f2a94bb9f05215c0dd5357dbe4b9bccc82f6
}

export default Navbar;
