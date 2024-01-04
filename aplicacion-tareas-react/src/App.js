import "./App.css";
// import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import ListaDeTareas from "./components/ListaDeTareas";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="aplicacion-tareas">
      {/* separar en componente para reutilizacion */}
      <div className="freecodecamp-loco-contenedor">
        <Logo />
      </div>

      <div className="tareas-lista-principal">
        <h1> Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
