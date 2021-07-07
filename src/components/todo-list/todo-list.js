import PropTypes from "prop-types";
import React from "react";
import Task from "../task";
import "./todo-list.css";
function TodoList(props) {
  const { filterFunction, list, onComplete, onDelete } = props;

  const filteredTodos = filterFunction ? list?.filter(filterFunction) : list;

  const elements = filteredTodos.map((item) => {
    return (
      <Task
        id={item.id.toString()}
        key={item.id.toString()}
        onComplete={() => onComplete(item.id)}
        {...item.label}
        onDelete={() => onDelete(item.id)}
        completed={item.completed}
      />
    );
  });
  return <ul className="todo-list">{elements}</ul>;
}

TodoList.propTypes = {
  filterFunction: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.object),
  onComplete: PropTypes.func,
  onDelete: PropTypes.func,
};

TodoList.defaultProps = {
  //filterFunction: () => {},
  onComplete: () => {},
  onDelete: () => {},
  list: [],
};

export default TodoList;
