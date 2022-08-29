import React, { useEffect, useState } from "react";
import data from "../data/zadaci.json";
import AddModal from "./AddModal";
import EditModal from "./EditModal";
import { MdDelete, MdEdit } from "react-icons/md";

const List = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [list, setList] = useState([]);

  const clickHandler = () => {
    setShowModal(true);
  };

  const editModalHandler = () => {
    showEditModal(true);
  };

  const deleteHandler = (e, z) => {
    const filtered = list.filter((d) => {
      return d.naziv != z.naziv;
    });
    setList(filtered);
  };

  useEffect(() => {
    setList(data);
    console.log(list);
  }, []);

  return (
    <div className="container">
      <div className="lista">
        <h3>Lista:</h3>
        {list.map((z, index) => {
          return (
            <div className="task" key={index}>
              <div className="task__head">
                <h4>{z.naziv}</h4>
              </div>
              <div className="task__body">
                <p>{z.opis}</p>
                <small>Rok predaje: {z.rok}</small> <br />
                <small>Prioritet: {z.prioritet}</small>
              </div>
              <div className="task__editing">
                <div className="edit" onClick={editModalHandler}>
                  <MdEdit />
                </div>
                <div className="delete" onClick={(e) => deleteHandler(e, z)}>
                  <MdDelete />
                </div>
                <div className="check">
                  {z.resen != true ? (
                    <input type="checkbox" name="" id="" />
                  ) : (
                    <input type="checkbox" name="" id="" checked />
                  )}
                </div>
              </div>
            </div>
          );
        })}
        <button className="add" onClick={clickHandler}>
          Dodaj
        </button>
      </div>
      <AddModal
        show={showModal}
        onClose={() => setShowModal(false)}
        list={list}
      />
      <EditModal
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        list={list}
      />
    </div>
  );
};

export default List;
