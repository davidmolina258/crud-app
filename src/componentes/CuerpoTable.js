import React from "react";

const CuerpoTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <tr>
      <td>{data.pais}</td>
      <td>{data.capital}</td>
      <td>
        <button onClick={() => setDataToEdit(data)}>Editar</button>
        <button onClick={() => deleteData(data.id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CuerpoTable;
