import React, { Component } from "react";
import Task from "../task";
import NewTaskForm from "../new-task-form";
import "./todo-list.css";
class TodoList extends Component {
  elements = this.props.list.map((item) => {
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

  filteredElements = this.props.filterFunction
    ? this.elements.filter(this.props.filterFunction)
    : this.elements;
  /* state = {
    list: this.props.list,
  };
  elements = this.state.list.map((item) => {
    return (
      <Task
        key={item.id.toString()}
        {...item.label}
        onDelete={() => this.props.onDelete(item.id)}
      />
    );
  // }); */
  render() {
    return <ul className="todo-list">{this.filteredElements}</ul>;
  }
}

export default TodoList;
