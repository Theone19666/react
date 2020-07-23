import React from "react";
import "./filters.css";
import TasksFilter from "../tasks-filter";

function Filters() {
  const filtersList = [
    {
      id: "first",
      text: "All",
      className: "selected",
    },
    {
      id: "second",
      text: "Active",
    },
    {
      id: "third",
      text: "Completed",
    },
  ];
  const elements = filtersList.map((item) => {
    return (
      <li key={item.id}>
        <TasksFilter {...item} />
      </li>
    );
  });
  return <ul className="filters">{elements}</ul>;
}

export default Filters;
