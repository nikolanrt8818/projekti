import React, { useState } from "react";

const Form = () => {
  const initialValues = {
    task: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);

  const send = () => {
    if (values.task === "" && values.date === "") {
      alert("Please fill both textboxes.");
    } else {
      fetch("http://127.0.0.1:5000/todos", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      setValues({ task: "", date: "" });
    }
  };

  const submitHandler = () => {
    send();
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="formContainer">
      <form onSubmit={submitHandler} className="form">
        <input
          type="text"
          id="task"
          name="task"
          placeholder="Your task here"
          value={values.task}
          onChange={changeHandler}
          autoComplete="off"
        />
        <input
          type="date"
          id="date"
          name="date"
          value={values.date}
          onChange={changeHandler}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
