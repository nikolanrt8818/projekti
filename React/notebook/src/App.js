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
        saveNote={(noteHead, noteText) => {
          const nt = {
            head: noteHead.trim(),
            text: noteText.trim(),
          };
          setNotes([...notes, nt]);
        }}
      />
      <NoteList
        note={notes}
        deleteNote={(noteIndex) => {
          const newNotes = notes.filter((_, index) => index !== noteIndex);
          setNotes(newNotes);
        }}
      />
    </div>
  );
}

export default App;
