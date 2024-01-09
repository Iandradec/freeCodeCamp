// Importación de los hooks y contextos necesarios de React
import React, { createContext, useContext, useReducer } from "react";

// Creación del contexto LayoutContext, que se usará para proporcionar y consumir estado en la app
export const LayoutContext = createContext();

// Estado inicial del contexto, con la propiedad searchVisibility inicialmente en falso
const initialState = {
  searchVisibility: false,
};

// Reducer para manejar cambios en el estado. Define cómo cambia el estado en respuesta a acciones.
function reducer(state, action) {
  switch (action.type) {
    // Acción para mostrar la barra de búsqueda superior
    case "SHOW_TOP_SEARCHBAR":
      return {
        ...state,
        searchVisibility: true,
      };
    // Acción para ocultar la barra de búsqueda superior
    case "HIDE_TOP_SEARCHBAR":
      return {
        ...state,
        searchVisibility: false,
      };
    // Devuelve el estado actual si no se reconoce la acción
    default:
      return state;
  }
}

// Componente proveedor del contexto. Envuelve a los hijos y provee el estado y la función dispatch.
export default function LayoutProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <LayoutContext.Provider value={[state, dispatch]}>
      {children}
    </LayoutContext.Provider>
  );
}

// Hook personalizado para acceder fácilmente al contexto desde otros componentes.
export const useStateValue = () => useContext(LayoutContext);
