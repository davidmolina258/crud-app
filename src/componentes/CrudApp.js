import React from "react";
import { useState } from "react";
import Formulario from "./Formulario";
import TableCrud from "./TableCrud";

const initialDB = [
  {
    pais: "Venezuela",
    id: 1,
    habitantes: 30000000,
    presidente: "nicolas Maduro",
    capital: "Caracas",
  },
  {
    pais: "Brasil",
    id: 2,
    habitantes: 210385000,
    presidente: "	Jair Bolsonaro",
    capital: "Brasilia",
  },
  {
    pais: "Argentina",
    id: 3,
    habitantes: 47327407,
    presidente: "Alberto Fernandez",
    capital: "Buenos Aires",
  },
  {
    pais: "Chile",
    id: 4,
    habitantes: 17574003,
    presidente: "Gabriel Boric Font",
    capital: "Santiago de Chile",
  },
  {
    pais: "Colombia",
    id: 5,
    habitantes: 51609474,
    presidente: "Gustavo Petro Urrego",
    capital: "Bogota",
  },
];

const CrudApp = () => {
  const [data, setData] = useState(initialDB);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (dataForm) => {
    dataForm.id = Date.now();
    console.log(dataForm);
    setData([...data, dataForm]);
  };
  const updateData = (dataForm) => {
    const newData = data.map((el) => (el.id === dataForm.id ? dataForm : el));
    setData(newData);
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(
      "¿Estas seguro que quieres Eliminar este Pais? "
    );
    if (isDelete) {
      const newData = data.filter((el) => el.id !== id);
      setData(newData);
    } else return;
  };

  return (
    <div>
      <h2>CRUD Falso con React</h2>
      <article className="container">
        <Formulario
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <TableCrud
          data={data}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
};

export default CrudApp;
