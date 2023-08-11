import React, { useState } from "react";

const Item = ({ item }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <button onClick={toggleDetails}>
                {showDetails ? "Ocultar Detalles" : "Ver Detalles"}
            </button>
        </div>
    );
};

export default Item;




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

