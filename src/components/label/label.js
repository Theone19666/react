import React from "react";
import "./label.css";

function Label({
  descriptionText = "",
  createdText = "",
  onComplete = () => {},
}) {
  return (
    <label onClick={onComplete}>
      <span className="description">{descriptionText}</span>
      <span className="created">{createdText}</span>
    </label>
  );
}

export default Label;
