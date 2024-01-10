// Importaciones de React y componentes/personalizaciones necesarios
import React, { useState } from "react";

import PropTypes from "prop-types";
import Heading from "components/UI/Heading/Heading";
import Text from "components/UI/Text/Text";
import Container from "components/UI/Container/Container";
import GlideCarousel from "components/UI/GlideCarousel/GlideCarousel";
import SearchForm from "./SearchForm";
import BannerWrapper, { SearchWrapper, DashboardWrapper } from "./Search.style";
import BackgroundImage from "components/UI/background/BackgroundImage";
import { Menu, Button } from "antd";

// Componente de botón personalizado que maneja el estado de hover
const HoverButton = ({ href, download, children }) => {
  const [hover, setHover] = useState(false);

  const onEnter = () => setHover(true);
  const onLeave = () => setHover(false);
  return (
    <Button
      type="primary"
      href={href}
      download={download}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        borderRadius: "30px",
        backgroundColor: hover ? "#2C2C2C" : "transparent",
        color: hover ? "#E6E6E6" : "white",
        border: "1px solid white",
        padding: "45px",
        // display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        lineHeight: "3",
        textAlign: "inherit",
        letterSpacing: "3",
        fontSize: "16px", // Tamaño de fuente
        font: "Lora",
        // Añade aquí cualquier otro estilo que necesites
        //  borderRadius: "30px", // bordes redondeados
        //       backgroundColor: "transparent", // fondo transparente
        //       color: "white", // texto blanco
        //       border: "1px solid white", // borde blanco
        //       padding: "45px", // algo de padding
        //       textAlign: "inherit",
        //       letterSpacing: "3",
        //       fontSize: "16px", // Tamaño de fuente
        //       lineHeight: "3",

        //       font: "Lora",
      }}
    >
      {children}
    </Button>
  );
};

// Componente funcional SearchArea con props para estilos personalizados
const SearchArea = ({ searchTitleStyle, searchDescriptionStyle }) => {
  return (
    // BannerWrapper: Contenedor del banner principal
    <BannerWrapper>
      {/* // GlideCarousel: Componente de carrusel para imágenes */}
      <GlideCarousel>
        <img
          // src="/images/banner/10.jpeg"
          // src="/images/banner/19.jpg"
          src="/images/banner/17.jpg"
          // src="/images/banner/21.png"
          alt="Background"
          style={{ width: "100%", height: "auto" }}
        />
      </GlideCarousel>

      {/* // Container: Contenedor para los elementos de texto y formulario */}
      <Container style={{ border: "2px solid red" }}>
        {/* // SearchWrapper: Contenedor de estilo para el área de búsqueda */}
        {/* <SearchWrapper> */}
        <DashboardWrapper>
          {/* <DashboardWrapper style={{ border: "2px solid white" }}></DashboardWrapper> */}
          <Heading
            style={{
              marginTop: "10px",
              marginBottom: "50px",
              fontWeight: "700",
            }}
            {...searchTitleStyle} // Aplica estilos personalizados al título
            content="Hi, This is Ivan Andrade C."
          />
          <Text
            style={{ fontStyle: "italic", marginBottom: "50px" }}
            {...searchDescriptionStyle} // Aplica estilos personalizados a la descripción
            content="Cloud DevOps Engineer"
          />
          <HoverButton
            href="/images/profile/CV_IVAN_ANDRADE_CASTANEDA_2023_INGLES.pdf"
            download="CV_Ivan_Andrade_Castaneda_2023_Ingles.pdf"
          >
            My resume
          </HoverButton>
          {/* <Button
            type="primary"
            href="/images/profile/CV_IVAN_ANDRADE_CASTANEDA_2023_INGLES.pdf"
            download="CV_Ivan_Andrade_Castaneda_2023_Ingles.pdf"
            style={{
              // textSizeAdjust: "100%",
              borderRadius: "30px", // bordes redondeados
              backgroundColor: "transparent", // fondo transparente
              color: "white", // texto blanco
              border: "1px solid white", // borde blanco
              padding: "45px", // algo de padding
              textAlign: "inherit",
              letterSpacing: "3",
              fontSize: "16px", // Tamaño de fuente
              lineHeight: "3",

              font: "Lora",
              // alignItems: "center", // Centra verticalmente el contenido del botón
              // justifyContent: "center", // Centra horizontalmente el contenido del botón
              // height: "40px", // Altura específica del botón si es necesario

              // margin: "10px 10px 10px 10px",
              // Añade aquí cualquier otro estilo que necesites
            }}
          >
            My resume
          </Button> */}
          {/* // SearchForm: Componente de formulario de búsqueda
          <SearchForm /> */}
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
    // color: "#06488E",
    fontSize: ["20px", "24px", "50px"],
    fontFamily: "Lora",
    textAlign: "center",
    // fontWeight: "700",
    // lineHeight: "1px",
    lineHeight: ["28px", "30px", "30px"],
    fontStyle: "bold",
    mb: "9px",
  },
  searchDescriptionStyle: {
    // color: "#06488E",
    color: "#FFFFFF",
    // fontSize: "30px",
    fontSize: "25px",

    fontFamily: "Oxygen",
    // fontStyle: "italic",
    textAlign: "center",
    // lineHeight: ["25px", "25px", "18px"],
    lineHeight: "1px",
    mb: "30px",
  },
};

export default SearchArea;
