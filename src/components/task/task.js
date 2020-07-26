import React, { Component } from "react";
import "./task.css";
import Checkbox from "../checkbox";
import Label from "../label";
import Button from "../button";

class Task extends Component {
  render() {
    const { onDelete, completed, onComplete, ...labelProps } = this.props;
    return (
      <li className={completed ? "completed" : ""}>
        <div className="view">
          <Checkbox />
          <Label {...labelProps} onComplete={onComplete} />
          <Button className="icon icon-edit" />
          <Button className="icon icon-destroy" onClick={onDelete} />
        </div>
      </li>
    );
  }
}

export default Task;
