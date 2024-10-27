import React from 'react';

function Task({ task, index, toggleTask, deleteTask }) {
  return (
    <div className={`task ${task.isCompleted ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => toggleTask(index)}
      />
      <span>{task.text}</span>
      <button onClick={() => deleteTask(index)}>Remove</button>
    </div>
  );
}

export default Task;
