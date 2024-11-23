import React, { useState } from "react";
import "../styles/TaskStyles.css"; // Corrected import path

const AddTaskForm = ({ addTask }) => {
  const [task, setTask] = useState({ title: "", description: "", dueDate: "", status: "Pending" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title || !task.description) {
      alert("All fields are required");
      return;
    }
    addTask({ ...task, id: Date.now() });
    setTask({ title: "", description: "", dueDate: "", status: "Pending" });
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        name="title"
        placeholder="Title"
        value={task.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
        required
      />
      <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
      <select name="status" value={task.status} onChange={handleChange}>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <button className="btn-submit" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;