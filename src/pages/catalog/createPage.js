import Card from "../../components/card/Card";
import styles from "./Catalog.module.scss";

const createPage = (productsArr, name) => {
  const cards = productsArr.map((item) => (
    <Card
      key={item.id}
      name={item.name}
      price={item.price}
      img={item.image}
      id={item.id}
      category={item.category}
    />
  ));

  return (
    <main>
      <h2 className={styles.pageTitle}>
        {name === "bedroom" ? name : name + " room"} furniture
      </h2>
      <section className={styles.cards}>{cards}</section>
    </main>
  );
};

export default createPage;
