import React from "react";
import PropTypes from "prop-types";
import "./footer.css";
import Filters from "../filters";
import Button from "../button";
import TodoCount from "../todo-count";

const buttonClearCompletedProps = {
  className: "clear-completed",
  text: "Clear completed",
};
function Footer(props) {
  const { onDeleteCompleted } = props;
  return (
    <footer className="footer">
      <TodoCount />
      <Filters />
      <Button {...buttonClearCompletedProps} onClick={onDeleteCompleted} />
    </footer>
  );
}

Footer.propTypes = {
  onDeleteCompleted: PropTypes.func,
};

Footer.defaultProps = {
  onDeleteCompleted: () => {},
};

export default Footer;
