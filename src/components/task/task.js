import React from "react";
import "./task.css";
import Checkbox from "../checkbox";
import Label from "../label";
import Button from "../button";

function Task({ propObj = {} }) {
  return (
    <div className="view">
      <Checkbox />
      <Label {...propObj.label} />
      <Button {...propObj.buttons.edit} />
      <Button {...propObj.buttons.destroy} />
    </div>
  );
}

export default Task;
