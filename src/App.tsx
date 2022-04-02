import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoContainer from './components/TodoContainer/TodoContainer';

const App = () => {
  const [todoList, setTodoList] = useState<string[]>([] as string[])

  const updateTodoList = (todo: string): void => {
    setTodoList([...todoList, todo])
  }

  return (
    <div className="App">
      <h1 className='app-title'>My Todos</h1>
      <AddTodo updateTodoList = {updateTodoList} />
      <hr />
      <TodoContainer todoList={todoList} />
    </div>
  );
}

export default App;
