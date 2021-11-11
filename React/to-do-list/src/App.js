import "./scss/App.scss";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    document.title = "To Do List";
  }, []);

  return (
    <div className="App">
      <Header />
      <TaskForm
        saveList={(taskText) => {
          const trimmedText = taskText.trim();

          if (trimmedText.length > 0) {
            setTasks([...tasks, trimmedText]);
          }
        }}
      />
      <TaskList
        tasks={tasks}
        deleteTask={(taskIndex) => {
          const newTasks = tasks.filter((_, index) => index !== taskIndex);
          setTasks(newTasks);
        }}
      />
    </div>
  );
}

export default App;
