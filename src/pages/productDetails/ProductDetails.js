import { useParams } from "react-router-dom";
import allProducts from "../../data/allProducts";
import styles from "./ProductDetails.module.scss";
import React from "react";
import CartModal from "../../components/cart/CartModal";

const ProductDetails = (props) => {
  const routeParams = useParams();
  const item = allProducts.find((item) => item.id === routeParams.id);
  const [expand, setExpand] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);
  const [showCart, setShowCart] = React.useState(false);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity <= 1) return 1;
      else return prevQuantity - 1;
    });
  };

  const handleQuantityChange = (e) => {
    setQuantity(() => {
      if (+e.target.value <= 1) return 1;
      else return +e.target.value;
    });
  };

  const toggleModal = () => {
    setShowCart(!showCart);
  };

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
        <p className={styles.productPrice}>
          ${item.price.toLocaleString("en-US")}
        </p>

        <div className={styles.quantity}>
          <button className={styles.quantityBtn} onClick={decreaseQuantity}>
            -
          </button>
          <input
            type="number"
            className={styles.quantityInput}
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          ></input>
          <button className={styles.quantityBtn} onClick={increaseQuantity}>
            +
          </button>
        </div>
        <button
          className={styles.btn}
          onClick={() => {
            props.addToCart(item, quantity);
            toggleModal();
          }}
        >
          Add to cart
        </button>
        <p className={styles.detailsTitle} onClick={() => setExpand(!expand)}>
          Details{" "}
          <span className="material-icons-outlined">
            {expand ? "expand_less" : "expand_more"}
          </span>
        </p>
        <p
          className={[
            styles.detailsText,
            expand ? styles.detailsShown : styles.detailsHidden,
          ].join(" ")}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus.
        </p>
      </div>
      {showCart && (
        <CartModal
          cart={props.cart}
          toggleModal={toggleModal}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
        />
      )}
    </main>
  );
};

export default ProductDetails;
