import React, { useState } from "react";

const EditTaskModal = ({ task, updateTask, closeModal }) => {
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(editedTask);
    closeModal();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="edit-task-form">
        <input name="title" value={editedTask.title} onChange={handleChange} required />
        <textarea name="description" value={editedTask.description} onChange={handleChange} required />
        <input type="date" name="dueDate" value={editedTask.dueDate} onChange={handleChange} required />
        <select name="status" value={editedTask.status} onChange={handleChange}>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
        <button type="submit">Save</button>
        <button type="button" onClick={closeModal}>Cancel</button>
      </form>
    </div>
  );
};

export default EditTaskModal;