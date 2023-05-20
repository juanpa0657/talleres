import React from 'react'

export const Ejercicioseptimo = () => {
  return (
      <>
          <div class="card">
              <div class="card-header">
                  ejercicioseptimo
              </div>
              <div class="card-body">
                  <h5 class="card-title">mostrara un array con 10 numeros,luego se mostrara pares e impares por separado</h5>
                  

                  <button href="#" onClick={() => {
                      var numeros = new Array(10);
                      numeros = [2, 4, 3, 7, 1, 21, 9, 25, 10, 12];
                      pares = []
                      impares = []
                      var pares = numeros.filter((val) => val % 2 == 0);
                      var impares = numeros.filter((val) => val % 2 != 0);
                      alert("Array completa: " + numeros)
                      alert("pares" + pares);
                      alert("impares" + impares);
                  }} class="btn btn-primary">calcular array</button>
              </div>
          </div>
      </>
  )
}
