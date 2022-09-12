import React from "react";
import CrudAPI from "./componentes/CrudAPI";
import CrudApp from "./componentes/CrudApp";

function App() {
  return (
    <div>
      <h1>Practicas de React CRUD</h1>
      <CrudAPI />
      <hr />
      <CrudApp />
    </div>
  );
}

export default App;
