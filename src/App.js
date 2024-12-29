import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { text: newTask, completed: false }]);
  };

  const deleteTask = (taskIndex) => {
    setTasks(tasks.filter((_, index) => index !== taskIndex));
  };

  const toggleTaskCompletion = (taskIndex) => {
    setTasks(
      tasks.map((task, index) =>
        index === taskIndex ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList 
        tasks={tasks} 
        onDeleteTask={deleteTask} 
        onToggleTask={toggleTaskCompletion} 
      />
    </div>
  );
}

export default App;


