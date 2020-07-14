import React from "react";
import { Link } from "react-router-dom";
import "./clickBtn-style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function HomeButtons() {
  return (
    <div>
      <div>
        <div className="home-buttons">
          <Link to="/businessSignUp">
            <div className="btn waves-effect waves-light white-text">
              Business Signup
            </div>
          </Link>
        </div>

        <div className="home-buttons">
          <Link to="/userSignUp">
            <div className="btn waves-effect waves-light white-text">
              Customer Signup
            </div>
          </Link>
        </div>

        <div className="home-buttons">
          <Link to="/login"
            className="btn waves-effect waves-light white-text">
            Login
          </Link>
        </div>

      </div>
    </div>
  );
}


export default HomeButtons;
