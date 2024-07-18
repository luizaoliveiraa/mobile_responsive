"use client";
import React from "react";
import styles from "./About.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { MdOutlineWavingHand } from "react-icons/md";

export default function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.about}>
      <section>
        <div>
          <MdOutlineWavingHand
            className={styles.emoji}
            style={
              theme === "dark" ? { color: "#b771f0" } : { color: "#F78B64" }
            }
          />
        </div>
        <p>
          Este site foi criado como parte de um desafio de avaliação para uma
          entrevista. O objetivo era construir um pequeno site otimizado para
          mobile com as seguintes funcionalidades:
        </p>
        <div className={styles.challenge}>
          <div
            style={
              theme === "dark"
                ? { backgroundColor: "#212121" }
                : {
                    backgroundColor: "#F78B64",
                    WebkitTextFillColor: "white",
                  }
            }
          >
            Verificar se um número é primo: um número primo é um número natural
            maior que 1 que possui apenas dois divisores: 1 e ele mesmo.
          </div>
          <div
            style={
              theme === "dark"
                ? { backgroundColor: "#212121" }
                : {
                    backgroundColor: "#F78B64",
                    WebkitTextFillColor: "white",
                  }
            }
          >
            Ordenar 10 números em ordem crescente.
          </div>
        </div>
        <div className={styles.tech}>
          Tecnologias utilizadas:
          <p>
            <span>HTML, CSS, Javascript, Nextjs.</span>
          </p>
        </div>
      </section>
      <br />
    </div>
  );
}
