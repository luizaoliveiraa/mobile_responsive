"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0A0A0A" }
      }
    >
      <FaMoon style={{ color: theme === "dark" ? "#b771f0" : "#0a0a0a" }} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 22, backgroundColor: "#0A0A0A" }
            : { backgroundColor: "#FEEFEC" }
        }
      ></div>
      <MdSunny style={{ color: theme === "dark" ? "white" : "gold" }} />
    </div>
  );
};

export default ThemeToggle;
