import React, { useState } from "react";

const TodoItem = ({ todo, onClick }) => {
  return (
    <li className="todo-item">
      <span>{todo}</span>
      <button onClick={onClick}>Delete</button>
    </li>
  );
};
const Todo = () => {
  const [todos, setDodos] = useState([]);
  const [input, setInput] = useState("");
  return (
    <div className="main">
      <p>To-Do List</p>
      <div className="input-container">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Add todo"
        />
        <button onClick={() => {
            setDodos((prev) => [...prev, input])
            setInput('')
        }}>
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            todo={todo}
            key={index}
            onClick={() => setDodos(todos.filter((_, i) => i !== index))}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
