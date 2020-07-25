import React, { Component } from "react";
import "./task.css";
import Checkbox from "../checkbox";
import Label from "../label";
import Button from "../button";

class Task extends Component {
  state = {
    done: false,
  };

  onComplete = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      };
    });
  };

  render() {
    return (
      <li className={this.state.done ? "completed" : ""}>
        <div className="view">
          <Checkbox />
          <Label {...this.props} onComplete={this.onComplete} />
          <Button className="icon icon-edit" />
          <Button className="icon icon-destroy" onClick={this.props.onDelete} />
        </div>
      </li>
    );
  }
}

export default Task;
