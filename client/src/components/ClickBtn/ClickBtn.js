import React from "react";
import { Link } from "react-router-dom";
import "./clickBtn-style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ClickBtn(props) {
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
          <a
            rel="noopener noreferrer"
            href="/userSignUp"
            className="btn waves-effect waves-light white-text"
          >
            Customer Signup
          </a>
        </div>
        <div className="home-buttons">
          <a
            rel="noopener noreferrer"
            href="/login"
            className="btn waves-effect waves-light white-text"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export function Button(props) {
  // return (
  //   <span
  //     onClick={props.onClick}
  //     className={`btn btn-${props.theme ? props.theme : "success"} ${
  //       styles.button
  //     } ${props.className}`}
  //     role="button"
  //   >
  //     {props.children}
  //   </span>
  // );
}

export default ClickBtn;
