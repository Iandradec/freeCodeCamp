import styled from 'styled-components';

const NombreWrapper = styled.div`
  font-family: 'Helvetica Neue', sans-serif; // Suponiendo Helvetica Neue como fuente
  color: #FFF; // Color blanco para el texto
  font-size: 2em; // Tamaño de fuente grande, ajustar según sea necesario
  text-transform: uppercase; // Todas las letras en mayúscula
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); // Sombra suave para dar profundidad
  text-align: center; // Alineación central del texto
  position: absolute; // Posición absoluta para ubicarlo sobre una imagen de fondo
  top: 50%; // Centrar verticalmente
  left: 50%; // Centrar horizontalmente
  transform: translate(-50%, -50%); // Ajuste para centrar exactamente en el centro
  max-width: 80%; // Máximo ancho del contenedor
  line-height: 1.2; // Espaciado de línea para una mejor legibilidad
  cursor: pointer; // El cursor cambia a puntero para indicar interactividad

  &:hover {
    text-shadow: 0px 6px 6px rgba(0, 0, 0, 0.3); // Sombra más profunda en hover
  }

  @media (max-width: 768px) {
    font-size: 1.5em; // Tamaño de fuente más pequeño para pantallas estrechas
  }
`;

export default NombreWrapper;