import React, { Component } from "react";
import "./app.css";
import TodoList from "../todo-list";
import Header from "../header";
import Footer from "../footer";
const headerProps = {
  inputObj: {
    className: "new-todo",
    placeholder: "What needs to be done?",
    autoFocus: true,
  },
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        {
          id: "1",
          label: {
            descriptionText: "Completed task",
            createdText: "created 17 seconds ago",
          },
          // liClass: "completed",
        },
        {
          id: "2",
          label: {
            descriptionText: "Editing task",
            createdText: "created 5 minutes ago",
          },
          // liClass: "completed",
          // formVisible: true,
          // liClass: "editing",
        },
        {
          id: "3",
          label: {
            descriptionText: "Active task",
            createdText: "created 5 minutes ago",
          },
        },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoItems }) => {
      console.log("id", id);
      const index = todoItems.findIndex((item) => item.id === id);
      console.log("index", index);
      if (index > -1) {
        return {
          todoItems: [
            ...todoItems.slice(0, index),
            ...todoItems.slice(index + 1),
          ],
        };
      }
      return this.state;
    });
  };

  render() {
    return (
      <section className="todoapp">
        <Header {...headerProps} />
        <section className="main">
          <TodoList list={this.state.todoItems} onDelete={this.deleteItem} />
          <Footer />
        </section>
      </section>
    );
  }
}

export default App;
