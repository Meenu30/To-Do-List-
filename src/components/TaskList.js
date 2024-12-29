import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask, onToggleTask }) {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            onDelete={() => onDeleteTask(index)}
            onToggle={() => onToggleTask(index)}
          />
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
}

export default TaskList;

