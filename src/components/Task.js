import React from "react";

function Task({ task, onDelete, onToggle }) {
  return (
    <div className="task">
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          color: task.completed ? "gray" : "black",
        }}
      >
        {task.text}
      </span>
      <button onClick={onToggle}>
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Task;


