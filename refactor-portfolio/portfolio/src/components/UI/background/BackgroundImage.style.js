// BackgroundImage.style.js
import styled from "styled-components";

export const BackgroundImageWrapper = styled.div`
  width: 100%;
  min-height: 100vh; // Asegúrate de que ocupe toda la altura de la vista
  background-image: url(${(props) => props.imageSrc});
  background-size: cover; // Cubre todo el espacio disponible
  background-position: center center; // Centra la imagen en el contenedor
  position: relative; // Para posicionar el contenido de la búsqueda sobre la imagen
`;
