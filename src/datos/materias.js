var materias = [
  {
    id: 1,
    nombre: "matematicas",
    estado: "desaprobadas",
    condiciones: [{ iniaciales: "aprobado" }]
  },
  {
    id: 2,
    nombre: "algebra",
    estado: "desaprobado",
    condiciones: [{ iniaciales: "aprobado" }]
  },
  {
    id: 3,
    nombre: "analisi2",
    estado: "desaprobado",
    condiciones: [{ matematicas: "aprobado", algrebra: "aprobado" }],
  },
];

export default materias;
