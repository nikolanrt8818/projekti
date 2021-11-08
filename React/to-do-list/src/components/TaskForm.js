import React from "react";
import { useState } from "react";

const TaskForm = ({ saveList }) => {
  const [task, setTask] = useState("");

  return (
    <div className="taskContainer">
      <form
        className="taskForm"
        onSubmit={(event) => {
          event.preventDefault();
          saveList(task);
          setTask("");
        }}
      >
        <h1>Add task</h1>
        <input
          type="text"
          placeholder="Type your task here"
          onChange={(event) => {
            setTask(event.target.value);
          }}
          value={task}
        />
      <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TaskForm;
