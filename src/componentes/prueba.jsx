




function Pueba({materia, valor1 , valor2, cambio}) {

 
      
  return (
    <div className="App">
      {materia.map((materias, index) =>(
        <h1 key={index}>{materias.nombre}</h1>
      )
      )}

    <button onClick={() => cambio(valor1 , "fisica")}> boton poner valor 1 en fisica</button>
    <button onClick={() => cambio(valor1, "algebra")}>boton poner valor 1 en algebras</button>
    <button onClick={() => cambio(valor2, "matematicas")}>boton poner valor 2 en matematicas</button>
    <button onClick={() => cambio(valor2, "ingles")}> boton poner valor 2 en ingles</button>
    
    </div>
  );
}

export default Pueba