import React, {useState } from 'react';
import './App.css';
import Pueba from './componentes/prueba';

import materias  from './datos/materias'


function App() {

  const[materia,setMaterias] = useState(materias)

    
  
        
    

      function cambio(num, estadoCambiar){

          const newArray = materia.map((comprovador)=>
            {
              if (comprovador.id === num){
              comprovador.estado = estadoCambiar;
              
            }
            return comprovador
          })
          
          
          setMaterias(newArray)
        
      } 


  
  return (
    <div className="App container">

   
      
      <Pueba cambio={cambio}   
       materia={materia}/>
    </div>
  );
}

export default App;

