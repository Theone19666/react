import React, { Component } from "react";
import "./app.css";
import TodoList from "../todo-list";
import Header from "../header";
import Footer from "../footer";

class App extends Component {
  state = {
    todoItems: [
      {
        id: "1",
        label: {
          descriptionText: "Completed task",
          createdText: "created 17 seconds ago",
        },
        show: true,
        completed: false,
      },
      {
        id: "2",
        label: {
          descriptionText: "Editing task",
          createdText: "created 5 minutes ago",
        },
        show: true,
        completed: false,
      },
      {
        id: "3",
        label: {
          descriptionText: "Active task",
          createdText: "created 5 minutes ago",
        },
        show: true,
        completed: false,
      },
    ],
    filtersList: [
      {
        id: "1",
        text: "All",
        className: "selected",
        onClick: this.onFilterAll,
      },
      {
        id: "2",
        text: "Active",
        onClick: this.onFilterNotCompleted,
        filterFunction: (item) => {
          console.log("!item.completed", !item.completed);
          return !item.completed;
        },
      },
      {
        id: "3",
        text: "Completed",
        onClick: this.onFilterCompleted,
        filterFunction: (item) => {
          console.log("item.completed", item.completed);
          return item.completed;
        },
      },
    ],
    filterFunction: null,
  };

  addItem = (text = "") => {
    this.setState((state) => {
      const todoItems = state.todoItems.slice();
      todoItems.push({
        id: String(state.todoItems.length + 1),
        label: {
          descriptionText: text,
          createdText: "created 5 minutes ago",
          completed: false,
        },
      });
      return {
        todoItems,
      };
    });
  };

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

  onComplete = (id) => {
    this.setState((state) => {
      const elem = { ...state.todoItems.find((item) => item.id === id) };
      const elemIndex = state.todoItems.findIndex((item) => item.id === id);
      elem.completed = !elem.completed;
      if (elem) {
        return {
          todoItems: [
            ...state.todoItems.slice(0, elemIndex),
            elem,
            ...state.todoItems.slice(elemIndex + 1),
          ],
        };
      }
    });
  };

  onFilterClicked = (filterFunction) => {
    console.log("item", filterFunction);
    this.setState({
      filterFunction: filterFunction,
    });
  };

  onFilterAll = (list) => {
    return list.slice();
  };

  onFilterCompleted = (list) => {
    return list.filter((item) => item.completed);
  };

  onFilterNotCompleted = (list) => {
    return list.filter((item) => !item.completed);
  };

  onDeleteCompleted = () => {
    this.setState(({ todoItems }) => {
      return {
        todoItems: todoItems.slice().filter((item) => !item.completed),
      };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <Header onAddItem={this.addItem} />
        <section className="main">
          <TodoList
            list={this.state.todoItems}
            onDelete={this.deleteItem}
            onComplete={this.onComplete}
            filterFunction={this.state.filterFunction}
          />
          <Footer
            notCompletedcounter={
              this.state.todoItems.filter((item) => !item.completed).length
            }
            onDeleteCompleted={this.onDeleteCompleted}
            onFilterClicked={this.onFilterClicked}
            filtersList={this.state.filtersList}
          />
        </section>
      </section>
    );
  }
}

export default App;
