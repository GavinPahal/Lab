import React, { useState } from 'react';
import Task from './components/Task';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { text: 'Task 1', isCompleted: false },
    { text: 'Task 2', isCompleted: false },
    { text: 'Task 3', isCompleted: false },
  ]);  // Initial 3 tasks

  const [showAll, setShowAll] = useState(false);  // State to toggle showing all tasks

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

  // Control how many tasks to display (first 3 or all)
  const tasksToDisplay = showAll ? tasks : tasks.slice(0, 3);

  return (
    <div className="app">
      <h1>Day Planner</h1>

      {/* TaskForm is now between the heading and task count */}
      <TaskForm addTask={addTask} />

      <h2>{pendingTasks} Tasks Remaining</h2>

      <div className="task-list">
        {tasksToDisplay.length > 0 ? (
          tasksToDisplay.map((task, index) => (
            <Task
              key={index}
              index={index}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))
        ) : null /* Removed the "No tasks available" message */}
      </div>
      
      {tasks.length > 3 && !showAll && (
        <button onClick={() => setShowAll(true)}>Show All Tasks</button>
      )}
    </div>
  );
}

export default App;
