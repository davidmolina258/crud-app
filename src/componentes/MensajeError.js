import React from "react";

const MensajeError = ({ msg, bgColor }) => {
  let style = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    backgroundColor: bgColor,
    fontWeight: "bold",
    color: "#fff",
  };
  return (
    <div>
      <p style={{ style }}>{msg}</p>
    </div>
  );
};

export default MensajeError;
