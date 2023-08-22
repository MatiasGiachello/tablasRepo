import React from "react";
import "./DetallesEmpleados.css"

const DetallesEmpleado = ({ empleado, onClose }) => {
  return (
      <div className="detalles-container">
        <h2>Detalles del Empleado</h2>
        <p>Nombre: {empleado.name}</p>
        <p>TimeStamp: {empleado.timeStamp}</p>
        <h5>Evento: {empleado.motivo}</h5>
        <p>Sistema: {empleado.sistema}</p>
        <p>Tipo: {empleado.tipo}</p>
        <button onClick={onClose}>Cerrar Detalles</button>
      </div>

  );
};

export default DetallesEmpleado;




// import React, { useState } from 'react';
// import './DetallesEmpleados.css'

// const Detalles = () => {
//   const [selectedItem, setSelectedItem] = useState(null);

//   const items = [
//     { id: 1, name: 'Item 1', description: 'Descripción del Item 1...' },
//     { id: 2, name: 'Item 2', description: 'Descripción del Item 2...' },
//     // Agrega más elementos aquí
//   ];

//   const handleItemClick = (item) => {
//     setSelectedItem(item);
//   };

//   return (
//     <div className="App">
//       <h1>Página Principal</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Nombre</th>
//             <th>Acciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>
//                 <button onClick={() => handleItemClick(item)}>Ver detalles</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {selectedItem && (
//         <div className="description-section">
//           <h2>Detalles de {selectedItem.name}</h2>
//           <p>{selectedItem.description}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Detalles;









