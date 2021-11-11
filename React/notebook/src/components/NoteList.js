import React from "react";

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div>
      <h3 className="heading">Notes</h3>
      <div className="noteContainer">
        {notes.map((note, index) => (
          <div key={index.toString()} className="noteItem">
            <div className="noteHead">
                <h3 >Note {index + 1}</h3>
                <span onClick={()=> deleteNote(index)}>&times;</span>
            </div>
            <hr />
            <p>{note}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteList;
