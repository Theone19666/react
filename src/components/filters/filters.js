import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./filters.css";
import TasksFilter from "../tasks-filter";
import { FiltersContext, FiltersListContext } from "../todo-context";

function Filters() {
  const onFilterClicked = useContext(FiltersContext);
  const filtersList = useContext(FiltersListContext);
  const elements = filtersList.map((item) => {
    return (
      <li key={item.id}>
        <TasksFilter
          {...item}
          onClick={() => onFilterClicked(item.filterFunction, item.id)}
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
