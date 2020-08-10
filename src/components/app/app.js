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
          created: 1596297358864,
          timer: 120,
        },
        show: true,
        completed: false,
      },
      {
        id: "2",
        label: {
          descriptionText: "Editing task",
          created: 1596966053387,
          timer: 59,
        },
        show: true,
        completed: false,
      },
      {
        id: "3",
        label: {
          descriptionText: "Active task",
          created: 1596296983183,
          timer: 100,
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
      },
      {
        id: "2",
        text: "Active",
        filterFunction: (item) => {
          return !item.completed;
        },
      },
      {
        id: "3",
        text: "Completed",
        filterFunction: (item) => {
          return item.completed;
        },
      },
    ],
    filterFunction: null,
  };

  getTimer = ({ minutes = 0, seconds = 0 } = {}) => {
    return minutes * 60 + seconds;
  };

  addItem = ({ todoName = "", minutes = 0, seconds = 0 }) => {
    if (!todoName) {
      return;
    }
    this.setState((state) => {
      const todoItems = state.todoItems.slice();
      todoItems.push({
        id: String(state.todoItems.length + 1),
        completed: false,
        label: {
          descriptionText: todoName,
          created: Date.now(),
          timer: this.getTimer({ minutes, seconds }),
        },
      });
      return {
        todoItems,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoItems }) => {
      const index = todoItems.findIndex((item) => item.id === id);
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

  onFilterClicked = (filterFunction, id) => {
    this.setState({
      filterFunction: filterFunction,
    });
    this.setState((state) => {
      const filterstateCopy = state.filtersList.slice();
      const prevSelectedFilter = filterstateCopy.find((item) =>
        item?.className?.includes("selected"),
      );
      if (prevSelectedFilter) {
        prevSelectedFilter.className = prevSelectedFilter.className.replace(
          "selected",
          "",
        );
      }
      const selectedFilter = filterstateCopy.find((item) => item?.id === id);
      if (selectedFilter) {
        selectedFilter.className = selectedFilter.className
          ? `${selectedFilter.className} selected`
          : "selected";
      }
      return filterstateCopy;
    });
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
