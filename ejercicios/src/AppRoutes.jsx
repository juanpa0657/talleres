import React from 'react'
import { EjercicioUno } from './actividades/pages/ejercicioUno'
import { Ejerciciodos } from './actividades/pages/Ejerciciodos'
import { Ejerciciotres } from './actividades/pages/Ejerciciotres'
import { Ejerciciocuantro } from './actividades/pages/Ejerciciocuantro'
import { Ejercicioquinto } from './actividades/pages/Ejercicioquinto'
import { Ejerciciosexto } from './actividades/pages/Ejerciciosexto'
import { Ejercicioseptimo } from './actividades/pages/Ejercicioseptimo'

import { Route,Routes } from 'react-router-dom'
import { EjercicioOcho } from './actividades/pages/EjercicioOcho'
import { EjercicicoNoveno } from './actividades/pages/EjercicicoNoveno'
import { EjercicioDecimo } from './actividades/pages/EjercicioDecimo'
export const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='ejeruno' element={<EjercicioUno/>}/>
        <Route path='ejerdos' element={<Ejerciciodos/>}/>
        <Route path='ejertres' element={<Ejerciciotres/>}/>
        <Route path='ejercuatro' element={<Ejerciciocuantro/>}/>
        <Route path='ejerquinto' element={<Ejercicioquinto />} />
        <Route path='ejersexto' element={<Ejerciciosexto/>} />
        <Route path='ejerseptimo' element={<Ejercicioseptimo />} />
        <Route path='ejerOcho' element={<EjercicioOcho/>} />
        <Route path='ejerNoveno' element={<EjercicicoNoveno />} />
        <Route path='ejerDecimo' element={<EjercicioDecimo />} />
    </Routes>
    </>
  )
}
