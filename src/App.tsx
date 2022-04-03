import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoContainer from "./components/TodoContainer/TodoContainer";
import { Todo, Todos } from "./types/todos";

const App = () => {
  const [todoList, setTodoList] = useState<Todos>([] as Todos);

  const addTodo = (todo: Todo): void => {
    setTodoList([...todoList, todo]);
  };

  const updateTodoStatus = (id: string): void => {
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }

      return todo;
    });

    setTodoList(updatedTodos);
  };

  const updatedTodosOnDelete = (id: string): void => {
    const updatedTodos = todoList.filter((todo) => {
      return todo.id !== id;
    });

    setTodoList(updatedTodos);
  };

  return (
    <div className="App">
      <h1 className="app-title">
        My Todos {"["}
        <span>
          <a
            href="https://github.com/RameshNeupane/todo-app"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            Github
          </a>
        </span>
        {"]"}
      </h1>
      <AddTodo addTodo={addTodo} />
      <hr />
      <TodoContainer
        todoList={todoList}
        updateTodoStatus={updateTodoStatus}
        updateTodosOnDelete={updatedTodosOnDelete}
      />
    </div>
  );
};

export default App;
