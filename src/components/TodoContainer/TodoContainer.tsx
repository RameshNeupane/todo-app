import { Todos } from "../../types/todos";
import TodoItem from "../Todo/Todo";
import "./TodoContainer.css";

type TodoContainerProps = {
  todoList: Todos;
  updateTodoStatus: (url: string) => void;
  updateTodosOnDelete: (url: string) => void;
};

const TodoContainer = ({
  todoList,
  updateTodoStatus,
  updateTodosOnDelete,
}: TodoContainerProps) => {
  return (
    <div className="todo-container">
      {todoList.length > 0 &&
        todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodoStatus={updateTodoStatus}
            updateTodosOnDelete={updateTodosOnDelete}
          />
        ))}
    </div>
  );
};

export default TodoContainer;
