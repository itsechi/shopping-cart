import { useParams } from "react-router-dom";
import allProducts from "../../data/allProducts";
import styles from "./ProductDetails.module.scss";

function ProductDetails() {
  const routeParams = useParams();
  const item = allProducts.find((item) => item.id === routeParams.id);

  return (
    <main className={styles.page}>
      <img src={item.image} alt="" className={styles.img}></img>
      <div className={styles.productDetails}>
        <h1 className={styles.productTitle}>{item.name}</h1>
        <p className={styles.productDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus.
        </p>
        <p className={styles.productPrice}>{item.price}</p>

        <div className={styles.quantity}>
          <button className={styles.quantityBtn}>-</button>
          <input
            type="number"
            className={styles.quantityInput}
            value="1"
          ></input>
          <button className={styles.quantityBtn}>+</button>
        </div>
        <button className={styles.btn}>Add to cart</button>
      </div>
    </main>
  );
}

export default ProductDetails;
