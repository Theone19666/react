/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import PropTypes from 'prop-types';
import './label.css';
import { formatDistanceToNow } from 'date-fns';

function Label({ descriptionText, onComplete, created }) {
  const createdTime = formatDistanceToNow(new Date(created), {
    addSuffix: true,
    includeSeconds: true,
  });
  return (
    <label>
      <span className="description" onClick={onComplete} role="link" tabIndex={0} onKeyDown={this.handleKeyDown}>
        {descriptionText}
      </span>
      <span className="created">{createdTime}</span>
    </label>
  );
}

Label.propTypes = {
  onComplete: PropTypes.func,
  descriptionText: PropTypes.string,
  created: PropTypes.number,
};

Label.defaultProps = {
  onComplete: () => {},
  descriptionText: '',
  created: 0,
};

export default Label;
