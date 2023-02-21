import Card from "../../components/card/Card";
import diningProducts from "../../data/diningProducts";
import styles from "../Pages.module.scss";

function Dining() {
  const cards = diningProducts.map((item) => (
    <Card name={item.name} price={item.price} img={item.image} id={item.id} />
  ));

  return (
    <main>
      <h2 className={styles.pageTitle}>Dining room furniture</h2>
      <section className={styles.cards}>{cards}</section>
    </main>
  );
}

export default Dining;
