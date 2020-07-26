import React from "react";
import "./todo-count.css";

function TodoCount({ counter }) {
  return <span className="todo-count">{counter} items left</span>;
}

export default TodoCount;
