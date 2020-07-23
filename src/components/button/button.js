import React from "react";
import "./button.css";

function Button({ className = "", text = "" }) {
  return <button className={className}>{text}</button>;
}

export default Button;
