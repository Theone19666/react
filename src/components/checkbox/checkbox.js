import React from "react";
import PropTypes from "prop-types";
import "./checkbox.css";
function Checkbox(props) {
  return <input {...props} type="checkbox"></input>;
}

Checkbox.propTypes = {
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  className: "toggle",
};

export default Checkbox;
