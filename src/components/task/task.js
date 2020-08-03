import React, { Component } from "react";
import PropTypes from "prop-types";
import "./task.css";
import Checkbox from "../checkbox";
import Label from "../label";
import Button from "../button";

export default class Task extends Component {
  render() {
    const { onDelete, onComplete, ...labelProps } = this.props;
    return (
      <div className="view">
        <Checkbox onClick={onComplete} />
        <Label {...labelProps} onComplete={onComplete} />
        <Button className="icon icon-edit" />
        <Button className="icon icon-destroy" onClick={onDelete} />
      </div>
    );
  }
}

Task.propTypes = {
  onDelete: PropTypes.func,
  onComplete: PropTypes.func,
  labelProps: PropTypes.object,
};

Task.defaultProps = {
  onDelete: () => {},
  onComplete: () => {},
  labelProps: {},
};
