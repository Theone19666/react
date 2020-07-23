import React from "react";
import "./label.css";

function Label({ descriptionText = "", createdText = "" }) {
  return (
    <label>
      <span className="description">{descriptionText}</span>
      <span className="created">{createdText}</span>
    </label>
  );
}

export default Label;
