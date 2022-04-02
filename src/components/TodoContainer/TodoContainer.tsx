import Todo from "../Todo/Todo";
import './TodoContainer.css';

type TodoContainerProps = {
  todoList: string[];
}

const TodoContainer = ({todoList}: TodoContainerProps) => {
  return (
    <div className="todo-container">
      {todoList.length > 0 
        && todoList.map((todo) => (
          <Todo key={todo} todo = {todo} />
        ))}
    </div>
  )
}

export default TodoContainer;