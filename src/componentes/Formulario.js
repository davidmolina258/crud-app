import React from "react";
import { useState, useEffect } from "react";

const initialForm = {
  pais: "",
  capital: "",
  id: null,
};

const Formulario = ({ setDataToEdit, dataToEdit, createData, updateData }) => {
  const [form, setForm] = useState(initialForm);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };
  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>{dataToEdit ? "Editar" : "Agregar"}</h2>
        <input
          type="text"
          name="pais"
          placeholder="Pais"
          value={form.pais}
          onChange={handleChange}
        />
        <input
          type="text"
          name="capital"
          placeholder="Capital"
          value={form.capital}
          onChange={handleChange}
        />
        <input type="submit" value="Enviar" onClick={handleSubmit} />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};
export default Formulario;
