import React from "react";
import "./DetallesEmpleados.css"

const DetallesEmpleado = ({ empleado, onClose }) => {
  return (
    <div>
      <div className="detalles-container">
        <h2>Detalles del Empleado</h2>
        <p>Nombre: {empleado.name}</p>
        <p>TimeStamp: {empleado.timeStamp}</p>
        <h5>Evento: {empleado.motivo}</h5>
        <p>Sistema: {empleado.sistema}</p>
        <p>Tipo: {empleado.tipo}</p>   
        <div className="detalles-container">
          <p>ID: {empleado.id}</p>
          <p>Fecha: {empleado.timeStamp}</p>
          <p>Titulo: {empleado.Titulo}</p>
          <br /><br /><br /> <br /><br /> <br /> <br /><br /><br /> <br /> <br /> <br /><br /><br />                  
          <button onClick={onClose}>Cerrar Detalles</button>
        </div>
      </div>

    </div>

  );
};

export default DetallesEmpleado;









