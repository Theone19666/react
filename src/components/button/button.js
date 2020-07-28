import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

function Button({ className, text, onClick }) {
  return (
    <button className={className} onClick={onClick} type="button">
      {text}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  text: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
  text: '',
};

export default Button;
