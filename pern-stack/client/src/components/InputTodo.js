import React, { useState } from "react";

const InputTodo = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [dentist, setDentist] = useState("");
  const [patient, setPatient] = useState("");
  const [clinic, setClinic] = useState("");
  const [price, setPrice] = useState("");
  const [commissioned, setCommissioned] = useState("");
  const [observation, setObservation] = useState("");
  const [additional, setAdditional] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        title,
        date,
        amount,
        dentist,
        patient,
        clinic,
        price,
        commissioned,
        observation,
        additional,
      };

      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5">Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Data"
          />
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Qtd."
          />
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Descrição"
          />
          <input
            type="text"
            className="form-control"
            value={dentist}
            onChange={(e) => setDentist(e.target.value)}
            placeholder="Dentista"
          />
          <input
            type="text"
            className="form-control"
            value={clinic}
            onChange={(e) => setClinic(e.target.value)}
            placeholder="Clínica"
          />
          <input
            type="text"
            className="form-control"
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
            placeholder="Paciente"
          />
          <input
            type="text"
            className="form-control"
            value={commissioned}
            onChange={(e) => setCommissioned(e.target.value)}
            placeholder="Comissionado"
          />
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Preço"
          />
          <input
            type="text"
            className="form-control"
            value={observation}
            onChange={(e) => setObservation(e.target.value)}
            placeholder="OBS"
          />
          <input
            type="number"
            className="form-control"
            value={additional}
            onChange={(e) => setAdditional(e.target.value)}
            placeholder="Adicional"
          />
          <button className="btn btn-success">Add</button>
        </div>
      </form>
    </>
  );
};

export default InputTodo;
