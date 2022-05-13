import { Todos } from "../../types/todos";
import TodoItem from "../Todo/Todo";
import "./TodoContainer.css";

type TodoContainerProps = {
  todoList: Todos;
  updateTodoStatus: (id: number) => void;
  updateTodosOnDelete: (id: number) => void;
};

const TodoContainer = ({
  todoList,
  updateTodoStatus,
  updateTodosOnDelete,
}: TodoContainerProps) => {
  return (
    <div className="todo-container">
      {todoList?.length > 0 &&
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
