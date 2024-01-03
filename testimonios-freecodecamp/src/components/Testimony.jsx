import React from "react";
import "../style-sheet/Testimony.css";

// la idea de los props es para que sean reutilizables, de esa maner podemos usas el mismo
// componentes pero cambia el valor de cada seccion, PODP = PROPIEDADES
function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      {/* las comillas invertidas se puede insertar JS */}
      <img
        className="imagen-testimonio"
        src={require(`../images/testimonio-${props.imagen}.png`)}
        alt={`Foto de ${props.nombre}`}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;
