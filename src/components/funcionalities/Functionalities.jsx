"use client";
import React, { useState, useContext } from "react";
import OrdenaNumeros from "../ordena/OrdenaNumeros";
import VerificarPrimo from "../primo/VerificarPrimo";
import styles from "./funcionalities.module.css";
import { ThemeContext } from "@/context/ThemeContext";

function Functionalities() {
  const [openTab, setOpenTab] = useState(1);
  const { theme } = useContext(ThemeContext);

  const handleClick = (tabIndex) => {
    setOpenTab(tabIndex);
  };

  const getButtonStyle = () => {
    return theme === "dark"
      ? { backgroundColor: "#212121", WebkitTextFillColor: "#b771f0" }
      : { backgroundColor: "white", WebkitTextFillColor: "#702619" };
  };

  const getContentStyle = () => {
    return theme === "dark"
      ? { backgroundColor: "#212121" }
      : { backgroundColor: "#F78B64" };
  };

  return (
    <div className={styles.content}>
      <div className={styles.tabContainer}>
        <div
          className={`${styles.mainTitle} ${openTab === 1 ? "" : ""}`}
          onClick={() => handleClick(1)}
        >
          <div className={styles.btnFunction} style={getButtonStyle()}>
            <h5>Verificar Primo</h5>
          </div>
        </div>
        <div
          className={`${styles.mainTitle} ${openTab === 2 ? "" : ""}`}
          onClick={() => handleClick(2)}
        >
          <div className={styles.btnFunction} style={getButtonStyle()}>
            <h5>Ordenar Numeros</h5>
          </div>
        </div>
      </div>

      {openTab === 1 && (
        <div className={styles.tabContent} style={getContentStyle()}>
          <VerificarPrimo />
        </div>
      )}

      {openTab === 2 && (
        <div className={styles.tabContent2} style={getContentStyle()}>
          <OrdenaNumeros />
        </div>
      )}
    </div>
  );
}

export default Functionalities;
