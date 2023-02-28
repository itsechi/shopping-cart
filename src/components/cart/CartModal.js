import styles from "./CartModal.module.scss";

function CartModal(props) {
  console.log(props.cart);
  const cartItems = props.cart.map((obj) => (
    <div>
      <img src={obj.item.image} width="200" alt=""></img>
      <p>{obj.item.name}</p>
      <p>Category: {obj.item.category}</p>
      <p>{obj.item.price}</p>
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
