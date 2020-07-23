import React from "react";
import "./app.css";
import TodoList from "../todo-list";
import Header from "../header";
import Footer from "../footer";
function App() {
  const todoItems = [
    {
      id: "first",
      label: {
        descriptionText: "Completed task",
        createdText: "created 17 seconds ago",
      },
      buttons: {
        edit: {
          className: "icon icon-edit",
        },
        destroy: {
          className: "icon icon-destroy",
        },
      },
      liClass: "completed",
    },
    {
      id: "second",
      label: {
        descriptionText: "Editing task",
        createdText: "created 5 minutes ago",
      },
      buttons: {
        edit: {
          className: "icon icon-edit",
        },
        destroy: {
          className: "icon icon-destroy",
        },
      },
      formVisible: true,
      liClass: "editing",
    },
    {
      id: "third",
      label: {
        descriptionText: "Active task",
        createdText: "created 5 minutes ago",
      },
      buttons: {
        edit: {
          className: "icon icon-edit",
        },
        destroy: {
          className: "icon icon-destroy",
        },
      },
    },
  ];
  const headerProps = {
    inputObj: {
      className: "new-todo",
      placeholder: "What needs to be done?",
      autoFocus: true,
    },
  };
  return (
    <section className="todoapp">
      <Header {...headerProps} />
      <section className="main">
        <TodoList list={todoItems} />
        <Footer />
      </section>
    </section>
  );
}

export default App;
