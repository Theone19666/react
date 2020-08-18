import React from "react";

const FiltersContext = React.createContext(() => {});

const FiltersListContext = React.createContext([]);

const TodoCountContext = React.createContext(0);

const NewTaskFormOnAddContext = React.createContext(() => {});

export {
  FiltersContext,
  FiltersListContext,
  TodoCountContext,
  NewTaskFormOnAddContext,
};
