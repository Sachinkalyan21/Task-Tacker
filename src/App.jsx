import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import useLocalStorage from "./hooks/useLocalStorage";
import "./styles/App.css";

const App = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [dynamicHeading, setDynamicHeading] = useState("Task Tracker");

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (taskId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  };

  const toggleHeading = () => {
    setDynamicHeading(dynamicHeading === "Task Tracker" ? "Your Tasks" : "Task Tracker");
  };

  return (
    <div className="app-container">
      <h1 className="dynamic-heading" onClick={toggleHeading}>
        {dynamicHeading}
      </h1>
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;