import React from 'react'
import { EjercicioUno } from './actividades/pages/ejercicioUno'
import { Route,Routes } from 'react-router-dom'
export const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='ejeruno' element={<EjercicioUno/>}/>

  

  
    </Routes>
    </>
  )
}
