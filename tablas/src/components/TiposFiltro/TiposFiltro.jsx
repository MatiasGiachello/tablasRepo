import React, { Component } from 'react';

const tipos = [
    {
        id: 1,
        nombre: 'MODIFI',
    },
    {
        id: 2,
        nombre: 'ERROR',
    },
    {
        id: 3,
        nombre: 'LOG',
    },
];

class TiposFiltro extends Component {
    render() {
        const { tipoSeleccionado, handleTipoChange } = this.props;

        return (
            <div>
                <h2>Filtrar por Tipos</h2>
                <div>
                    <label>Seleccionar Tipo:</label>
                    <select
                        value={tipoSeleccionado}
                        onChange={(e) => handleTipoChange(e.target.value)}
                    >
                        <option value="Todos">Todos</option>
                        {tipos.map((tipo) => (
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

export default TiposFiltro;