import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskCard key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
        ))
      ) : (
        <p>No tasks available. Add some!</p>
      )}
    </div>
  );
};

export default TaskList;
