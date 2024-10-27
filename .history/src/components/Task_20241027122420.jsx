import React from 'react';
import './Task.css'; // Ensure this path is correct based on your project structure

function Task({ task, index, toggleTask, deleteTask }) {
  return (
    <div className={`task ${task.isCompleted ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => toggleTask(index)}
      />
      <span className="task-text">{task.text}</span>
      <button className="remove-button" onClick={() => deleteTask(index)}>Remove</button>
    </div>
  );
}

export default Task;
