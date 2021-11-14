import React from "react";
import { useState } from "react";

const Form = ({ saveNote }) => {
  const initialValues = {
    head: "",
    text: "",
  };

  const [note, setNote] = useState(initialValues);

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setNote({ ...note, [name]: value });
  };

  return (
    <form
      className="noteForm"
      onSubmit={(event) => {
        event.preventDefault();
        if (note.head !== "" && note.text !== "") {
          saveNote(note.head, note.text);
          setNote({ head: "", text: "" });
        } else {
          alert("Please fill both textfields.")
        }
      }}
    >
      <h2>Add note</h2>

      <input
        type="text"
        placeholder="Type your note header here"
        onChange={changeHandler}
        name="head"
        value={note.head}
        maxLength="100"
      />

      <textarea
        placeholder="Type your note here"
        onChange={changeHandler}
        name="text"
        value={note.text}
        rows="3"
        cols="60"
        maxLength="500"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
