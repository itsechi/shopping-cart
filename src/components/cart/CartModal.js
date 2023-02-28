import styles from "./CartModal.module.scss";
import React from "react";

function CartModal(props) {
  function decreaseQuantity(e) {
    const id = e.target.parentElement.parentElement.dataset.id;
    const product = props.cart.find((obj) => obj.item.id === id);
    if (product.quantity === 1) props.removeFromCart(product.item);
    else props.addToCart(product.item, product.quantity - 1);
  }

  function increaseQuantity(e) {
    const id = e.target.parentElement.parentElement.dataset.id;
    const product = props.cart.find((obj) => obj.item.id === id);
    props.addToCart(product.item, product.quantity + 1);
  }

  function handleChange(e) {
    const id = e.target.parentElement.parentElement.dataset.id;
    const product = props.cart.find((obj) => obj.item.id === id);
    props.addToCart(product.item, +e.target.value);
  }

  const cartItems = props.cart.map((obj) => (
    <div key={obj.item.id} data-id={obj.item.id}>
      <img src={obj.item.image} width="200" alt=""></img>
      <p>{obj.item.name}</p>
      <p>Category: {obj.item.category}</p>
      <p>{obj.item.price}</p>
      <div>
        <button onClick={decreaseQuantity}>-</button>
        <input
          type="number"
          value={obj.quantity}
          onChange={handleChange}
          min="0"
        ></input>
        <button onClick={increaseQuantity}>+</button>
      </div>
    </div>
  ));

  return (
    <>
      <div className={styles.overlay}></div>
      <section className={styles.cartModal}>
        <div className={styles.title}>
          <h3>Cart</h3>
          <span className="material-icons-outlined" onClick={props.toggleModal}>
            close
          </span>
        </div>
        {cartItems}
        <div className={styles.buttons}>
          <button className={styles.btnSecondary} onClick={props.toggleModal}>
            Continue shopping
          </button>
          <button className={styles.btnPrimary}>Checkout now</button>
        </div>
      </section>
    </>
  );
}

export default CartModal;
