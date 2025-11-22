import React, { useState } from "react";

const TodoItem = ({ todo, onClick }) => {
  return (
    <div className="todo-item">
      <span>{todo}</span>
      <button onClick={onClick}>Delete</button>
    </div>
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
      <div>
        {todos.map((todo, index) => (
          <TodoItem
            todo={todo}
            key={index}
            onClick={() => setDodos(todos.filter((_, i) => i !== index))}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
