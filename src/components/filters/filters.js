import React from "react";
import PropTypes from "prop-types";
import "./filters.css";
import TasksFilter from "../tasks-filter";

function Filters(props) {
  const elements = props.filtersList.map((item) => {
    return (
      <li key={item.id}>
        <TasksFilter
          {...item}
          onClick={() => props.onFilterClicked(item.filterFunction, item.id)}
        />
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
