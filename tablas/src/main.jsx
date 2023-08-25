import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TiposFiltro from './components/TiposFiltro/TiposFiltro.jsx'
import TiposSistema from './components/TiposSistema/TiposSistema.jsx'
import FiltradoFechas from './components/FiltradoFechas/FiltradoFechas.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <TiposFiltro />
    <TiposSistema />
    <FiltradoFechas />
  </React.StrictMode>,
)
