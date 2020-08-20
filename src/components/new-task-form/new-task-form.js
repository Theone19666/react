import React, { useState, useContext } from "react";
import TextBox from "../text-box";
import "./new-task-form.css";
import { NewTaskFormOnAddContext } from "../todo-context";

function NewTaskForm() {
  const onAddItem = useContext(NewTaskFormOnAddContext);
  const [todoName, setTodoName] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    var key = e.keyCode || e.which;
    if (key !== 13) {
      // Клавиша Enter
      return;
    }

    onAddItem({ todoName, minutes, seconds });
    setTodoName("");
    setMinutes("");
    setSeconds("");
  };

  const onChangeInput = (e) => {
    const name = e.target.dataset.name;
    const value = e.target.value;

    if (name === "todoName") {
      setTodoName(value);
    } else if (name === "minutes") {
      setMinutes(value);
    } else {
      setSeconds(value);
    }
  };

  return (
    <form className="new-todo-form" onKeyUp={onSubmit}>
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

export default NewTaskForm;
