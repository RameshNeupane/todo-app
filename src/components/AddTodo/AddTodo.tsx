import React, { useState } from "react";
import { Todo } from "../../types/todos";
import "./AddTodo.css";

type AddTodoProps = {
  addTodo: (todo: Todo) => void;
};

const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todo.length > 0) {
      addTodo({
        todo,
        id: `${Date.now()}`,
        isCompleted: false,
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
