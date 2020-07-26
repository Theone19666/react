import React from "react";
import "./label.css";

function Label({
  descriptionText = "",
  createdText = "",
  onComplete = () => {},
}) {
  return (
    <label>
      <span className="description" onClick={onComplete}>
        {descriptionText}
      </span>
      <span className="created">{createdText}</span>
    </label>
  );
}

export default Label;
