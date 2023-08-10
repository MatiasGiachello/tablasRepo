import React, { Component } from 'react';

class RangoFechasFiltro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fechaInicio: '',
            fechaFin: '',
        };
    }

    handleFechaInicioChange = (e) => {
        this.setState({ fechaInicio: e.target.value });
        this.filtrarElementos();
    };

    handleFechaFinChange = (e) => {
        this.setState({ fechaFin: e.target.value });
        this.filtrarElementos();
    };

    filtrarPorRangoFechas = () => {
        const { fechaInicio, fechaFin } = this.state;
        if (fechaInicio && fechaFin) {
            // Filtrar los elementos por el rango de fechas seleccionado
            const elementosFiltrados = this.props.data.filter((item) => {
                const fechaItem = new Date(item.timeStamp);
                return fechaItem >= new Date(fechaInicio) && fechaItem <= new Date(fechaFin);
            });
            this.props.actualizarElementosFiltrados(elementosFiltrados);
        }
    };

    render() {
        return (
            <div>
                <h2>Fecha</h2>
                <div>
                    <label>Fecha Inicial:</label>
                    <input
                        type="date"
                        value={this.state.fechaInicio}
                        onChange={this.handleFechaInicioChange}
                    />
                </div>
                <div>
                    <label>Fecha Final:</label>
                    <input
                        type="date"
                        value={this.state.fechaFin}
                        onChange={this.handleFechaFinChange}
                    />
                </div>
                <button onClick={this.filtrarPorRangoFechas}>Filtrar</button>
            </div>
        );
    }
}

export default RangoFechasFiltro;