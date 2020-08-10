import React from "react";
import PropTypes from "prop-types";
import "./button.css";

function Button({ className, text, onClick, disabled }) {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onCompleonClickte: () => {},
  className: "",
  text: "",
  disabled: false,
};

export default Button;
