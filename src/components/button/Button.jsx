import React from "react";
import "./Button.css";

function Button({ type = "button", className, onClick, children }) {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
