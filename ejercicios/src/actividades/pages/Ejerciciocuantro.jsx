import React from 'react'

export const Ejerciciocuantro = () => {
  return (
      <>
        
          <div class="card">
              <div class="card-header">
                  ejerciciocuantro
              </div>
              <div class="card-body">
                  <h5 class="card-title">Para ingresar numeros seleccione el boton </h5>
                  
                 
                  <button href="#"  onClick={() => {
                       var numbers = [];
                      var inputNumber;

    do {
        inputNumber = prompt("Ingrese un número:");

        if (inputNumber !== null) {
            var number = parseInt(inputNumber);

            if (isNaN(number)) {
                alert('¡Debe ingresar un número válido!');
            } else {
                numbers.push(number);
            }
        }
    } while (inputNumber !== null);

    var sum = numbers.reduce(function (acc, curr) {
        return acc + curr;
    }, 0);

    alert('La suma total es: ' + sum);
                  } } class="btn btn-primary">boton</button>
              </div>
          </div>
      </>
  
  )
}
