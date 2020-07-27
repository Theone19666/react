import React from "react";
import PropTypes from "prop-types";
import "./todo-count.css";

function TodoCount({ counter }) {
  return <span className="todo-count">{counter} items left</span>;
}

TodoCount.propTypes = {
  counter: PropTypes.number,
};

TodoCount.defaultProps = {
  counter: 0,
};

export default TodoCount;
