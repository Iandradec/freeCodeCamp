// Importaciones de React y componentes/personalizaciones necesarios
import React from "react";
import PropTypes from "prop-types";
import Heading from "components/UI/Heading/Heading";
import Text from "components/UI/Text/Text";
import Container from "components/UI/Container/Container";
import GlideCarousel from "components/UI/GlideCarousel/GlideCarousel";
import SearchForm from "./SearchForm";
import BannerWrapper, { SearchWrapper, DashboardWrapper } from "./Search.style";
import BackgroundImage from "components/UI/background/BackgroundImage";

// Componente funcional SearchArea con props para estilos personalizados
const SearchArea = ({ searchTitleStyle, searchDescriptionStyle }) => {
  return (
    // BannerWrapper: Contenedor del banner principal
    <BannerWrapper>
      {/* // GlideCarousel: Componente de carrusel para imágenes */}
      <GlideCarousel>
        <img
          src="/images/banner/10.jpeg"
          alt="Background"
          style={{ width: "100%", height: "auto" }}
        />
      </GlideCarousel>

      {/* // Container: Contenedor para los elementos de texto y formulario */}
      <Container>
        {/* // SearchWrapper: Contenedor de estilo para el área de búsqueda */}
        {/* <SearchWrapper> */}
        <DashboardWrapper>
          {/* // Heading: Componente de encabezado para título */}
          <Heading
            style={{ marginBottom: "50px", fontWeight: "700" }}
            {...searchTitleStyle} // Aplica estilos personalizados al título
            content="Hi, This is Ivan Andrade C."
          />
          {/* // Text: Componente de texto para descripción */}
          <Text
            style={{ fontStyle: "italic" }}
            {...searchDescriptionStyle} // Aplica estilos personalizados a la descripción
            content="Cloud DevOps Engineer"
          />
          {/* // SearchForm: Componente de formulario de búsqueda */}
          {/* <SearchForm /> */}
        </DashboardWrapper>
        {/* </SearchWrapper> */}
      </Container>
    </BannerWrapper>
  );
};

// PropTypes para validar los tipos de las props
SearchArea.propTypes = {
  searchTitleStyle: PropTypes.object,
  searchDescriptionStyle: PropTypes.object,
};

// Valores predeterminados para los estilos de título y descripción
// SearchArea.defaultProps = {
//   searchTitleStyle: {
//     color: "#2C2C2C",
//     // fontSize: ["20px", "24px", "28px"],
//     fontSize: ["24px", "28px", "32px"],
//     lineHeight: ["28px", "30px", "30px"],
//     mb: "9px",
//   },
SearchArea.defaultProps = {
  searchTitleStyle: {
    color: "#FFFFFF",
    // color: "#2C2C2C",
    fontSize: ["20px", "24px", "60px"],
    fontFamily: "Montserrat",
    textAlign: "center",
    // fontWeight: "700",
    // lineHeight: "1px",
    lineHeight: ["28px", "30px", "30px"],
    fontStyle: "bold",
    mb: "9px",
  },
  searchDescriptionStyle: {
    // color: "#1d3c91",
    color: "#FFFFFF",
    fontSize: "30px",

    fontFamily: "Oxygen Mono",
    fontStyle: "italic",
    textAlign: "center",
    lineHeight: ["25px", "25px", "18px"],
    lineHeight: "1px",
    mb: "30px",
  },
};

export default SearchArea;
