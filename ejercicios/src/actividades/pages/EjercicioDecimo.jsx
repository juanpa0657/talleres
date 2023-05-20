import React from 'react'

export const EjercicioDecimo = () => {
  return (
      <>
          <div class="card" > 
              <div class="card-header">
                  ejercicio10
              </div>
              <div class="card-body">
                  <h5 class="card-title">  articulo  que hay en la tienda:carro, moto, cicla,patineta</h5>
                 

                  <button href="#" onClick={() => {
                      let imp = prompt("escriba que articulo")
                      function precio(art) {
                          let tienda = ['carro', 'moto', 'cicla', 'patineta'];
                          let precios = [1000000, 500000, 30000, 40000];
                          let resulatdo = -1;
                         
                          for (var i = 0; i < tienda.length; i++) {
                              if (tienda[i] === art) {
                                  return precios[i];
                              }
                          }

                          // Si el artículo no existe, devolver -1
                          return -1;
                      }


                      


                      alert("el precio de " + (imp) + "  " + precio(imp));
                  }} class="btn btn-primary">calcular articulo</button>
              </div>
          </div>
      </>

  )
}
