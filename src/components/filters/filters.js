import React from "react";
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

export default Filters;
