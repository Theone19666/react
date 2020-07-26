import React, { Component } from "react";
import "./footer.css";
import Filters from "../filters";
import Button from "../button";
import TodoCount from "../todo-count";
const buttonClearCompletedProps = {
  className: "clear-completed",
  text: "Clear completed",
};
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <TodoCount counter={this.props.notCompletedcounter} />
        <Filters
          onFilterClicked={this.props.onFilterClicked}
          filtersList={this.props.filtersList}
        />
        <Button
          {...buttonClearCompletedProps}
          onClick={this.props.onDeleteCompleted}
        />
      </footer>
    );
  }
}

export default Footer;
