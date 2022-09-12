import React from "react";
import { useState, useEffect } from "react";
import httpFetch from "../helpers/httpFetch";
import Formulario from "./Formulario";
import Loader from "./Loader";
import MensajeError from "./MensajeError";
import TableCrud from "./TableCrud";

const CrudAPI = () => {
  const [data, setData] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let apiFetch = httpFetch();
  let url = "http://localhost:5000/suramerica";

  useEffect(() => {
    setLoading(true);
    apiFetch.getData(url).then((res) => {
      console.log(res);
      if (!res.err) {
        setData(res);
        setError(null);
      } else {
        setData(null);
        setError(res);
      }
      setLoading(false);
    });
  }, []);

  const createData = (dataForm) => {
    dataForm.id = Date.now();
    //console.log(dataForm);
    let options = {
      body: dataForm,
      headers: { "content-type": "application/json" },
    };
    apiFetch.postData(url, options).then((res) => {
      console.log(res);
      if (!res.err) {
        setData([...data, res]);
        setError(null);
      } else {
        setError(res);
      }
    });
  };
  const updateData = (dataForm) => {
    let endpoint = `http://localhost:5000/suramerica/${dataForm.id}`;

    let options = {
      body: dataForm,
      headers: { "content-type": "application/json" },
    };
    apiFetch.putData(endpoint, options).then((res) => {
      console.log(res);
      if (!res.err) {
        const newData = data.map((el) =>
          el.id === dataForm.id ? dataForm : el
        );
        setData(newData);
        setError(null);
      } else {
        setError(res);
      }
    });
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(
      "¿Estas seguro que quieres Eliminar este Pais? "
    );
    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };
      apiFetch.delData(endpoint, options).then((res) => {
        if (!res.err) {
          const newData = data.filter((el) => el.id !== id);
          setData(newData);
        } else {
          setError(res);
        }
      });
    } else return;
  };

  return (
    <div>
      <h2>CRUD Falso con JSON Server y React</h2>
      <article className="container">
        <Formulario
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <MensajeError
            msg={`Error: ${error.status} ${error.statusText}`}
            bgColor={"#d3545"}
          />
        )}
        {data && (
          <TableCrud
            data={data}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
};

export default CrudAPI;
