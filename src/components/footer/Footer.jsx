import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src="/logo.jpg"
            alt="logo"
            width={100}
            height={100}
            className={styles.logoPic}
          ></Image>
        </div>
        <p className={styles.desc}>
          Site criado como parte de um desafio para avaliação de uma entrevista.
          Luiza Oliveira &copy; 2024
        </p>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle} id="contact">
            Contact
          </span>
          <Link
            href="https://www.linkedin.com/in/luizaoliveira0915/"
            target="_blank"
          >
            Linkedin
          </Link>
          <Link href="https://github.com/luizaoliveiraa" target="_blank">
            Github
          </Link>
        </div>
      </div>
    </footer>
  );
}
