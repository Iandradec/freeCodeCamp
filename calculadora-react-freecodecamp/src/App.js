import "./App.css";
// import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import Boton from "./components/Boton";
import Pantalla from "./components/Pantalla";
import BotonClear from "./components/BotonClear";
import Logo from "./components/Logo";
import { useState } from "react"; // este es un hook llamado useState
import { evaluate } from "mathjs";

function App() {
  // hook useState
  const [input, setInput] = useState("");

  const esOperador = (valor) => {
    // si no es un numero, tampoco es un signo ".", pero tampoco es el signo "="
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      // Comprobación adicional para asegurarse de que el último carácter no es un operador
      if (esOperador(input[input.length - 1])) {
        alert("Expresión matemática no válida.");
      } else {
        try {
          setInput(evaluate(input));
        } catch (e) {
          alert("Error en la expresión matemática.");
        }
      }
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };

  return (
    <div className="App">
      {/* <div className="freecode-logo-contenedor">
        <img
          src={freeCodeCampLogo}
          className="freecodecamp-logo"
          alt="Logo de freeCodeCamp"
        />
      </div> */}
      <Logo />
      <div className="contenedor-calculadora">
        {/* componentes dentro del contenedor principal -  PANTALLA, BOTON, BOTONCLEAR */}
        {/*  pantalla de calculadora */}
        <Pantalla input={input} />

        {/* botones de calculadora */}
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>

        {/* boton de limpiar */}
        {/* defino una funcion anonima que pone el setInput a vacio otra vez */}
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}> Clear </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
