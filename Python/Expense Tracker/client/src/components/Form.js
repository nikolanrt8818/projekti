import React from "react";

const Form = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={submitHandler}>
        <label htmlFor="desc">Expense:</label>
        <input type="text" name="desc" id="desc" placeholder="Expense name" />

        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min={0.1}
          placeholder="Expense amount"
        />
        <label htmlFor="curr">Currency:</label>
        <select name="curr" id="curr" >
            <option value="">Test</option>
            <option value="">Test</option>
            <option value="">Test</option>
        </select>
        <label htmlFor="date">Date:</label>
        <input type="date" name="date" id="date" />

        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default Form;
