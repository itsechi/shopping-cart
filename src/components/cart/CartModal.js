import styles from "./CartModal.module.scss";
import React from "react";

const CartModal = (props) => {
  const subtotal = props.cart.reduce(
    (acc, cur) => acc + cur.item.price * cur.quantity,
    0
  );

  const decreaseQuantity = (e) => {
    const id = e.target.closest("article").dataset.id;
    const product = props.cart.find((obj) => obj.item.id === id);
    if (product.quantity === 1) props.removeFromCart(product.item);
    else props.addToCart(product.item, product.quantity - 1);
  };

  const increaseQuantity = (e) => {
    const id = e.target.closest("article").dataset.id;
    const product = props.cart.find((obj) => obj.item.id === id);
    props.addToCart(product.item, product.quantity + 1);
  };

  const handleChange = (e) => {
    const id = e.target.closest("article").dataset.id;
    const product = props.cart.find((obj) => obj.item.id === id);
    props.addToCart(product.item, +e.target.value);
  };

  const removeItem = (e) => {
    const id = e.target.closest("article").dataset.id;
    const product = props.cart.find((obj) => obj.item.id === id);
    props.removeFromCart(product.item);
  };

  const cartItems = props.cart.map((obj) => (
    <article className={styles.product} key={obj.item.id} data-id={obj.item.id}>
      <img src={obj.item.image} alt="" className={styles.productImg}></img>
      <div className={styles.productInfo}>
        <div className={styles.productInfoTop}>
          <p>{obj.item.name}</p>
          <p className={styles.productDescription}>
            Category: {obj.item.category}
          </p>
          <span className="material-icons-outlined" onClick={removeItem}>
            close
          </span>
        </div>

        <div className={styles.productInfoBottom}>
          <div>
            <button className={styles.quantityBtn} onClick={decreaseQuantity}>
              -
            </button>
            <input
              type="number"
              value={obj.quantity}
              onChange={handleChange}
              className={styles.quantityInput}
              min="0"
            ></input>
            <button className={styles.quantityBtn} onClick={increaseQuantity}>
              +
            </button>
          </div>
          <p>${(obj.item.price * obj.quantity).toLocaleString("en-US")}</p>
        </div>
      </div>
    </article>
  ));

  return (
    <>
      <div
        className={props.showCart ? styles.overlay : styles.hidden}
        onClick={props.toggleModal}
      ></div>
      <section className={props.showCart ? styles.cartModal : styles.hidden}>
        <div className={styles.title}>
          <h3>
            Cart{" "}
            <span className={styles.cartLength}>({props.cart.length})</span>
          </h3>
          <span className="material-icons-outlined" onClick={props.toggleModal}>
            close
          </span>
        </div>
        <div className={styles.products}>{cartItems}</div>
        <div className={styles.buttons}>
          <p className={styles.subtotal}>
            Subtotal <span>${subtotal.toLocaleString("en-US")}</span>
          </p>
          <button className={styles.btnSecondary} onClick={props.toggleModal}>
            Continue shopping
          </button>
          <button className={styles.btnPrimary}>Checkout now</button>
        </div>
      </section>
    </>
  );
};

export default CartModal;
