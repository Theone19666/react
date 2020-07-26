import React, { Component } from "react";
import NewTaskForm from "../new-task-form";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onAddItem={this.props.onAddItem} />
      </header>
    );
  }
}

export default Header;
