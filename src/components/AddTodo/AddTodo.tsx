import React, { useState } from "react";
import "./AddTodo.css";

type AddTodoProps = {
  updateTodoList: (todo: string) => void;
}

const AddTodo = ({updateTodoList}: AddTodoProps) => {
  const [todo, setTodo] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todo.length > 0) {
      updateTodoList(todo);
      setTodo('');
    }
  }

  return (
    <div className="add-todo">
      <form onSubmit={handleSubmit} className="todo-form">
        <input type="text" name="todo" value={todo} onChange={(event) => setTodo(event.target.value)} placeholder='enter todo...' autoComplete="off" autoFocus />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;