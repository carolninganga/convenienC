import React from "react";
import styles from "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ClickBtn(props) {
  return (
    <div>
    <a target='_blank' rel="noopener noreferrer" href="/businessSignUp" className="btn waves-effect waves-light white-text">Business Signup</a>
    <a target='_blank' rel="noopener noreferrer" href="/userSignUp" className="btn waves-effect waves-light white-text">Customer Signup</a>
    <a target='_blank' rel="noopener noreferrer" href="/login" className="btn waves-effect waves-light white-text">Login</a>

  </div>

  );
}

export function Button(props) {
  return (
    <span onClick={props.onClick} className={`btn btn-${ props.theme ? props.theme : "success" } ${ styles.button } ${props.className}` }  role="button">
      {props.children}
    </span>
  );
}

export default ClickBtn;
