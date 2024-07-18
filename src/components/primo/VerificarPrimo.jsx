import React, { useState } from "react";
import styles from "./verificarPrimo.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

function VerificarPrimo() {

    const { theme } = useContext(ThemeContext);

  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState(null);

  const handleChange = (event) => {
    setNumero(event.target.value);
  };

  const handleClick = () => {
    const numeroValido = parseInt(numero);
    if (!isNaN(numeroValido)) {
      const ehPrimo = verificarPrimo(numeroValido);
      setResultado(
        ehPrimo
          ? ` O número ${numeroValido} é primo.`
          : ` O número ${numeroValido} NÃO é primo.`
      );
    } else {
      setResultado("Insira um número inválido.");
    }
  };

  function verificarPrimo(numero) {
    if (numero <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }

    return true;
  }

  return (
    <div className={styles.container}>
      <p
        className={styles.tittle}
        style={
          theme === "dark"
            ? { WebkitTextFillColor: "white" }
            : {  WebkitTextFillColor: "black" }
        }
      >
        Verificar se um número é primo:
      </p>
      <input
        type="number"
        value={numero}
        onChange={handleChange}
        className={styles.input}
      />
      <button onClick={handleClick} className={styles.button}>
        Verificar
      </button>
      {resultado && <p className={styles.resultado}>{resultado}</p>}
    </div>
  );
}

export default VerificarPrimo;
