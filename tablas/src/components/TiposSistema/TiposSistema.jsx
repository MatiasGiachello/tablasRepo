import React, { Component } from 'react';
import './TiposSistema.css'

const tiposSistema = [
    {
        id: 1,
        nombre: 'Cotiza',
    },
    {
        id: 2,
        nombre: 'Farma',
    },
    {
        id: 3,
        nombre: 'Labora',
    },
];

class TiposSistema extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tiposSistema: tiposSistema,
        };
    }

    handleTipoSistemaChange = (tipoSistema) => {
        this.setState({ tipoSistemaSeleccionado: tipoSistema });
        this.props.onTipoSistemaChange(tipoSistema);
    };

    render() {
        const { tiposSistema, tipoSistemaSeleccionado } = this.state;

        const tiposSistemaFiltrados = tiposSistema.filter((tipoSistema) => {
            return (
                tipoSistemaSeleccionado === 'Todos' ||
                tipoSistema.nombre === tipoSistemaSeleccionado
            );
        });

        return (
            <div className='sistema'>
                <h2>Sistema</h2>
                <div>
                    <label>Seleccionar Tipo de Sistema:</label>
                    <select
                        value={tipoSistemaSeleccionado}
                        onChange={(e) => this.handleTipoSistemaChange(e.target.value)}
                    >
                        <option value="Todos">Todos</option>
                        {tiposSistema.map((tipoSistema) => (
                            <option key={tipoSistema.id} value={tipoSistema.nombre}>
                                {tipoSistema.nombre}
                            </option>
                        ))}
                    </select>
                </div>
                <ul>
                    {tiposSistemaFiltrados.map((tipoSistema) => (
                        <li key={tipoSistema.id}>{tipoSistema.nombre}</li>
                    ))}
                </ul>
            </div>
        );
    }
}


export default TiposSistema;


//     render() {
//         const { tipoSistemas, handleTipoSistemaChange } = this.props;
//         return (

//             <div >
//                 <h2>Sistemas </h2>
//                 <div>
//                     <label>Seleccionar Tipo:</label>
//                     <select
//                         value={tipoSistemas}
//                         onChange={(e) => handleTipoSistemaChange(e.target.value)}
//                     >
//                         <option value="Todos">Todos</option>
//                         {tiposSistema.map((sistema) => (
//                             <option key={sistema.id} value={sistema.nombre}>
//                                 {sistema.nombre}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             </div >
//         )
//     }
// }


//     constructor(props) {
//         super(props);
//         this.state = {
//             tiposSistema: tiposSistema,
//             tipoSistemaSeleccionado: 'Todos',
//         };
//     }

//     handleTipoSistemaChange = (tipoSistema) => {
//         this.setState({ tipoSistemaSeleccionado: tipoSistema });
//         his.props.onTipoSistemaChange(tipoSistema);
//     };

//     render() {
//         const { tiposSistema, tipoSistemaSeleccionado } = this.state;

//         const tiposSistemaFiltrados = tiposSistema.filter((tipoSistema) => {
//             return (
//                 tipoSistemaSeleccionado === 'Todos' ||
//                 tipoSistema.nombre === tipoSistemaSeleccionado
//             );
//         });

//         return (
//             <div className='sistema'>
//                 <h2>Sistema</h2>
//                 <div>
//                     <label>Seleccionar Tipo de Sistema:</label>
//                     <select
//                         value={tipoSistemaSeleccionado}
//                         onChange={(e) => this.handleTipoSistemaChange(e.target.value)}
//                     >
//                         <option value="Todos">Todos</option>
//                         {tiposSistema.map((tipoSistema) => (
//                             <option key={tipoSistema.id} value={tipoSistema.nombre}>
//                                 {tipoSistema.nombre}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 <ul>
//                     {tiposSistemaFiltrados.map((tipoSistema) => (
//                         <li key={tipoSistema.id}>{tipoSistema.nombre}</li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }

