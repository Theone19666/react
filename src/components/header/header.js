import React from "react";
import PropTypes from "prop-types";
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

Header.propTypes = {
  onAddItem: PropTypes.func,
};

Header.defaultProps = {
  onAddItem: () => {},
};

export default Header;
