import styles from "./CartModal.module.scss";

function CartModal(props) {
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
        <div className={styles.buttons}>
          <button className={styles.btnSecondary}>Continue shopping</button>
          <button className={styles.btnPrimary}>Checkout now</button>
        </div>
      </section>
    </>
  );
}

export default CartModal;
