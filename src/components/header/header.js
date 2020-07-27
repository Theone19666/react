import React, { Component } from "react";
import PropTypes from "prop-types";
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

Header.propTypes = {
  onAddItem: PropTypes.func,
};

Header.defaultProps = {
  onAddItem: () => {},
};

export default Header;
