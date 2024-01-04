import React from "react";
import "../style-sheet/Pantalla.css";

const Pantalla = ({ input }) => (
  // contenedor del componente pantalla
  // se define como const para que no se pueda reasignar el valor de pantalla
  // la felcah devuelve lo que este dentro de los parentesis
  <div className="input">{input}</div>
);

export default Pantalla;
