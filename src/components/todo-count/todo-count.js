import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./todo-count.css";
import { TodoCountContext } from "../todo-context";

function TodoCount() {
  const counter = useContext(TodoCountContext);
  return <span className="todo-count">{counter} items left</span>;
}

TodoCount.propTypes = {
  counter: PropTypes.number,
};

TodoCount.defaultProps = {
  counter: 0,
};

export default TodoCount;
