import logo from './logo.svg';
import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const todoInputRef = useRef();

  const addTodo = () => {
    const newTodo = todoInputRef.current.value.trim();
    if (newTodo !== '') {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      todoInputRef.current.value = '';
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
      <h1>Todo List</h1>
        <div className="todo-input-container">
          <input type="text" ref={todoInputRef} placeholder="Add a new todo" />
          <button onClick={addTodo}>Add</button>
        </div>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => removeTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
