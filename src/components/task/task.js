import React, { Component } from "react";
import "./task.css";
import Checkbox from "../checkbox";
import Label from "../label";
import Button from "../button";

export default class Task extends Component {
  render() {
    const { onDelete, onComplete, ...labelProps } = this.props;
    return (
      <div className="view">
        <Checkbox />
        <Label {...labelProps} onComplete={onComplete} />
        <Button className="icon icon-edit" />
        <Button className="icon icon-destroy" onClick={onDelete} />
      </div>
    );
  }
}
