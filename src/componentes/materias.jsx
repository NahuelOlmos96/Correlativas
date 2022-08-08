import React,{ useState } from 'react';
import "../estilos/estilosMatrias.css"
import { Analisis1 } from './Analisis1';


export const Materias = () =>{

    const[claseMateria,setClaseMateria] = useState()


    const consultaEStado = (estado )=>{
        
        

       
        
        
    
    }

    console.log()
    return(    
        <div className='contendorMaterias'>
           <div className={claseMateria}>
           <Analisis1  consultarEstado={(estado)=>consultaEStado(estado) }  />
           </div> 
            
        </div>
    );
} 