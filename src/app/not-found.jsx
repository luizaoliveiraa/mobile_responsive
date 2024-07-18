import Link from "next/link";
import styles from "./homepage.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Página não encontrada</h1>
      <p className={styles.description}>Oops! Parece que você se perdeu.</p>
      <Link href="/">
        <button className={styles.homeButton}>
          Voltar para a página inicial
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
