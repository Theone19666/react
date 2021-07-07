import React from "react";
import PropTypes from "prop-types";
import "./checkbox.css";
function Checkbox({ onChange, className, checked }) {
  return (
    <input
      onChange={onChange}
      className={className}
      type="checkbox"
      checked={checked}
    ></input>
  );
}

Checkbox.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

Checkbox.defaultProps = {
  className: "toggle",
  onChange: () => {},
  checked: false,
};

export default Checkbox;
