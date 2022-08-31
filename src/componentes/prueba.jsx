
import "../estilos/EstilosMaterias.css"



function Pueba({materia, cambio}) {

 
      
  return (
    <div className="App">
      {materia.map(function(materias, index){

          materias.condiciones.map(function(con, index){
            console.log(con)
            console.log(con[index] + materias.estado)
             if(con.index === materias.estado){
                console.log("anda")
             }
          })


        return( 
    
        <div key={index}>
        <h1 className={materias.estado} >{materias.nombre}</h1>
          <button onClick={() => cambio(materias.id, "aprobado")}>a</button>
          <button onClick={() => cambio(materias.id, "regular")}>r</button>
          
        </div>)
      }
      )}

    
    
    
    </div>
  );
}

export default Pueba