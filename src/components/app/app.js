import React, { useState } from "react";
import "./app.css";
import TodoList from "../todo-list";
import Header from "../header";
import Footer from "../footer";

function App() {
  const [todoItems, setTodoItems] = useState([
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
  ]);
  const [filtersList, setFiltersList] = useState([
    {
      id: "1",
      text: "All",
      className: "selected",
    },
    {
      id: "2",
      text: "Active",
      filterFunction: () => (item) => {
        return !item?.completed;
      },
    },
    {
      id: "3",
      text: "Completed",
      filterFunction: () => (item) => {
        return item?.completed;
      },
    },
  ]);

  let [filterFunction, setFilterFunction] = useState(null);

  const getTimer = ({ minutes = 0, seconds = 0 } = {}) => {
    return minutes * 60 + seconds;
  };

  const addItem = ({ todoName = "", minutes = 0, seconds = 0 }) => {
    if (!todoName) {
      return;
    }
    setTodoItems((prev) => {
      const todoItems = prev.slice();
      todoItems.push({
        id: String(prev.length + 1),
        completed: false,
        label: {
          descriptionText: todoName,
          created: Date.now(),
          timer: getTimer({ minutes, seconds }),
        },
      });
      return todoItems;
    });
  };

  const deleteItem = (id) => {
    setTodoItems((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      if (index > -1) {
        return [
            ...prev.slice(0, index),
            ...prev.slice(index + 1),
        ];
      }
      return prev;
    })
  };

  const onComplete = (id) => {
    setTodoItems((todoItems) => {
      const elem = { ...todoItems.find((item) => item.id === id) };
      const elemIndex = todoItems.findIndex((item) => item.id === id);
      elem.completed = !elem.completed;
      if (elem) {
        return [
            ...todoItems.slice(0, elemIndex),
            elem,
            ...todoItems.slice(elemIndex + 1),
          ];
      }
      return todoItems;
    });
  };

  const onFilterClicked = (filterFunction, id) => {
    setFilterFunction(filterFunction);
    setFiltersList((filtersList) => {
      const filterstateCopy = filtersList.slice();
      const prevSelectedFilter = filterstateCopy.find((item) =>
        item?.className?.includes("selected")
      );
      if (prevSelectedFilter) {
        prevSelectedFilter.className = prevSelectedFilter.className.replace(
          "selected",
          ""
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

  const onDeleteCompleted = () => {
    setTodoItems((todoItems) => {
      return todoItems.slice().filter((item) => !item.completed);
    });
  };

  return (
    <section className="todoapp">
      <Header onAddItem={addItem} />
      <section className="main">
        <TodoList
          list={todoItems}
          onDelete={deleteItem}
          onComplete={onComplete}
          filterFunction={filterFunction}
        />
        <Footer
          notCompletedcounter={
            todoItems.filter((item) => !item.completed).length
          }
          onDeleteCompleted={onDeleteCompleted}
          onFilterClicked={onFilterClicked}
          filtersList={filtersList}
        />
      </section>
    </section>
  );
}

export default App;
