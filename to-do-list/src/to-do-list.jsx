import React, { useState, useRef } from "react";
import "./to-do-list.css";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);

  // Add a new task
  function addTask() {
    const value = inputRef.current.value.trim();
    if (value === "") return;
    setTasks([...tasks, { text: value, done: false }]);
    inputRef.current.value = "";
  }

  // Toggle done/undone
  function toggleTask(index) {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  }

  // Delete task
  function deleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div className="todo-container">
      <h1>My To-Do List</h1>

      <div className="input-row">
        <input
          type="text"
          placeholder="Enter your task here.."
          ref={inputRef}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
     {tasks.map((task, index) => (
    <li key={index} className={task.done ? "completed" : ""}>
      <span>{task.text}</span>
      <div className="actions">
        <span onClick={() => toggleTask(index)}>✅</span>
        <span onClick={() => deleteTask(index)}>🗑️</span>
      </div>
    </li>
  ))}
</ul>

    </div>
  );
}

export default Todo;
