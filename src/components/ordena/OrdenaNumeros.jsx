import React, { useState } from "react";
import styles from "./ordenarNumeros.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

function OrdenarNumeros() {
  const { theme } = useContext(ThemeContext);
  const [numeros, setNumeros] = useState(Array(10).fill(""));
  const [resultadoOrdenado, setResultadoOrdenado] = useState(null);

  const handleChange = (index, event) => {
    const novosNumeros = [...numeros];
    novosNumeros[index] = event.target.value
      ? parseInt(event.target.value)
      : "";
    setNumeros(novosNumeros);
  };

  const handleClick = () => {
    if (numeros.includes("") || numeros.includes(NaN)) {
      alert("Por favor, preencha todos os campos com números válidos.");
      return;
    }
    const numerosOrdenados = [...numeros].sort((a, b) => a - b);
    setResultadoOrdenado(numerosOrdenados.join(", "));
  };

  return (
    <div className={styles.container}>
      <p
        className={styles.tittle}
        style={
          theme === "dark"
            ? { WebkitTextFillColor: "white" }
            : { WebkitTextFillColor: "black" }
        }
      >
        Ordenar números de forma ascendente:{" "}
      </p>
      <div className={styles.camposNumeros}>
        {numeros.map((numero, index) => (
          <input
            key={index}
            type="number"
            value={numero}
            onChange={(event) => handleChange(index, event)}
            className={styles.input}
          />
        ))}
      </div>
      <button onClick={handleClick} className={styles.button}>
        Ordenar
      </button>
      {resultadoOrdenado && (
        <p className={styles.resultadoOrdenado}>
          Números ordenados: {resultadoOrdenado}.
        </p>
      )}
    </div>
  );
}

export default OrdenarNumeros;
