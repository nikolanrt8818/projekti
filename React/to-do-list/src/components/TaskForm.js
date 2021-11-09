import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Textfield from "@material-ui/core/Textfield";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";

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
        <Textfield
          type="text"
          placeholder="Type your task here"
          onChange={(event) => {
            setTask(event.target.value);
          }}
          value={task}
          InputProps={{ disableUnderline: true }}
          variant="outlined"
          margin="Normal"
          size="small"
        />
        <Button
          startIcon={<PlaylistAddCheckIcon />}
          type="submit"
          style={{ backgroundColor: "#800013", color: "white", width: "20%" }}
        >
          Add
        </Button>
      </form>
    </div>
  );
};

export default TaskForm;
