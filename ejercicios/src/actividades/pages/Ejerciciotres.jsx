import React from 'react'

export const Ejerciciotres = () => {
  return (
      <>
          <div class="card">
              <div class="card-header">
                  ejerciciotres
              </div>
              <div class="card-body">
                  <h5 class="card-title">Ingrese la cadena</h5>
                 

                  <button href="#" onClick={() => {
                      // DECLARAMOS UNA VARIABLE DONDE VAMOS A CONCATENAR LAS CADENAS
                      var resultado = ""
                      // BUCLE DO WHILE PARA INTRODUCIR VARIAS CADENAS
                      do {
                          // PEDIMOS LA CADENA POR TECLADO
                          var cadena = prompt("Introduce una cadena");
                          // SI LA VARIABLE RESULTADO ESTÁ VACÍA
                          if (resultado == "") {
                              // CONCATENAMOS SIN UTILIZAR GUIÓN
                              resultado = resultado + cadena;
                          }
                          // SINÓ
                          else {
                              // CONCATENAMOS CON GUIÓN
                              resultado = resultado + "-" + cadena;
                          }
                          // MIENTRAS SE PULSE ACEPTAR EN EL MENSAJE EMERGENTE CONFIRM
                      } while (confirm("Desea seguir?"));
                      // SI SE PULSÓ CANCELAR IMPRIMIMOS EL RESULTADO 
                      alert(resultado); 
                     
                  }} class="btn btn-primary">asignar cadena</button>
              </div>
          </div>
      </>
  )
}
