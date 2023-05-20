import React from 'react'

export const Ejerciciosexto = () => {
  return (
      <>
          <div class="card">
              <div class="card-header">
                  ejerciciosexto
              </div>
              <div class="card-body">
                  <h5 class="card-title"> preciona el boton para mostrar los dias de la semana en amayuscula</h5>
                  <input class="form-control" type="number" id='numero' aria-label="readonly input example" readonly></input>

                  <button href="#" onClick={() => {
                      const diasLaborables = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

                      const diasMayusculas = diasLaborables.map(function (dia) {
                          return dia.toUpperCase();
                      });

                      alert(diasMayusculas);
                  }} class="btn btn-primary">Pasar a mayuscula</button>
              </div>
          </div>
      </>
  )
}
