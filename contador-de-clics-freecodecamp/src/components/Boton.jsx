import React from "react";
import "../style-sheet/Boton.css";

// esta e suna sintasis de desestructuracion
// te refieres a la propiedad por su nombre
// evitas el uso de props.
function Boton({ texto, esBotonDeClic, esBotonDeReducir, manejarClic }) {
  return (
    // operador ternario me permite tomar decision en base a otro valor
    // condicional en una sola linea
    // <button
    //   className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
    //   onClick={manejarClic}
    <button
      className={
        esBotonDeClic
          ? "boton-clic"
          : esBotonDeReducir
          ? "boton-reducir"
          : "boton-reiniciar"
      }
      onClick={manejarClic}
    >
      {texto}
    </button>
  );
}

export default Boton;
