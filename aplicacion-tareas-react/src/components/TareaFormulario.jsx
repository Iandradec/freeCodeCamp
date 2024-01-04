import React from "react";
import "../style-sheet/TareaFormulario.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  // hook par ausar estado
  const [input, setInput] = useState("");

  // --------------------------------------------------------------
  // funcion para manejar lo que se escribe en el fomulario
  const manejarCambio = (e) => {
    // console.log('escribiendo....');
    // cada vez qeu se scribe una letra actusliza el texto para asignarlo al valor del input
    setInput(e.target.value);
    // console.log(e.target.value);
  };

  // --------------------------------------------------------------
  //  evita que la pagina se recargue cuandonse envia el formulario
  // maneja cuando se lo envia el formulario
  const manejarEnvio = (e) => {
    // evita que se cargue la pagina al enviar el formulario
    e.preventDefault();

    console.log("enviadno formulario");
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    props.onSubmit(tareaNueva);
  };

  // --------------------------------------------------------------
  // formularios de envio
  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una Tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}

export default TareaFormulario;
