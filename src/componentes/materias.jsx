import React from 'react';
import "../estilos/estilosMatrias.css"
import { Analisis1 } from './Analisis1';
export const Materias = () =>{
        
    const consultaEStado = (estado )=>{
        

        if(estado === 1){
            console.log(estado)
        }else{
            console.log("nose")
        }
        

    
    }
    return(    
        <div className='contendorMaterias'>
            <Analisis1  consultarEstado={(estado)=>consultaEStado(estado) }  />
            
        </div>
    );
} 