import React from 'react'

export const EjercicioOcho = () => {
  return (
      <>
          <div class="card">
              <div class="card-header">
                  ejercicioOctavo
              </div>
              <div class="card-body">
                  <h5 class="card-title">Rotar</h5>
                  <input class="form-control" type="number" id='numero' aria-label="readonly input example" readonly></input>

                  <button href="#" onClick={() => {
                      let ocupados = ['mauricio', 'Luisa', 'Juan', 'Ana'];
                      let libres = ['jessica', 'alejandro', 'Alba', 'Felipe'];
                      rotar(ocupados, libres)
                      function rotar(lst1, lst2) {

                          lst1.push(libres[0])
                          lst2.push(ocupados[0])
                      }

                      alert(libres);

                      alert(ocupados);
                  }} class="btn btn-primary">Ejecutar Rotacion</button>
              </div>
          </div>
      </>
  )
}
