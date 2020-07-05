import React from "react";
import styles from "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ClickBtn(props) {
  return (
    <span className={ styles["click-btn"] } {...props} role="button" tabIndex="0">
      Business SignUp
    </span>
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
