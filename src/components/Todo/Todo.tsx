import { Todo } from "../../types/todos";
import "./Todo.css";

type TodoProps = {
  todo: Todo;
  updateTodoStatus: (id: number) => void;
  updateTodosOnDelete: (id: number) => void;
};

const TodoItem = ({
  todo,
  updateTodoStatus,
  updateTodosOnDelete,
}: TodoProps) => {
  const handleComplete = () => {
    updateTodoStatus(todo.id as number);
  };

  const handleDelete = () => {
    updateTodosOnDelete(todo.id as number);
  };

  let classes = "todo-name";

  if (todo.is_completed) {
    classes += " completed";
  }

  return (
    <div className="todo">
      <h3 className={classes}>{todo.todo}</h3>
      <div className="todo-btns">
        <button onClick={handleComplete}>
          {todo.is_completed ? "Mark as incomplete" : "Mark as completed"}
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
