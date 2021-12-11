import React from "react";
import "./styles/scss/App.scss";
import Header from "./components/Header";
import Form from "./components/Form";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div>
      <Header />
      <Form />
      <Tasks />
    </div>
  );
}

export default App;
