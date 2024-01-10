import React from "react";
import PropTypes from "prop-types";
import NavbarWrapper, {
  Container,
  LogoArea,
  MenuArea,
  AvatarWrapper,
  AuthWrapper,
  MenuWrapper,
} from "./Navbar.style";

const Navbar = ({
  className,
  logo,
  avatar,
  navMenu,
  authMenu,
  profileMenu,
  isLogin,
  headerType,
  // searchComponent,
  location,
  searchVisibility,
}) => {
  const addAllClasses = ["navbar"];
  // Agrega clases adicionales a la Navbar si se proporcionan.
  if (className) {
    addAllClasses.push(className);
  }
  // Agrega una clase en función del tipo de cabecera.
  if (headerType) {
    addAllClasses.push(`is_${headerType}`);
  }

  return (
    <NavbarWrapper className={addAllClasses.join(" ")}>
      {/* <NavbarWrapper
      className={addAllClasses.join(" ")}
      style={{ border: "3px solid red" }}
    ></NavbarWrapper>
      {" "} */}
      {/* // Añade un borde grueso rojo para delimitar el área. */}
      <Container>
        {/* <Container style={{ border: "2px solid yellow" }}></Container> */}
        {/* Muestra el logo y el componente de búsqueda si la búsqueda es visible */}
        {logo || searchVisibility ? (
          <LogoArea >
            {/* <LogoArea style={{ border: "2px solid blue" }}></LogoArea> */}
            {logo}
            {/* Oculta el componente de búsqueda en la página de inicio si searchVisibility es falso
            {!searchVisibility && location.pathname === "/"
              ? null
              : searchComponent} */}
          </LogoArea>
        ) : null}
        <MenuArea>
          {/* <MenuArea style={{ border: "2px solid white" }}></MenuArea> */}
          {/* Muestra el menú principal si navMenu está presente */}
          {navMenu && (
            <MenuWrapper className="main_menu">{navMenu}</MenuWrapper>
          )}
          {/* Muestra el menú de perfil si el usuario está logueado, de lo contrario muestra el menú de autenticación 
          Si comento no muestra los botones de sign-in y ssing-out, sobreescribe lo que esta en authMenu.js*/}
          {/* {isLogin && avatar ? (
            <AvatarWrapper>{profileMenu}</AvatarWrapper>
          ) : (
            authMenu && (
              <AuthWrapper className="auth_menu">{authMenu}</AuthWrapper>
            )
          )} */}
        </MenuArea>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  navMenu: PropTypes.element,
  avatar: PropTypes.element,
  authMenu: PropTypes.element,
  isLogin: PropTypes.bool,
  headerType: PropTypes.oneOf(["transparent", "default"]),
};

export default Navbar;
