import React, { Component } from "react";
import PropTypes from "prop-types";
import TextBox from "../text-box";
import "./new-task-form.css";
class NewTaskForm extends Component {
  state = {
    todoName: "",
    minutes: "",
    seconds: "",
  };
  onSubmit = (e) => {
    console.log("e", e);
    const { todoName, minutes, seconds } = this.setState;
    this.props.onAddItem({ todoName, minutes, seconds });
    this.setState({
      todoName: "",
      minutes: "",
      seconds: "",
    });
    e.preventDefault();
  };

  onChangeInput = (e) => {
    const name = e.target.dataset.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  render() {
    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <TextBox
          onChange={this.onChangeInput}
          value={this.state.todoName}
          placeholder="Task"
          autoFocus={true}
          className="new-todo"
          data-name="todoName"
          name="todoName"
        />
        <TextBox
          className="new-todo-form__timer"
          placeholder="Min"
          autoFocus=""
          onChange={this.onChangeInput}
          value={this.state.minutes}
          data-name="minutes"
          name="minutes"
        />
        <TextBox
          className="new-todo-form__timer"
          placeholder="Sec"
          autoFocus=""
          onChange={this.onChangeInput}
          value={this.state.seconds}
          data-name="seconds"
          name="seconds"
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
