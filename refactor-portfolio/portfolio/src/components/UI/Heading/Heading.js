// Heading.js con comentarios
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
} from "styled-system";
import { base, themed } from "../Base";

// Define un componente de estilo para los encabezados, aplicando varias propiedades de estilo.
const HeadingWrapper = styled("p")(
  base,
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  themed("Heading")
);

// Componente funcional Heading que renderiza el contenido dentro de un HeadingWrapper.
const Heading = ({ content, ...props }) => (
  <HeadingWrapper {...props}>{content}</HeadingWrapper>
);
// Define los tipos de propiedades esperados para Heading, incluyendo que content puede ser una cadena o elemento.

Heading.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  fontFamily: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  ]),
  fontWeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  ]),
  textAlign: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  ]),
  lineHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  ]),
  letterSpacing: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  ]),
  ...base.propTypes,
};

// Establece los valores predeterminados para algunas propiedades, como el tipo de encabezado y el margen.
Heading.defaultProps = {
  as: "h2",
  mt: 0,
  mb: "500px",
  fontWeight: 700,
};

export default Heading;
