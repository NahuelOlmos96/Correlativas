import React, { useState , useEffect} from 'react';
import "../estilos/estilosMatrias.css"
import { Materias } from './Analisis1';


export const AñosMaterias = () =>{

    const[analisis1,setAnalisis1] = useState()
    const[algebra,setAlgebra] = useState()
    const[analisis2,setAnalisis2] = useState()


    const EstadoAnalisi1 = (estado )=>{
        setAnalisis1(estado)    
    }

    const EstadoAlgebra = (estado )=>{
        setAlgebra(estado)
    }
    
    
    
        

     

    useEffect(() => {

        if (analisis1 === 1 && algebra === 1){
            setAnalisis2(1)       
        }else if(analisis1 === 2 && algebra === 2){
            setAnalisis2(1)
        }else if(analisis1 === 1 && algebra ===2){
            setAnalisis2(1)
        }else if(analisis1 === 2 && algebra ===1){
            setAnalisis2(1)
        }else {
            setAnalisis2(2)
        }
        
        
        
    },[algebra, analisis1 ,analisis2] );
   

    
    return(    
        <div className='contendorMaterias'>
           
            <Materias  
                    consultarEstado={(estado)=>EstadoAnalisi1(estado)}
                    materia = "analisis"
                />

            <Materias
                consultarEstado={(estado)=>EstadoAlgebra(estado)}
                materia = "algebra"
                />
            <Materias
                consultarEstado={(estado)=>EstadoAnalisi2(estado)}
                materia = "Analisis2"
                estadomateria = {analisis2}
                />

        </div> 
            
        
    );
} 