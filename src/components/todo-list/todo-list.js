import React from "react";
import Task from "../task";
import NewTaskForm from "../new-task-form";
import "./todo-list.css";
function TodoList({ list }) {
  const elements = list.map((item) => {
    return (
      <li className={item.liClass} key={item.id}>
        <Task propObj={item} />
        {item.formVisible && <NewTaskForm />}
      </li>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
}

export default TodoList;
