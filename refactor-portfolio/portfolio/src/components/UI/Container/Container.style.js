import styled, { css } from "styled-components";

// Define un contenedor con estilo que centralizará sus elementos hijos y aplicará una sombra.
const ContainerWrapper = styled.div`
  margin-left: auto; // Centra el contenedor horizontalmente
  margin-right: auto; // Centra el contenedor horizontalmente
  // box-shadow: 0 1px 20px rgba(0, 0, 0, 3); // Aplica sombra alrededor del contenedor para profundidad

  // Aplica un ancho del 100% si la prop fullWidth es true
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      max-width: none !important;
    `};

  // Si noGutter es true, no hay padding. De lo contrario, establece padding estándar y ajusta para móviles.
  ${(props) =>
    (props.noGutter &&
      css`
        padding-left: 0;
        padding-right: 0;
      `) ||
    css`
      padding-left: 30px;
      padding-right: 30px;

      // Ajusta el padding para pantallas pequeñas
      @media (max-width: 480px) {
        padding-left: 25px;
        padding-right: 25px;
      }
    `};

  // Aplica un diseño fluido si la prop flui es true
  ${(props) =>
    props.fluid &&
    css`
      width: 100% !important;
      max-width: 1920px !important;
      // Ajusta el padding para pantallas grandes
      @media (min-width: 1441px) {
        padding-left: 75px;
        padding-right: 75px;
      }
    `}

  // Media queries para responsividad, ajustando el ancho máximo en diferentes puntos de ruptura
  @media (min-width: 768px) {
    max-width: 750px;
    // max-width: 1270px;
  }
  @media (min-width: 992px) {
    max-width: 970px;
    // max-width: 1270px;
  }
  @media (min-width: 1200px) {
    max-width: 1170px;
  }
`;

export default ContainerWrapper;
