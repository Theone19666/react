import React from "react";
import "./checkbox.css";
function Checkbox({ className = "toggle" }) {
  return <input className={className} type="checkbox"></input>;
}
export default Checkbox;
