"use client";
import React, { useContext, useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { ThemeContext } from "@/context/ThemeContext";
import { CiMenuBurger } from "react-icons/ci";
import { ImMobile } from "react-icons/im";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <ImMobile />
      </div>
      <div className={styles.logo}>Desafio 2logical</div>
      <ThemeToggle />
      <div
        className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}
        style={
          theme === "dark"
            ? { backgroundColor: "#0A0A0A" }
            : { backgroundColor: "#feefec" }
        }
      >
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
      </div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <CiMenuBurger />
      </div>
    </div>
  );
}
