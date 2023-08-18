import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactDOM } from 'react';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import TiposSistema from './components/TiposSistema/TiposSistema';
import TiposFiltro from './components/TiposFiltro/TiposFiltro';
import FiltradoFechas from './components/FiltradoFechas/FiltradoFechas';
import DetallesEmpleado from './components/DetallesEmpleados/DetallesEmpleados';



const data = [
  {
    id: 1,
    timeStamp: "2023-01-08",
    tipo: "LOG",
    name: "Pedro Martin",
    motivo: "Inicio de sesion exitoso",
    sistema: "COTIZA",
    acciones: "Ver Detalles"
  },
  {
    id: 2,
    timeStamp: "2023-08-18",
    tipo: "LOG",
    name: "Lucio Bertolini",
    motivo: "Inicio de sesion fallido",
    sistema: "FARMA",
    acciones: "Ver Detalles"
  },
  {
    id: 3,
    timeStamp: "2023-01-09",
    tipo: "MODIFI",
    name: "Andres dordi",
    motivo: "Inicio de sesion exitoso",
    sistema: "LABORA",
    acciones: "Ver Detalles"
  },
  {
    id: 4,
    timeStamp: "2023-02-01",
    tipo: "ERROR",
    name: "Lucio Bertolini",
    motivo: "Cierre por inactividad",
    sistema: "FARMA",
    acciones: "Ver Detalles"
  },
  {
    id: 5,
    timeStamp: "2023-01-22",
    tipo: "ERROR",
    name: "Andres dordi",
    motivo: "Inicio de sesion exitoso",
    sistema: "LABORA",
    acciones: "Ver Detalles"
  },
  {
    id: 5,
    timeStamp: "2023-02-18",
    tipo: "LOG",
    name: "Lucio Bertolibi",
    motivo: "Cierre por inactividad",
    sistema: "FARMA",
    acciones: "Ver Detalles"
  },
  {
    id: 6,
    timeStamp: "2023-02-12",
    tipo: "LOG",
    name: "Pedro Martin",
    motivo: "Cierre por inactividad",
    sistema: "COTIZA",
    acciones: "Ver Detalles"
  },
  {
    id: 7,
    timeStamp: "2023-02-17",
    tipo: "LOG",
    name: "Andres Dordi",
    motivo: "Inicio de sesion exitoso",
    sistema: "LABORA",
    acciones: "Ver Detalles"
  },
  {
    id: 8,
    timeStamp: "2023-02-07",
    tipo: "LOG",
    name: "Lucio Bertolini",
    motivo: "Cierre por inactividad",
    sistema: "FARMA",
    acciones: "Ver Detalles"
  },
  {
    id: 9,
    timeStamp: "2023-08-09",
    tipo: "MODIFI",
    name: "Andres dordi",
    motivo: "Inicio de sesion exitoso",
    sistema: "LABORA",
    acciones: "Ver Detalles"
  },
  {
    id: 10,
    timeStamp: "2023-08-11",
    tipo: "ERROR",
    name: "Pedro Martin",
    motivo: "Inicio de sesion exitoso",
    sistema: "FARMA",
    acciones: "Ver Detalles"
  },
  {
    id: 11,
    timeStamp: "2021-07-10",
    tipo: "MODIFI",
    name: "Lucio Bertolini",
    motivo: "generacion de tickets de Sistema ",
    sistema: "COTIZA",
    acciones: "Ver Detalles"
  },
  {
    id: 12,
    timeStamp: "2023-02-04",
    tipo: "ERROR",
    name: "Andres dordi",
    motivo: "inicio de sesion",
    sistema: "LABORA",
    acciones: "Ver Detalles"
  },
  {
    id: 13,
    timeStamp: "2023-03-08",
    tipo: "LOG",
    name: "Lucio bertolini",
    motivo: "Cierre de Sesion por inactividad",
    sistema: "FARMA",
    acciones: "Ver Detalles"
  },
  {
    id: 14,
    timeStamp: "2023-05-12",
    tipo: "MODIFI",
    name: "Pedro Martin",
    motivo: "Cierre de sesion de manera exitosa",
    sistema: "FARMA",
    acciones: "Ver Detalles"
  },
  {
    id: 15,
    timeStamp: "2023-02-07",
    tipo: "LOG",
    name: "Lucio Bertolini",
    motivo: "Cierre por inactividad",
    sistema: "FARMA",
    acciones: "Ver Detalles"
  },
  {
    id: 16,
    timeStamp: "2023-08-09",
    tipo: "MODIFI",
    name: "Andres dordi",
    motivo: "Inicio de sesion exitoso",
    sistema: "LABORA",
    acciones: "Ver Detalles"
  },
  {
    id: 17,
    timeStamp: "2023-08-11",
    tipo: "ERROR",
    name: "Pedro Martin",
    motivo: "Inicio de sesion exitoso",
    sistema: "FARMA",
    acciones: "Ver Detalles"
  },
  {
    id: 18,
    timeStamp: "2021-07-10",
    tipo: "MODIFI",
    name: "Lucio Bertolini",
    motivo: "generacion de tickets de Sistema ",
    sistema: "COTIZA",
    acciones: "Ver Detalles"
  },
  {
    id: 19,
    timeStamp: "2023-02-04",
    tipo: "ERROR",
    name: "Andres dordi",
    motivo: "inicio de sesion",
    sistema: "LABORA",
    acciones: "Ver Detalles"
  },
  {
    id: 20,
    timeStamp: "2023-03-08",
    tipo: "LOG",
    name: "Lucio bertolini",
    motivo: "Cierre de Sesion por inactividad",
    sistema: "FARMA",
    acciones: "Ver Detalles"
  },
  {
    id: 21,
    timeStamp: "2023-05-12",
    tipo: "MODIFI",
    name: "Pedro Martin",
    motivo: "Cierre de sesion de manera exitosa",
    sistema: "FARMA",
    acciones: "Ver Detalles"
  },


]


// const data = [
//   {
//     id: 1,
//     timeStamp: "08/01/23",
//     tipo: "LOG",
//     name: "Pedro Martin",
//     motivo: "Inicio de sesion exitoso",
//     sistema: "COTIZA",
//     acciones: "Ver Detalles"
//   },
//   {
//     id: 2,
//     timeStamp: "18/08/23",
//     tipo: "LOG",
//     name: "Lucio Bertolini",
//     motivo: "Inicio de sesion fallido",
//     sistema: "FARMA",
//     acciones: "Ver Detalles"
//   },
//   {
//     id: 3,
//     timeStamp: "09/01/23",
//     tipo: "MODIFI",
//     name: "Andres dordi",
//     motivo: "Inicio de sesion exitoso",
//     sistema: "LABORA",
//     acciones: "Ver Detalles"
//   },
//   {
//     id: 4,
//     timeStamp: "01/02/23",
//     tipo: "ERROR",
//     name: "Lucio Bertolini",
//     motivo: "Cierre por inactividad",
//     sistema: "FARMA",
//     acciones: "Ver Detalles"
//   },
//   {
//     id: 5,
//     timeStamp: "22/01/23",
//     tipo: "ERROR",
//     name: "Andres dordi",
//     motivo: "Inicio de sesion exitoso",
//     sistema: "LABORA",
//     acciones: "Ver Detalles"
//   },
//   {
//     id: 5,
//     timeStamp: "18/02/23",
//     tipo: "LOG",
//     name: "Lucio Bertolibi",
//     motivo: "Cierre por inactividad",
//     sistema: "FARMA",
//     acciones: "Ver Detalles"
//   },
//   {
//     id: 6,
//     timeStamp: "12/02/23",
//     tipo: "LOG",
//     name: "Pedro Martin",
//     motivo: "Cierre por inactividad",
//     sistema: "COTIZA",
//     acciones: "Ver Detalles"
//   },
//   {
//     id: 7,
//     timeStamp: "17/02/23",
//     tipo: "LOG",
//     name: "Andres Dordi",
//     motivo: "Inicio de sesion exitoso",
//     sistema: "LABORA",
//     acciones: "Ver Detalles"
//   },
//   {
//     id: 8,
//     timeStamp: "07/02/23",
//     tipo: "LOG",
//     name: "Lucio Bertolini",
//     motivo: "Cierre por inactividad",
//     sistema: "FARMA",
//     acciones: "Ver Detalles"
//   },
//   {
//     id: 9,
//     timeStamp: "09/08/23",
//     tipo: "MODIFI",
//     name: "Andres dordi",
//     motivo: "Inicio de sesion exitoso",
//     sistema: "LABORA",
//     acciones: "Ver Detalles"
//   },
//   {
//     id: 10,
//     timeStamp: "11/08/23",
//     tipo: "ERROR",
//     name: "Pedro Martin",
//     motivo: "Inicio de sesion exitoso",
//     sistema: "FARMA",
//     acciones: "Ver Detalles"
//   },
//   {
//     id: 11,
//     timeStamp: "10/07/21",
//     tipo: "MODIFI",
//     name: "Lucio Bertolini",
//     motivo: "generacion de tickets de Sistema ",
//     sistema: "COTIZA",
//     acciones: "Ver Detalles"
//   },
//   {
//     id: 12,
//     timeStamp: "04/02/23",
//     tipo: "ERROR",
//     name: "Andres dordi",
//     motivo: "inicio de sesion",
//     sistema: "LABORA",
//     acciones: "Ver Detalles"
//   },
//   {
//     id: 13,
//     timeStamp: "08/03/23",
//     tipo: "LOG",
//     name: "Lucio bertolini",
//     motivo: "Cierre de Sesion por inactividad",
//     sistema: "FARMA",
//     acciones: "Ver Detalles"
//   },
//   {
//     id: 14,
//     timeStamp: "12/05/23",
//     tipo: "MODIFI",
//     name: "Pedro Martin",
//     motivo: "Cierre de sesion de manera exitosa",
//     sistema: "FARMA",
//     acciones: "Ver Detalles"
//   },
//   {
//     id: 15,
//     timeStamp: "07/02/23",
//     tipo: "LOG",
//     name: "Lucio Bertolini",
//     motivo: "Cierre por inactividad",
//     sistema: "FARMA",
//     acciones: "Ver Detalles"
//   },
//   {
//     id: 16,
//     timeStamp: "09/08/23",
//     tipo: "MODIFI",
//     name: "Andres dordi",
//     motivo: "Inicio de sesion exitoso",
//     sistema: "LABORA",
//     acciones: "Ver Detalles"
//   },
//   {
//     id: 17,
//     timeStamp: "11/08/23",
//     tipo: "ERROR",
//     name: "Pedro Martin",
//     motivo: "Inicio de sesion exitoso",
//     sistema: "FARMA",
//     acciones: "Ver Detalles"
//   },
//   {
//     id: 18,
//     timeStamp: "10/07/21",
//     tipo: "MODIFI",
//     name: "Lucio Bertolini",
//     motivo: "generacion de tickets de Sistema ",
//     sistema: "COTIZA",
//     acciones: "Ver Detalles"
//   },
//   {
//     id: 19,
//     timeStamp: "04/02/23",
//     tipo: "ERROR",
//     name: "Andres dordi",
//     motivo: "inicio de sesion",
//     sistema: "LABORA",
//     acciones: "Ver Detalles"
//   },
//   {
//     id: 20,
//     timeStamp: "08/03/23",
//     tipo: "LOG",
//     name: "Lucio bertolini",
//     motivo: "Cierre de Sesion por inactividad",
//     sistema: "FARMA",
//     acciones: "Ver Detalles"
//   },
//   {
//     id: 21,
//     timeStamp: "12/05/23",
//     tipo: "MODIFI",
//     name: "Pedro Martin",
//     motivo: "Cierre de sesion de manera exitosa",
//     sistema: "FARMA",
//     acciones: "Ver Detalles"
//   },


// ]
const paginacionOpciones = {
  rowsPerPageText: 'Filas por Página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos',
}

class App extends Component {
  state = {
    busqueda: '',
    empleados: data,
    columnas: [],
    empleadosFiltrados: data,
    tipoSeleccionado: 'Todos',
    tipoSistemaSeleccionado: 'Todos',
    tipos: data,
    selectedRow: null,
  };

  handleTipoChange = (tipo) => {
    if (tipo === 'Todos') {
      this.setState({
        tipoSeleccionado: tipo,
        empleadosFiltrados: this.state.empleados, // Restablecer empleados filtrados a todos los datos
      });
    } else {
      const empleadosFiltradosPorTipo = this.state.empleados.filter(item => item.tipo === tipo);

      this.setState({
        tipoSeleccionado: tipo,
        empleadosFiltrados: empleadosFiltradosPorTipo,
      });
    }
  };

  /**
   * XXX 
   * 
   * Aca queda ver el caso en que hayas filtrado por Tipo (LOG, ERROR, etc)
   * y pongas TODOS en los sistemas despues de haber filtrado por COTIZA, por ejemplo.
   * 
  */
  handleTipoSistemaChange = (tipo) => {
    if (tipo === 'Todos') {
      this.setState({
        tipoSistemaSeleccionado: tipo,
        empleadosFiltrados: this.state.empleados, // Restablecer empleados filtrados a todos los datos
      });
    } else {
      /**
       * Aca puede pasar que se haya filtrado anteriormente por un sistema que no tuviese coincidencias, por lo tanto
       * tomamos el total de empleado SIN filtrar para realizar la busqueda nuevamente. Sino, no tendriamos datos que buscar.
       * 
       * Arriba deberias tener en cuenta lo mismo. Hace la prueba, filtra primero por LOG y luego por ERROR.
       * Aunque tenes datos para coincidir con ERROR, no te los muestra.
       */
      const _empleados = this.state.empleados.filter(item => item.tipo === this.state.tipoSeleccionado);
      const empleadosFiltradosPorTipoSistema = _empleados.filter(item => item.sistema === tipo);


      // const _empleadosSistema = this.state.empleados.filter(item => item.sistema === this.state.tipoSeleccionado);
      // const empleadosFiltradosPorSistema = _empleadosSistema.filter(item => item.tipo === sistema);

      this.setState({
        tipoSistemaSeleccionado: tipo,
        empleadosFiltrados: empleadosFiltradosPorTipoSistema,
        //empleadosFiltrados: empleadosFiltradosPorSistema,
      });
    }
  };

  // filtrarElementos = () => {
  //   const { tipoSeleccionado, empleados } = this.state;

  //   const empleadosFiltradosPorTipo = tipoSeleccionado === 'Todos'
  //     ? empleados
  //     : empleados.filter(item => item.tipo === tipoSeleccionado);

  // };

  filtrarElementos = () => {
    const search = data.filter(item => {
      if (
        item.timeStamp.toLowerCase().includes(this.state.busqueda) ||
        item.tipo.toLowerCase().includes(this.state.busqueda) ||
        item.name.toLowerCase().includes(this.state.busqueda) ||
        item.motivo.toLowerCase().includes(this.state.busqueda) ||
        item.sistema.toLowerCase().includes(this.state.busqueda) ||
        item.acciones.toLowerCase().includes(this.state.busqueda)
      ) {
        return true;
      }
      return false;
    });

    const tiposFiltro = this.state.empleadosFiltrados.filter((item) => {
      return this.state.tipoSeleccionado === 'Todos' || item.tipo === this.state.tipoSeleccionado;
    });

    this.setState({ empleados: search, empleadosFiltrados: tiposFiltro });
  };


  actualizarElementosFiltrados = (elementosFiltradosPorTipo) => {
    this.setState({ empleadosFiltrados: elementosFiltradosPorTipo });
  };

  onChange = async e => {
    e.persist();
    await this.setState({ busqueda: e.target.value });
    this.filtrarElementos();
  }
  asignarColumnas = () => {
    const columnas = [
      {
        name: 'TIMESTAMP',
        selector: row => row.timeStamp
      },
      {
        name: 'TIPO',
        selector: row => row.tipo
      },
      {
        name: 'NAME',
        selector: row => row.name
      },
      {
        name: 'MOTIVO',
        selector: row => row.motivo
      },
      {
        name: 'SISTEMA',
        selector: row => row.sistema
      },
      {
        name: 'ACCIONES',
        cell: row => (
          <button className="btn-ver-detalles" onClick={() => this.verDetalles(row)}>
            Ver Detalles
          </button>
        ),
      },
    ];
    this.setState({ columnas: columnas });
  }

  verDetalles = (row) => {
    this.setState({ selectedRow: row });
  };

  cerrarDetalles = () => {
    this.setState({ selectedRow: null });
  };



  crearIndex = () => {
    var contador = 1;
    data.map(elemento => {
      elemento["id"] = contador;
      contador++;
      return elemento;
    });
  }

  componentDidMount() {
    this.crearIndex();
    this.asignarColumnas();
    this.setState({ empleados: data, empleadosFiltrados: data });
  }

  render() {
    const { tipoSeleccionado, empleadosFiltrados } = this.state;
    const TABLE_TITLE = "Surfactan";
    const fixedHeaderScrollHeight = "600px";
    return (
      <div>
        {this.state.selectedRow ?
          <div>
            {this.state.selectedRow && (
              <DetallesEmpleado empleado={this.state.selectedRow} onClose={this.cerrarDetalles} />
            )}
          </div>
          :
          <div className="table-responsive" >
            <div className="barraBusqueda">
              <input
                type="text"
                placeholder="Buscar"
                className="textField"
                name="busqueda"
                value={this.state.busqueda}
                onChange={this.onChange}
              />
              <button type="button" className="btnBuscar" /*onClick={onClear}*/>
                {" "}
                <FontAwesomeIcon icon={faSearch} />
              </button>
              <div className='filtros-container'>
                <div className='filtro-column'>
                  <TiposFiltro
                    tipoSeleccionado={this.state.tipoSeleccionado}
                    handleTipoChange={this.handleTipoChange} className="filtro"
                  />
                </div>
                <div className='filtro-column'>
                  <TiposSistema
                    tipoSeleccionado={this.state.tipoSeleccionado} handleTipoChange={this.handleTipoSistemaChange} className="filtro" />
                </div>
                <div className='filtro-column'>
                  <FiltradoFechas data={this.state.empleadosFiltrados} actualizarElementosFiltrados={this.actualizarElementosFiltrados} className="filtro"
                  />
                </div>

              </div>
            </div>

            <DataTable
              columns={this.state.columnas}
              data={empleadosFiltrados}
              title={TABLE_TITLE}
              pagination
              paginationComponentOptions={paginacionOpciones}
              fixedHeader
              fixedHeaderScrollHeight={fixedHeaderScrollHeight}
              noDataComponent={<span>No se encontró ningún elemento</span>}
            />
          </div>
        }
      </div>

    )
  }
}


export default App;
