import React, { useState, useEffect } from "react";

const Tasks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/todos")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  const send = (id) => {
    fetch(`http://127.0.0.1:5000/todos/delete`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    })
      .then((res) => console.log(res))
      .then(() => window.location.reload("/todos"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="tasks">
      <h3>List</h3>

      <ul className="list">
        {typeof data === "undefined" ? (
          <p>Loading...</p>
        ) : (
          data.map((todo, index) => (
            <li key={index}>
              <div className="task">
                <p>{todo.task}</p>
              </div>
              <div className="tick">
                <input type="checkbox" />
              </div>
              <div className="delete">
                <span
                  onClick={() => {
                    send(todo.idtask);
                  }}
                >
                  &times;
                </span>
              </div>
              <div className="date">
                <small>{todo.date}</small>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Tasks;
