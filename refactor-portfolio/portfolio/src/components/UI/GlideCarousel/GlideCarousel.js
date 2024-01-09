// Importaciones necesarias de React, PropTypes, Glide.js y estilos
import React from "react";
import PropTypes from "prop-types";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import GlideWrapper, { GlideSlideWrapper } from "./GlideCarousel.style";

// Componente GlideCarousel
const GlideCarousel = ({ className, children, carouselSelector }) => {
  // Agrega 'glide' a un array de clases, se podrían añadir más clases si es necesario
  const addAllClasses = ["glide"];

  // Renderiza el componente GlideWrapper
  return (
    <GlideWrapper className={addAllClasses.join(" ")}>
      {/* // Div interno para la pista del carrusel
      // la calassname de glide es la que me da el relleno completo de la ventana */}
      <div className="glide__track" data-glide-el="track">
        {/* <img
          src="/images/banner/3.jpg"
          alt="Background"
          style={{ width: "100%", height: "auto" }}
        /> */}
        {/* // Lista no ordenada para las diapositivas del carrusel */}
        <ul className='glide__slides'>{children}</ul>
      </div>
    </GlideWrapper>
  );
};

// // Componente GlideSlide, para envolver cada diapositiva individualmente
// const GlideSlide = ({ children }) => {
//   return (
//     // GlideSlideWrapper proporciona estilos específicos a cada diapositiva
//     <GlideSlideWrapper className='glide__slide'>{children}</GlideSlideWrapper>
//   );
// };

// // Exporta GlideSlide para su uso externo
// export { GlideSlide };

// Exporta por defecto GlideCarousel
export default GlideCarousel;
