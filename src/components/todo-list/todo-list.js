import React, { Component } from "react";
import Task from "../task";
import NewTaskForm from "../new-task-form";
import "./todo-list.css";
class TodoList extends Component {
  elements = this.props.list.map((item) => {
    return (
      <Task
        key={item.id.toString()}
        {...item.label}
        onDelete={() => this.props.onDelete(item.id)}
      />
    );
  });
  render() {
    return <ul className="todo-list">{this.elements}</ul>;
  }
}

export default TodoList;
