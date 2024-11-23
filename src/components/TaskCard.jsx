import React, { useState } from "react";
import EditTaskModal from "./EditTaskModal";
import "../styles/TaskStyles.css"; // Corrected import path

const TaskCard = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  // Dynamic class based on task status
  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "task-pending";
      case "In Progress":
        return "task-in-progress";
      case "Completed":
        return "task-completed";
      default:
        return "";
    }
  };

  return (
    <div className={`task-card ${getStatusClass(task.status)}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <p>Status: {task.status}</p>
      <div className="task-card-actions">
        <button className="btn-edit" onClick={() => setIsEditing(true)}>
          Edit
        </button>
        <button className="btn-delete" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
      {isEditing && (
        <EditTaskModal task={task} updateTask={updateTask} closeModal={() => setIsEditing(false)} />
      )}
    </div>
  );
};

export default TaskCard;
