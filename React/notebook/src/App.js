import "./scss/App.scss";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    document.title = "Notebook";
  });

  return (
    <div className="App">
      <Header />
      <Form
        saveNote={(noteText) => {
          const txt = noteText.trim();

          if (txt.length > 0) {
            setNotes([...notes, txt]);
          }
        }}
      />
      <NoteList notes={notes} deleteNote={(noteIndex) => {
        const newNotes = notes.filter((_,index) => index !== noteIndex);
        setNotes(newNotes);
      }}/>
    </div>
  );
}

export default App;
