import React, { useState, useEffect } from "react";
import TextBox from "../text-box";

function EditTaskForm(props) {
  const { value, onSubmit } = props;

  const [todoName, setTodoName] = useState("");

  const onChangeInput = (e) => {
    const value = e.target.value;
    setTodoName(value);
  };

  const wrapperdOnSubmit = (e) => {
    e.preventDefault();
    onSubmit(todoName);
  };

  useEffect(() => {
    setTodoName(value);
  }, [value]);

  return (
    <form onSubmit={wrapperdOnSubmit}>
      <TextBox
        onChange={onChangeInput}
        value={todoName}
        placeholder="Write new name"
        autoFocus={true}
        className="edit"
      />
    </form>
  );
}

export default EditTaskForm;
