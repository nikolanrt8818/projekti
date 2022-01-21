import React, { useEffect, useState } from "react";

const ExpenseList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/expenses")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="table-container">
      <h4>Expenses:</h4>
      <table className="table">
        <tr>
          <th className="table-head">Description</th>
          <th className="table-head">Amount</th>
          <th className="table-head">Date</th>
        </tr>
        {data.map((exp, index) => (
          <tr className="expense" key={index}>
            <td className="description">{exp.description}</td>
            <td className="amount">
              {exp.currency}
              {exp.amount}
            </td>
            <td className="date">{exp.date}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ExpenseList;
