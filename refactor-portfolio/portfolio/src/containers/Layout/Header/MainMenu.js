import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Button } from "antd";

import {
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  AGENT_PROFILE_PAGE,
  PRICING_PLAN_PAGE,
  DOWNLOAD_LINK,
} from "settings/constant";

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
  // Objeto de menú actualizado para descargar el CV
  {
    label: (
      <Button
        type="primary"
        href="/images/profile/CV_IVAN_ANDRADE_CASTANEDA_2023_INGLES.pdf"
        download="CV_Ivan_Andrade_Castaneda_2023_Ingles.pdf"
        style={{
          borderRadius: "20px", // bordes redondeados
          backgroundColor: "transparent", // fondo transparente
          color: "white", // texto blanco
          border: "2px solid white", // borde blanco
          padding: "5px 15px", // algo de padding
          // Añade aquí cualquier otro estilo que necesites
        }}
      >
        Download CV
      </Button>
    ),
    key: "menu-5",
    // label: (
    //   <a href={`${process.env.PUBLIC_URL}/images/profile/CV_IVAN_ANDRADE_CASTANEDA_2023_INGLES.pdf`}
    //      download="CV_Ivan_Andrade_Castaneda_2023_Ingles.pdf"> {/* Nombre que aparecerá en la descarga */}
    //     Download CV
    //   </a>
    // ),
    // key: 'menu-5',
  },
];

const MainMenu = ({ className }) => {
  return <Menu className={className} items={menuItems} />;
};

export default MainMenu;
