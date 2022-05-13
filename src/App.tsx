import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoContainer from "./components/TodoContainer/TodoContainer";
import { Todo, Todos } from "./types/todos";
import axios from "axios";
import config from "./config";

const App = () => {
  const [todoList, setTodoList] = useState<Todos | any>(null);

  const fetchAllTodo = async (url: string) => {
    const response = await axios.get<Promise<Todos>>(url);
    const todos = await response.data;
    setTodoList([...todos]);
  };

  useEffect(() => {
    fetchAllTodo(`${config.baseUrl}/todo`);
  }, []);

  const addTodo = async (url: string, todo: Todo) => {
    const response = await axios.post<Promise<Todo>>(url, todo);
    setTodoList([...todoList, response.data])
  };

  const updateTodoStatus = async (id: number): Promise<void> => {
    const url = `${ config.baseUrl }/todo/${ id}`
    const response = await axios.put<Promise<Todo>>(url);
    const updatedTodo = await response.data

    setTodoList(todoList.map((todo: Todo) => 
      todo.id === updatedTodo.id 
      ? {...todo, is_completed: updatedTodo.is_completed} 
      : todo
    ))
  };

  const updatedTodosOnDelete = async (id: number): Promise<void> => {
    const url = `${ config.baseUrl }/todo/${ id}`

    await axios.delete<Promise<Todo>>(url);

    setTodoList(todoList.filter((todo: Todo) => todo.id !== id))
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
