import React from 'react';
import PropTypes from 'prop-types';
import './filters.css';
import TasksFilter from '../tasks-filter';

function Filters({ filtersList, onFilterClicked }) {
  const elements = filtersList.map((item) => {
    return (
      <li key={item.id}>
        <TasksFilter {...item} onClick={() => onFilterClicked(item.filterFunction, item.id)} />
      </li>
    );
  });
  return <ul className="filters">{elements}</ul>;
}

Filters.propTypes = {
  filtersList: PropTypes.arrayOf(PropTypes.object),
  onFilterClicked: PropTypes.func,
};

Filters.defaultProps = {
  onFilterClicked: () => {},
  filtersList: [],
};

export default Filters;
