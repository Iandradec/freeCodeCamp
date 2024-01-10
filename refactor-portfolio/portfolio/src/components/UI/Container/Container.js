import React from "react"; // Importa React para poder usar JSX
import PropTypes from "prop-types"; // Importa PropTypes para la validación de tipos
import ContainerWrapper from "./Container.style"; // Importa el componente de estilo

// Define el componente Container con las props especificadas
const Container = ({ children, className, fullWidth, noGutter, fluid }) => {
  // Renderiza el ContainerWrapper pasando las props y envolviendo los children
  return (
    // <ContainerWrapper style={{ border: "2px solid green" }}
    <ContainerWrapper
      className={className} // Permite personalizar la clase CSS
      fullWidth={fullWidth} // Controla si el contenedor debe ocupar todo el ancho
      noGutter={noGutter} // Controla si el contenedor debe tener padding o no
      fluid={fluid} // Controla si el contenedor debe ser fluido (100% ancho hasta un máximo establecido)
    >
      {children}
      {/* // Esto renderizará cualquier contenido que se pase entre las      etiquetas de Container */}
    </ContainerWrapper>
  );
};

// Define los tipos de las props para validar y documentar lo que el componente espera recibir
Container.propTypes = {
  className: PropTypes.string, // Puede recibir una cadena para la clase CSS
  fullWidth: PropTypes.bool, // Puede recibir un booleano para el ancho completo
  noGutter: PropTypes.bool, // Puede recibir un booleano para no tener gutter (padding)
};

export default Container; // Exporta el componente para que pueda ser utilizado en otros archivos
