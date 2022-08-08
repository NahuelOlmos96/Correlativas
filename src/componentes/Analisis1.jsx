import React from 'react';
    
export const Analisis1 = (props) =>{

   

    return(
        <div>
            <button onClick={()=>{props.consultarEstado(1)}} ></button>
            <button onClick={()=>{props.consultarEstado(2)}} ></button>
           
            <p>Analisis1</p>
        </div>
    );
} 