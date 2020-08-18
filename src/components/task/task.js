import React from "react";
import PropTypes from "prop-types";
import "./task.css";
import Checkbox from "../checkbox";
import Label from "../label";
import Button from "../button";

function Task(props) {
  const { onDelete, onComplete, ...labelProps } = props;
  return (
    <div className="view">
      <Checkbox onClick={onComplete} />
      <Label {...labelProps} onComplete={onComplete} />
      <Button className="icon icon-edit" />
      <Button className="icon icon-destroy" onClick={onDelete} />
    </div>
  );
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

export default Task;