import React from "react";
import freeCodeCampLogo from "../images/freecodecamp-logo.png";

function Logo(props) {
  return (
    <div className="freecode-logo-contenedor">
      <img
        src={freeCodeCampLogo}
        className="freecodecamp-logo"
        alt="Logo de freeCodeCamp"
      />
      {props.children}
    </div>
  );
}

export default Logo;
