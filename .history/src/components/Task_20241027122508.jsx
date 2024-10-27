import React from 'react';

function Task({ task, index, toggleTask, deleteTask }) {
  return (
    <div className={`task ${task.isCompleted ? 'completed' : ''}`}>
      <span>{task.text}</span>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => toggleTask(index)}
      />
      <button onClick={() => deleteTask(index)}>Remove</button>
    </div>
  );
}

export default Task;
