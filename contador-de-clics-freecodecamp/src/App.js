import "./App.css";
import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import { useState } from "react"; // este es un hook llamado useState

function App() {
  // el SET se usa como naming convention, es un establece a numClics
  const [numClics, setNumClics] = useState(0);

  // funcion flecha revisar
  // en aprentesis son parametros y en llaves lo que se va a regresar
  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reducirClic = () => {
    setNumClics(numClics - 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      {/* contenedor de imagen del logo */}
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
        />
      </div>

      {/* contendedor principale que va a tener los botones */}
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        {/* estoy importando el componente BOTON y pasando propiedas a esa funcion BOTON 
        que se encuentra en la parte superior*/}
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reducir"
          esBotonDeReducir={true}
          manejarClic={reducirClic}
        />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
        
      </div>
    </div>
  );
}

export default App;
