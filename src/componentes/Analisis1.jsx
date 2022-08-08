import React, {useState} from 'react';
    
export const Analisis1 = (props) =>{

    const[claseMatria,setClaseMateria] = useState()

    const estado = (valor)=>{
        switch (valor){
            case 1 : 
                setClaseMateria("aprobado");
                break;
            case 2 : 
                setClaseMateria("regular");
                break;
            case 3 :
                setClaseMateria("noAprobado");
                break;
                
            }

    }

    return(
        <div>
            <button onClick={()=>{props.consultarEstado(1) || estado(1)}} >aprobada</button>
            <button onClick={()=>{props.consultarEstado(2) || estado(2)}} >regular</button>
            <button onClick={()=>{props.consultarEstado(3) || estado(3)}} >no aprobada </button>

           
            <p className={claseMatria}>Analisis1</p>
        </div>
    );
} 