import React, { useState } from 'react';

function boton() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="boton">
      <div>
        <h2>Producto</h2>
        <button onClick={toggleDetails}>
          {showDetails ? 'Ocultar detalles' : 'Ver detalles'}
        </button>
        {showDetails && (
          <div>
            <p>Detalles del Producto:</p>
            <ul>
              <li>Característica 1</li>
              <li>Característica 2</li>
              <li>Característica 3</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default boton;





// import React, { useContext } from "react";
// import App from "../../App";

// const VerDetalles = ({ item, timeStamp }) =>{
//     const {verDetalles} = useContext(App);

//     return(
//         <div className="verDetalles">
//             <h4> {item.nombre} </h4>
//             <h4> TimeStamp: {timeStamp} </h4>
//             <p> Tipo: {item.tipo} </p>
//             <p> Motivo: {item.motivo}</p>
//             <p> Sistema: {item.sistema} </p>
//             <button className="miBoton" onClick={() => verDetalles(item.id)}> Ver Detalles</button>
//             <hr />
//         </div>
//     )

// }
// export default VerDetalles;




// function // () {
//     return (
//         <div className="VerDetalles">
//         <br />
//         <button className="btn btn-primary"> Ver Detalles </button>

//         </div>
//     );
// }

