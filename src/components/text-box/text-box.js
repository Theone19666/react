import React from "react";
import "./text-box.css";

function TextBox(props = {}) {
  return <input {...props} type="text" />;
}

export default TextBox;
