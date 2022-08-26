import React, {useState } from 'react';
import './App.css';
import Pueba from './componentes/prueba';

import materias  from './materias'


function App() {

  const[materia,setMaterias] = useState(materias)

    
  const valor1 = 1
  const valor2 = 2
        
    console.log(materia)

      function cambio(num, nombreCambiar){

          const newArray = materia.map((comprovador)=>
            {
              if (comprovador.id === num){
              comprovador.nombre = nombreCambiar;
              
            }
            return comprovador
          })
          
          console.log(newArray)
          setMaterias(newArray)
        
      } 


  
  return (
    <div className="App container">

   
      
      <Pueba cambio={cambio}
       valor1={valor1}
       valor2={valor2}
       materia={materia}/>
    </div>
  );
}

export default App;

