import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const TaskList = ({ tasks, deleteTask }) => (
  <div className="taskContainer">
    <List>
      {tasks.map((task, index) => (
        <ListItem key={index.toString()} dense buttons>
          <Checkbox tabIndex={-1} disableRipple style={{color:"darkgreen"}}/>
          <ListItemText primary={task} />
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => deleteTask(index)}>
              <DeleteIcon style={{color:"#800013"}}/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  </div>
);

export default TaskList;
