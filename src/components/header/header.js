import React from "react";
import NewTaskForm from "../new-task-form";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm />
    </header>
  );
}

export default Header;
