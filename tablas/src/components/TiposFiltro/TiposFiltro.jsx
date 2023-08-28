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
            <div className="filtro">
                <div className="filtro-tipo">
                    <label className="filtro-label">Seleccionar Tipo:</label>
                    <select
                        className="filtro-select"
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