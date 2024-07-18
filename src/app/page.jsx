import styles from "./homepage.module.css";
import Functionalities from "../components/funcionalities/Functionalities";

export default function Home() {
  return (
    <main className={styles.main}>
      <Functionalities />
    </main>
  );
}
