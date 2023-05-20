import React from 'react'

export const EjercicioUno = () => {
  return (
    
    <> 
          <div class="card">
              <div class="card-header">
                  ejercicioUno
              </div>
              <div class="card-body">
                  <h5 class="card-title">Ingrese la edad</h5>
                  <input class="form-control" type="number" id='numero' aria-label="readonly input example" readonly></input>
                 
                  <button href="#"  onClick={() => {
                    var edad= parseInt(document.getElementById('numero').value)
                    // console.log(edad)
                    if (edad>=18  & edad <= 100)
                    {
                        alert('puedes conducir')
                    }
                    else if (edad <= 17)
                    {
                        alert('No puedes conducir')
                    }
                    else{
                        alert('Error formato no valido')
                    }
                  } } class="btn btn-primary">calcular</button>
              </div>
          </div>
    </>

  )
}
