import React, { Component } from "react";
import Task from "../task";
import NewTaskForm from "../new-task-form";
import "./todo-list.css";
export default class TodoList extends Component {
  render() {
    const filteredTodos = this.props.filterFunction
      ? this.props.list.filter(this.props.filterFunction)
      : this.props.list;

    const elements = filteredTodos.map((item) => {
      return (
        <li
          className={item.completed ? "completed" : ""}
          key={item.id.toString()}
        >
          <Task
            onComplete={() => this.props.onComplete(item.id)}
            {...item.label}
            onDelete={() => this.props.onDelete(item.id)}
          />
        </li>
      );
    });
    return <ul className="todo-list">{elements}</ul>;
  }
}
