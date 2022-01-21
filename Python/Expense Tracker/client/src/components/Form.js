import React from "react";

const Form = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={submitHandler}>
        <div className="row">
          <label htmlFor="desc">Expense:</label>
          <input
            type="text"
            name="desc"
            id="desc"
            placeholder="Expense name"
            maxLength={30}
            required
          />
        </div>

        <div className="row">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            min={0.1}
            placeholder="Expense amount"
            required
          />
        </div>

        <div className="row">
          <label htmlFor="curr">Currency:</label>
          <select name="curr" id="curr">
            <option value="€">€</option>
            <option value="$">$</option>
            <option value="£">£</option>
          </select>
        </div>

        <div className="row">
          <label htmlFor="date">Date:</label>
          <input type="date" name="date" id="date" required />
        </div>

        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default Form;
