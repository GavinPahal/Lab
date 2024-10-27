import React, { useState } from 'react';
import Task from './components/Task';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (task) => {
    setTasks([...tasks, { text: task, isCompleted: false }]);
  };

  // Function to toggle task completion status
  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Get the count of pending tasks
  const pendingTasks = tasks.filter(task => !task.isCompleted).length;

  return (
    <div className="app">
      <h1>Day Planner</h1>
      <TaskForm addTask={addTask} />
      <h2>{pendingTasks} Tasks Remaining</h2>
      <div className="task-list">
        {tasks.map((task, index) => (
          <Task
            key={index}
            index={index}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
