import React, { Component } from "react";
import PropTypes from "prop-types";
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

Footer.propTypes = {
  notCompletedcounter: PropTypes.number,
  filtersList: PropTypes.arrayOf(PropTypes.object),
  onFilterClicked: PropTypes.func,
  onDeleteCompleted: PropTypes.func,
};

Footer.defaultProps = {
  notCompletedcounter: 0,
  onFilterClicked: () => {},
  onDeleteCompleted: () => {},
  filtersList: [],
};

export default Footer;
