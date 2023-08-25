import React, { Component } from 'react';
import './TiposSistema.css'


const Sistemas = [
    {
        id: 1,
        nombre: 'COTIZA',
    },
    {
        id: 2,
        nombre: 'FARMA',
    },
    {
        id: 3,
        nombre: 'LABORA',
    },
];

class TiposSistema extends Component {
    /**
     * Renders the component.
     * 
     * @returns {JSX.Element} The rendered component.
     */
    render() {
        const { tipoSeleccionado, handleTipoChange } = this.props;
        return (
            <div className='sistema'>
                <div>
                    <label>Seleccionar Tipo:</label>
                    <select
                        value={tipoSeleccionado}
                        onChange={(e) => handleTipoChange(e.target.value)}
                    >
                        <option value="Todos">Todos</option>
                        {Sistemas.map((tipo) => (
                            <option key={tipo.id} value={tipo.nombre}>
                                {tipo.nombre}
                            </option>

                        ))}
                    </select>
                </div>
            </div>
        );
    }
}

export default TiposSistema;
