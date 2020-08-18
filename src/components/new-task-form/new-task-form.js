import React, { useState } from "react";
import PropTypes from "prop-types";
import TextBox from "../text-box";
import "./new-task-form.css";
function NewTaskForm(props) {
  const { onAddItem} = props;
  const [todoName, setTodoName] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const onSubmit = (e) => {
    onAddItem({ todoName, minutes, seconds });
    setTodoName('');
    setMinutes('');
    setSeconds('');
    e.preventDefault();
  };

  const onChangeInput = (e) => {
    const name = e.target.dataset.name;
    const value = e.target.value;

    if (name === 'todoName') {
      setTodoName(value)
    } else if (name === 'minutes') {
      setMinutes(value);
    } else  {
      setSeconds(value);
    }
  };

  return (
    <form className="new-todo-form" onSubmit={onSubmit}>
      <TextBox
        onChange={onChangeInput}
        value={todoName}
        placeholder="Task"
        autoFocus={true}
        className="new-todo"
        data-name="todoName"
        name="todoName"
      />
      <TextBox
        className="new-todo-form__timer"
        placeholder="Min"
        autoFocus=""
        onChange={onChangeInput}
        value={minutes}
        data-name="minutes"
        name="minutes"
      />
      <TextBox
        className="new-todo-form__timer"
        placeholder="Sec"
        autoFocus=""
        onChange={onChangeInput}
        value={seconds}
        data-name="seconds"
        name="seconds"
      />
    </form>
  );
}

NewTaskForm.propTypes = {
  onAddItem: PropTypes.func,
};

NewTaskForm.defaultProps = {
  onAddItem: () => {},
};

export default NewTaskForm;
