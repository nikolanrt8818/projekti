import React from "react";
import { useState } from "react";

const Form = ({ saveNote}) => {
  const [note, setNote] = useState("");

  return (
    <form
      className="noteForm"
      onSubmit={(event) => {
        event.preventDefault();
        saveNote(note);
        setNote("");
      }}
    >
      <h2>Add note</h2>

      <textarea
        placeholder="Type your note here"
        onChange={(event) => setNote(event.target.value)}
        value={note}
        rows="3"
        cols="60"
        maxLength="500"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
