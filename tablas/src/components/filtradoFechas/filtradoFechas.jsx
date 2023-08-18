import React, { Component } from 'react';


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
            <div>
                <div>
                    <div className='fechas'>
                        <label>  desde: </label>
                    </div>
                    <input
                        type="date"
                        value={this.state.fechaInicio}
                        onChange={this.handleFechaInicioChange}
                    />
                </div>
                <div className='fechas'>
                    <label>  hasta:  </label>
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

export default FiltradoFechas;


// filtrarPorRangoFechas = () =>

//     const { fechaInicio, fechaFin } = this.state;

//     const fechaHoy = new Date();
//     const fechaAyer = new Date();
//     fechaAyer.setDate(fechaHoy.getDate() - 1);

//     if (!fechaInicio && !fechaFin) {
//         // Si no se seleccionaron fechas, mostramos los datos del día de ayer y hoy
//         const elementosFiltrados = this.props.data.filter((item) => {
//             const fechaItem = new Date(item.timeStamp);
//             return fechaItem >= fechaAyer && fechaItem <= fechaHoy;
//         });
//         this.props.actualizarElementosFiltrados(elementosFiltrados);
//     } else {
//         // Si se seleccionaron fechas, aplicamos el rango de fechas seleccionado
//         const elementosFiltrados = this.props.data.filter((item) => {
//             const fechaItem = new Date(item.timeStamp);
//             return fechaItem >= new Date(fechaInicio) && fechaItem <= new Date(fechaFin);
//         });
//         this.props.actualizarElementosFiltrados(elementosFiltrados);
//     }
// };
