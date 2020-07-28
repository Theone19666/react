import React, { Component } from "react";
import Task from "../task";
import NewTaskForm from "../new-task-form";
import "./todo-list.css";
class TodoList extends Component {
  state = {
    list: this.props.list,
  };
  render() {
    this.elements = this.props.list.map((item) => {
      console.log("this.props.list", this.props.list);
      return (
        <Task
          completed={item.completed}
          onComplete={() => this.props.onComplete(item.id)}
          key={item.id.toString()}
          {...item.label}
          onDelete={() => this.props.onDelete(item.id)}
        />
      );
    });
    return <ul className="todo-list">{this.elements}</ul>;
  }
}

export default TodoList;
