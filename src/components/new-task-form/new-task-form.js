import React, { Component } from "react";
import PropTypes from "prop-types";
import TextBox from "../text-box";
import "./new-task-form.css";
const inputProps = {
  className: "new-todo",
  placeholder: "What needs to be done?",
  autoFocus: true,
};
class NewTaskForm extends Component {
  state = {
    inputValue: "",
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.inputValue);
    //this.state.inputValue = "";
    this.setState({
      inputValue: "",
    });
  };

  onChangeInput = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  render() {
    return (
      <form method="POST" onSubmit={this.onSubmit}>
        <TextBox
          {...inputProps}
          onChange={this.onChangeInput}
          value={this.state.inputValue}
        />
      </form>
    );
  }
}

NewTaskForm.propTypes = {
  onAddItem: PropTypes.func,
};

NewTaskForm.defaultProps = {
  onAddItem: () => {},
};

export default NewTaskForm;
