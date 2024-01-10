import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Button } from "antd";

import {
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  AGENT_PROFILE_PAGE,
  PRICING_PLAN_PAGE,
} from "settings/constant";

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
        padding: "5px 15px",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        lineHeight: "1",
        // Añade aquí cualquier otro estilo que necesites
        // borderRadius: "30px", // bordes redondeados
        // backgroundColor: "transparent", // fondo transparente
        // color: "white", // texto blanco
        // border: "1px solid white", // borde blanco
        // padding: "5px 15px", // algo de padding
        // display: "inline-flex",
      }}
    >
      {children}
    </Button>
  );
};

const menuItems = [
  {
    label: <NavLink to={HOME_PAGE}>Home</NavLink>,
    key: "menu-1",
  },
  {
    label: <NavLink to={LISTING_POSTS_PAGE}>Resume</NavLink>,
    key: "menu-2",
  },
  {
    label: <NavLink to={AGENT_PROFILE_PAGE}>Portfolio</NavLink>,
    key: "menu-3",
  },
  {
    label: <NavLink to={PRICING_PLAN_PAGE}>Contact</NavLink>,
    key: "menu-4",
  },
  {
    label: (
      <HoverButton
        href="/images/profile/CV_IVAN_ANDRADE_CASTANEDA_2023_INGLES.pdf"
        download="CV_Ivan_Andrade_Castaneda_2023_Ingles.pdf"
      >
        Download CV
      </HoverButton>
    ),
    key: "menu-5",
  },
];

const MainMenu = ({ className }) => {
  return <Menu className={className} items={menuItems} mode="horizontal" />;
};

export default MainMenu;
