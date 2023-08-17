import React from "react";
import "./DetallesEmpleados.css"

const DetallesEmpleado = ({ empleado, onClose }) => {
  return (
    <div className="detalles-container">
      <h2>Detalles del Empleado</h2>
      <p>Nombre: {empleado.name}</p>
      <p>TimeStamp: {empleado.timeStamp}</p>
      <h5>Motivo: {empleado.motivo}</h5>
      <p>Sistema: {empleado.sistema}</p>
      <p>Tipo: {empleado.tipo}</p>
      <button onClick={onClose}>Cerrar Detalles</button>
    </div>
  );
};

export default DetallesEmpleado;









