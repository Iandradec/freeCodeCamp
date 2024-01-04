import React from "react";
import "../style-sheet/Boton.css";

function Boton(props) {
  // esta funcion nos devuelve un true o un false
  const esOperador = (valor) => {
    // si no es un numero, tampoco es un signo ".", pero tampoco es el signo "="
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  return (
    // los componentes pueden tener etiquetas de apertura y cierre, la clase es conformada por javascript
    // la clase es mas interactiva, si es un operador el fondoes  verde, si es un numero otro color distinto
    // {} dento de classname -> templates literal
    // si esOperador es true, todo se reemplaza por operador
    // si esOperador es false, se regresa null y no cambia las clases
    // trimEnd me quita espacio innecesario entre las class name de css
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}
      // el onlcick es llamar a una funcion anonima, se llama una funcion nueva
      // que no toma ningun parametro, y retorna el resultado de llamr a la funcion
    >
      {props.children}
    </div>
  );
}

export default Boton;
