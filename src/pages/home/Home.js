import styles from './Home.module.scss';

function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>FURNITURE</h1>
      <h3 className={styles.text}>The long weekend sale</h3>
      <button className={styles.btn}>Shop now</button>
    </main>
  );
}

export default Home;
