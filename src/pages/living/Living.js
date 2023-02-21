import Card from "../../components/card/Card";
import livingProducts from "../../data/livingProducts";
import styles from "../Pages.module.scss";

function Living() {
  const cards = livingProducts.map((item) => (
    <Card name={item.name} price={item.price} img={item.image} id={item.id}/>
  ));

  return (
    <main>
      <h2 className={styles.pageTitle}>Living room furniture</h2>
      <section className={styles.cards}>{cards}</section>
    </main>
  );
}

export default Living;
