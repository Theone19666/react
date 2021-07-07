import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import "./task.css";
import Checkbox from "../checkbox";
import Label from "../label";
import Button from "../button";
import EditTaskForm from "../edit-task-form";
import { EditTaskFormOnAddContext } from "../todo-context";

function Task(props) {
  const {
    onDelete,
    onComplete,
    created,
    timer,
    descriptionText,
    completed,
    id,
  } = props;

  const [showEdit, setShowEdit] = useState(false);

  const onEditTaskSubmit = useContext(EditTaskFormOnAddContext);

  const onEdit = () => {
    setShowEdit((prev) => {
      return !prev;
    });
  };

  const onSubmit = (value) => {
    onEditTaskSubmit(value, id);
    setShowEdit(false);
  };

  const getLiClassName = (completed) => {
    let result = "";
    if (completed) {
      result += "completed";
    }
    if (showEdit) {
      result += "editing";
    }
    return result;
  };

  return (
    <li className={getLiClassName(completed)}>
      <div className="view">
        <Checkbox onChange={onComplete} checked={completed} />
        <Label
          created={created}
          timer={timer}
          onComplete={onComplete}
          descriptionText={descriptionText}
          id={id}
        />
        <Button className="icon icon-edit" onClick={onEdit} />
        <Button className="icon icon-destroy" onClick={onDelete} />
      </div>
      <EditTaskForm value={descriptionText} onSubmit={onSubmit} />
    </li>
  );
}

Task.propTypes = {
  onDelete: PropTypes.func,
  onComplete: PropTypes.func,
  descriptionText: PropTypes.string,
  created: PropTypes.number,
  timer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Task.defaultProps = {
  onDelete: () => {},
  onComplete: () => {},
  descriptionText: "",
  created: 0,
  timer: 0,
};

export default Task;
