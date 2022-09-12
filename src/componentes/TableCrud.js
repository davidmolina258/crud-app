import CuerpoTable from "./CuerpoTable";

const TableCrud = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <thead>
        <tr>
          <th>Pais</th>
          <th>Capital</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((el) => (
            <CuerpoTable
              key={el.id}
              setDataToEdit={setDataToEdit}
              deleteData={deleteData}
              data={el}
            />
          ))
        ) : (
          <tr>
            <td>Sin Datos</td>
          </tr>
        )}
      </tbody>
    </div>
  );
};

export default TableCrud;
