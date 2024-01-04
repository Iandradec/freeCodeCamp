import React, { useState } from "react";
import "../style-sheet/ListaDeTareas.css";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";

function ListaDeTareas() {
  // el estado inicial de tareas va a ser un array vacio
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    // console.log("TAREA AGREGADA");
    // console.log(Tarea);
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      // para agregar al principio del arreglo
      // el operador ... lo convierte a objetos individuales
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    // fragmentos quen sirven para escribir la estructura de react
    // caso de uso cundo no queremos agregar un div adicional
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      {/* esta es una lista de componentes */}
      <div className="tareas-lista-contendor">
        {/* toma cada una de esas tareas y pasa cuna por una como argumento para otra funcion
        cada tarea se va a representar como un objeto en el arreglo (array) */}
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;
