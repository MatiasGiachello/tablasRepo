import React, { Component } from 'react';
import "./FiltradoFechas.css"

class FiltradoFechas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fechaInicio: '',
            fechaFin: '',
        };
    }

    handleFechaInicioChange = (e) => {
        this.setState({ fechaInicio: e.target.value });
        // this.filtrarPorRangoFechas(); // Cambia esta línea
    };

    handleFechaFinChange = (e) => {
        this.setState({ fechaFin: e.target.value });
        // this.filtrarPorRangoFechas();
    };

    filtrarPorRangoFechas = () => {
        const { fechaInicio, fechaFin } = this.state;
        if (fechaInicio && fechaFin) {
            const elementosFiltrados = this.props.data.filter((item) => {
                const fechaItem = new Date(item.timeStamp);
                return fechaItem >= new Date(fechaInicio) && fechaItem <= new Date(fechaFin);
            });
            this.props.actualizarElementosFiltrados(elementosFiltrados);
            console.log("Elementos filtrados:", elementosFiltrados);
        }

    };


    render() {
        return (
            <div className="filtro-fechas-container">
                <div className="fechas">
                    <label className="fechas-label">Desde:</label>
                    <input
                        className="fechas-input"
                        type="date"
                        value={this.state.fechaInicio}
                        onChange={this.handleFechaInicioChange}
                    />
                </div>
                <div className="fechas">
                    <label className="fechas-label">Hasta:</label>
                    <input
                        className="fechas-input"
                        type="date"
                        value={this.state.fechaFin}
                        onChange={this.handleFechaFinChange}
                    />
                </div>
                <button className="filtrar-button" onClick={this.filtrarPorRangoFechas}>Filtrar</button>
            </div>
        );

    }
}

export default FiltradoFechas;
