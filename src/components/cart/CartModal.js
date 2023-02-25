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
      </section>
    </>
  );
}

export default CartModal;
