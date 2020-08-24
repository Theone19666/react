import React from "react";

const FiltersContext = React.createContext(() => {});

const FiltersListContext = React.createContext([]);

const TodoCountContext = React.createContext(0);

const NewTaskFormOnAddContext = React.createContext(() => {});

const EditTaskFormOnAddContext = React.createContext(() => {});

const LabelContext = React.createContext(() => {});

export {
  FiltersContext,
  FiltersListContext,
  TodoCountContext,
  NewTaskFormOnAddContext,
  EditTaskFormOnAddContext,
  LabelContext,
};
