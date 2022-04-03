import { Todo } from "../../types/todos";
import "./Todo.css";

type TodoProps = {
  todo: Todo;
  updateTodoStatus: (id: string) => void;
  updateTodosOnDelete: (id: string) => void;
};

const TodoItem = ({
  todo,
  updateTodoStatus,
  updateTodosOnDelete,
}: TodoProps) => {
  const handleComplete = () => {
    updateTodoStatus(todo.id);
  };

  const handleDelete = () => {
    updateTodosOnDelete(todo.id);
  };

  let classes = "todo-name";

  if (todo.isCompleted) {
    classes += " completed";
  }

  return (
    <div className="todo">
      <h3 className={classes}>{todo.todo}</h3>
      <div className="todo-btns">
        <button onClick={handleComplete}>
          {todo.isCompleted ? "Mark as incomplete" : "Mark as completed"}
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
