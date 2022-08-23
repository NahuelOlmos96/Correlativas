import React, {useState} from 'react';
import { useEffect } from 'react';
    
export const Materias = (props) =>{

    const[claseMatria,setClaseMateria] = useState()
    const[claseEstado,setClaseEstado] = useState("")






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

   

    useEffect(()=>{
        switch(props.estadomateria){
            case 1 :
                setClaseEstado("cursar")
                break;
            case 2 :
                setClaseEstado("");
                break;    
       } 
    },[claseEstado, props.estadomateria])

    return(
        <div>
            <button onClick={()=>{props.consultarEstado(1) || estado(1)}} >aprobada</button>
            <button onClick={()=>{props.consultarEstado(2) || estado(2)}} >regular</button>
            <button onClick={()=>{props.consultarEstado(3) || estado(3)}} >no aprobada </button>

           <div className={claseEstado}>
            <p className={claseMatria}>{props.materia }</p>
            </div>
        </div>
    );
} 