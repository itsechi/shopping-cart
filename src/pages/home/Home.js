import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>FURNITURE</h1>
      <h3 className={styles.text}>The long weekend sale</h3>
      <Link to="./living">
        <button className={styles.btn}>Shop now</button>
      </Link>
    </main>
  );
};

export default Home;
