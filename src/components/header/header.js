import React from 'react';
import PropTypes from 'prop-types';
import NewTaskForm from '../new-task-form';
import './header.css';

function Header(props) {
  const { onAddItem } = props;
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm onAddItem={onAddItem} />
    </header>
  );
}

Header.propTypes = {
  onAddItem: PropTypes.func,
};

Header.defaultProps = {
  onAddItem: () => {},
};

export default Header;
