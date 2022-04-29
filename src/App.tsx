import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoContainer from "./components/TodoContainer/TodoContainer";
import { Todo, Todos } from "./types/todos";
import axios from "axios";

const App = () => {
  const [todoList, setTodoList] = useState<Todos>([] as Todos);

  const fetchAllTodo = async (url: string) => {
    const response = await axios.get<Promise<Todos>>(url);
    const todos = await response.data;
    setTodoList([...todos]);
  };

  useEffect(() => {
    fetchAllTodo("http://localhost:8000/todo");
  }, []);

  const addTodo = (todo: Todo): void => {
    setTodoList([...todoList, todo]);
  };

  const updateTodoStatus = (id: number): void => {
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.is_completed,
        };
      }

      return todo;
    });

    setTodoList(updatedTodos);
  };

  const updatedTodosOnDelete = (id: number): void => {
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
      {/* <AddTodo addTodo={addTodo} /> */}
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
