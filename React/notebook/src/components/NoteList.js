import React from "react";

const NoteList = ({ note, deleteNote }) => {
  return (
    <div>
      <h3 className="heading">Notes</h3>
      <div className="noteContainer">
        {note.map((nt, index) => (
          <div key={index} className="noteItem">
            <div className="noteHead">
              <h3>{nt.head}</h3>
              <span onClick={() => deleteNote(index)}>&times;</span>
            </div>
            <hr />
            <p>{nt.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteList;
