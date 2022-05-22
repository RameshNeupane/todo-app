import React, { useState } from "react";
import config from "../../config";
import { Todo,  } from "../../types/todos";
import "./AddTodo.css";

type AddTodoProps = {
  addTodo: (url: string, todo: Todo) => Promise<void>;
};

const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todo.length > 0) {
      addTodo(`${config.baseUrl}/todo`, {
        todo,
        is_completed: false,
      });
      setTodo("");
    }
  };

  return (
    <div className="add-todo">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          name="todo"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          placeholder="enter todo..."
          autoComplete="off"
          autoFocus
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
