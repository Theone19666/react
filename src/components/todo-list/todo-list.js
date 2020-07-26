import React, { Component } from "react";
import Task from "../task";
import NewTaskForm from "../new-task-form";
import "./todo-list.css";
class TodoList extends Component {
  constructor(props) {
    super(props);
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
  }
  state = {
    list: this.props.list,
  };
  /*elements = this.state.list.map((item) => {
    return (
      <Task
        key={item.id.toString()}
        {...item.label}
        onDelete={() => this.props.onDelete(item.id)}
      />
    );
  // }); */
  render() {
    console.log("this.elements", this.elements);
    return <ul className="todo-list">{this.elements}</ul>;
  }
}

export default TodoList;
