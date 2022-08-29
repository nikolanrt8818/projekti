import React, { useState } from "react";
import data from "../data/zadaci.json";

const AddModal = ({ show, onClose, list }) => {
  const [naziv, setNaziv] = useState("");
  const [rok, setRok] = useState("");
  const [opis, setOpis] = useState("");
  const [prioritet, setPrioritet] = useState("");
  const [resen, setResen] = useState(false);
  const [error, setError] = useState("");

  const errorHandler = () => {
    setError("Sva polja su obavezna.");
  };

  if (!show) {
    return null;
  }
  const nazivHandler = (e) => {
    setNaziv(e.target.value);
  };

  const rokHandler = (e) => {
    setRok(e.target.value);
  };

  const opisHandler = (e) => {
    setOpis(e.target.value);
  };

  const prioritetHandler = (e) => {
    setPrioritet(e.target.value);
  };

  const validate = (task) => {
    if (task.naziv.length < 1) {
      return false;
    } else if (task.rok.length < 1) {
      return false;
    } else if (task.opis.length < 1) {
      return false;
    } else {
      return true;
    }
  };

  const send = (e) => {
    e.preventDefault();
    setResen(false);
    let task = {
      naziv: naziv,
      rok: rok,
      opis: opis,
      prioritet: prioritet,
      resen: resen,
    };

    const v = validate(task);
    console.log(v);
    if (!v) {
      errorHandler();
    } else {
      list.push(task);
    }
  };

  return (
    <div className="addModal" onClick={onClose}>
      <div className="addModal__content" onClick={(e) => e.stopPropagation()}>
        <h3>Dodaj zadatak</h3>
        <small className="error">{error}</small>
        <form action="">
          <div className="form-container">
            <div>
              <label htmlFor="taskName">Naziv:</label>
              <br />
              <input
                type="text"
                id="taskName"
                maxLength={100}
                value={naziv}
                onChange={nazivHandler}
                required
              />
            </div>

            <div>
              <label htmlFor="taskDate">Rok predaje:</label>
              <br />
              <input
                type="date"
                id="taskDate"
                value={rok}
                onChange={rokHandler}
                required
              />
            </div>

            <div>
              <label htmlFor="taskDesc">Opis:</label>
              <br />
              <textarea
                id="taskDesc"
                cols="40"
                rows="5"
                maxLength={100}
                value={opis}
                onChange={opisHandler}
                required
              ></textarea>
              <br />
              <small>Max. broj karaktera: 100</small>
            </div>

            <div>
              <label htmlFor="taskPriority">Prioritet:</label>
              <br />
              <select
                id="taskPriority"
                value={prioritet}
                onChange={prioritetHandler}
                required
              >
                <option value="Nizak">Nizak</option>
                <option value="Srednji">Srednji</option>
                <option value="Visok">Visok</option>
              </select>
            </div>

            <div>
              <button className="add" onClick={send}>
                Dodaj
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
