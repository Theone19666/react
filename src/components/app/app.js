import React, { useState, useEffect } from "react";
import "./app.css";
import TodoList from "../todo-list";
import Header from "../header";
import Footer from "../footer";
import {
  FiltersListContext,
  FiltersContext,
  TodoCountContext,
  NewTaskFormOnAddContext,
  EditTaskFormOnAddContext,
  LabelContext,
} from "../todo-context";

const initialTodoItems = [
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
];

function App() {
  const [todoItems, setTodoItems] = useState([]);
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

  const getTodoItemsFromLocalStorage = () => {
    const localStorageValue = localStorage.getItem("todoItems");
    return localStorageValue ? JSON.parse(localStorageValue) : [];
  };

  const setTodoItemsInLocalStorage = (value) => {
    localStorage.setItem("todoItems", JSON.stringify(value));
  };

  const setInitialTodoItems = () => {
    if (localStorage.getItem("todoItems")) {
      setTodoItems(getTodoItemsFromLocalStorage());
    } else {
      setTodoItems(initialTodoItems);
      setTodoItemsInLocalStorage(initialTodoItems);
    }
  };

  useEffect(() => {
    setInitialTodoItems();
  }, [setInitialTodoItems]);

  const getTimerValue = ({ minutes = 0, seconds = 0 } = {}) => {
    return !isNaN(minutes) && !isNaN(seconds)
      ? minutes * 60 + Number(seconds)
      : 0;
  };

  const addItem = ({ todoName = "", minutes = 0, seconds = 0 } = {}) => {
    console.log("todoName", todoName);
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
          timer: getTimerValue({ minutes, seconds }),
        },
      });
      setTodoItemsInLocalStorage(todoItems);
      return todoItems;
    });
  };

  const deleteItem = (id) => {
    setTodoItems((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      if (index > -1) {
        const updatedTodoItems = [
          ...prev.slice(0, index),
          ...prev.slice(index + 1),
        ];
        setTodoItemsInLocalStorage(updatedTodoItems);
        return updatedTodoItems;
      }
      setTodoItemsInLocalStorage(prev);
      return prev;
    });
  };

  const onComplete = (id) => {
    setTodoItems((todoItems) => {
      const elem = { ...todoItems.find((item) => item.id === id) };
      const elemIndex = todoItems.findIndex((item) => item.id === id);
      elem.completed = !elem.completed;
      if (elem) {
        const updatedTodoItems = [
          ...todoItems.slice(0, elemIndex),
          elem,
          ...todoItems.slice(elemIndex + 1),
        ];
        setTodoItemsInLocalStorage(updatedTodoItems);
        return updatedTodoItems;
      }
      setTodoItemsInLocalStorage(todoItems);
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
      const updatedItems = todoItems.slice().filter((item) => !item.completed);
      setTodoItemsInLocalStorage(updatedItems);
      return updatedItems;
    });
  };

  const onEditTaskSubmit = (value, id) => {
    setTodoItems((prev) => {
      const totoItemsCopy = JSON.parse(JSON.stringify(prev));
      const editingTask = totoItemsCopy.find((item) => item.id === id);
      if (editingTask) {
        editingTask.label.descriptionText = value;
      }
      setTodoItemsInLocalStorage(totoItemsCopy);
      return totoItemsCopy;
    });
  };

  const updateTimer = (id, newTime) => {
    setTodoItems((prev) => {
      const todosCopy = JSON.parse(JSON.stringify(prev));
      const updatingTodo = todosCopy.find((item) => item.id === id);
      if (updatingTodo) {
        updatingTodo.label.timer = newTime;
      }
      setTodoItemsInLocalStorage(todosCopy);
      return todosCopy;
    });
  };

  return (
    <section className="todoapp">
      <NewTaskFormOnAddContext.Provider value={addItem}>
        <Header />
      </NewTaskFormOnAddContext.Provider>

      <section className="main">
        <EditTaskFormOnAddContext.Provider value={onEditTaskSubmit}>
          <LabelContext.Provider value={updateTimer}>
            <TodoList
              list={todoItems}
              onDelete={deleteItem}
              onComplete={onComplete}
              filterFunction={filterFunction}
            />
          </LabelContext.Provider>
        </EditTaskFormOnAddContext.Provider>

        <FiltersContext.Provider value={onFilterClicked}>
          <FiltersListContext.Provider value={filtersList}>
            <TodoCountContext.Provider
              value={todoItems.filter((item) => !item.completed).length}
            >
              <Footer onDeleteCompleted={onDeleteCompleted} />
            </TodoCountContext.Provider>
          </FiltersListContext.Provider>
        </FiltersContext.Provider>
      </section>
    </section>
  );
}

export default App;
