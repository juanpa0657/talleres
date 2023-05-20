import React from 'react'

export const EjercicicoNoveno = () => {
  return (
      <>
          <div class="card">
              <div class="card-header">
                  Ejercicio 9
              </div>
              <div class="card-body">
                  <h5 class="card-title">Presione el boton para mirar los Articulos disponibles </h5>

                  <button href="#" class="" onClick={() => {

                      let compra = new Array();
                      let pendientes = new Array();
                      compra = [
                          { articulo: 'Naranjas', estado: false },
                          { articulo: 'Manzanas', estado: true },
                          { articulo: 'Peras', estado: false },
                          { articulo: 'Plátanos', estado: true }
                      ];
                      compra.forEach(function (val) {
                          if (val.estado === false)


                              pendientes.push(val.articulo)

                      });
                      alert(pendientes)

                  }}

                  >Boton</button>
              </div>
          </div>

      </>
  )
}
