import './Todo.css';

type TodoProps = {
  todo: string;
}

const Todo = ({todo}: TodoProps) => {
  const handleComplete = () => {

  }

  const handleDelete = () => {
    const todoEl = document.querySelectorAll('.todo');
    console.log(todoEl);
    // todoEl?.remove();
  }

  return (
    <div className="todo">
      <h3 className="todo-name">{todo}</h3>
      <div className='todo-btns'>
        <button onClick={handleComplete}>Complete</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;