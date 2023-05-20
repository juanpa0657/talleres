import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { EjercicioUno } from './actividades/pages/ejercicioUno.jsx'
import { Ejerciciodos } from './actividades/pages/Ejerciciodos.jsx'
import { Ejerciciotres } from './actividades/pages/Ejerciciotres.jsx'
import { Ejerciciocuantro } from './actividades/pages/Ejerciciocuantro.jsx'
import { Ejercicioquinto } from './actividades/pages/Ejercicioquinto.jsx'
import { Ejerciciosexto } from './actividades/pages/Ejerciciosexto.jsx'
import { Ejercicioseptimo } from './actividades/pages/Ejercicioseptimo.jsx'
import { EjercicioOcho } from './actividades/pages/EjercicioOcho.jsx'
import { EjercicicoNoveno } from './actividades/pages/EjercicicoNoveno.jsx'
import { EjercicioDecimo } from './actividades/pages/EjercicioDecimo.jsx'
import {BrowserRouter} from 'react-router-dom'
import { AppRoutes } from './AppRoutes.jsx'
import { Navbar } from './actividades/pages/navbar.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Navbar/>
    <BrowserRouter>
     <AppRoutes/>
    </BrowserRouter>
  
  </React.StrictMode>,
)
