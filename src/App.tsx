import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoContainer from "./components/TodoContainer/TodoContainer";
import { Todo, Todos, TodoResponse } from "./types/todos";
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

  const addTodo = async (url: string, todo: Todo): Promise<TodoResponse> => {
    const response = await axios.post<Promise<TodoResponse>>(url, todo);
    return response.data;
  };

  const updateTodoStatus = async (url: string): Promise<TodoResponse> => {
    const response = await axios.put<Promise<TodoResponse>>(url);
    return response.data;
  };

  const updatedTodosOnDelete = async (url: string): Promise<TodoResponse> => {
    const response = await axios.delete<Promise<TodoResponse>>(url);
    return response.data;
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
