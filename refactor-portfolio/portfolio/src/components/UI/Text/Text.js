// Text.js con comentarios
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

// Define un componente de estilo para los párrafos de texto, aplicando varias propiedades de estilo.
const TextWrapper = styled("p")(
  base,
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  themed("Text")
);

// Componente funcional Text que renderiza el contenido dentro de un TextWrapper.
const Text = ({ content, ...props }) => (
  <TextWrapper {...props}>{content}</TextWrapper>
);

// Define los tipos de propiedades esperados para Text, especificando que content es una cadena de texto.
Text.propTypes = {
  content: PropTypes.string,
  as: PropTypes.string,
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

// Establece los valores predeterminados para algunas propiedades, como el tipo de elemento y el margen.
Text.defaultProps = {
  as: "p",
  m: 0,
};

export default Text;
