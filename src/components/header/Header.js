import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import CartModal from "../cart/CartModal";

function Header(props) {
  const [showCart, setShowCart] = React.useState(false);

  function toggleModal() {
    setShowCart(!showCart);
  }

  return (
    <header className={styles.header}>
      <Link to="./">
        <p className={styles.title}>FURNITURE</p>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.navUl}>
          <div className={styles.navLinks}>
            <Link to="./living">
              <li>Living</li>
            </Link>
            <Link to="./dining">
              <li>Dining</li>
            </Link>
            <Link to="./bedroom">
              <li>Bedroom</li>
            </Link>
          </div>
          <div className={styles.navLinks}>
            <li>
              <span className="material-icons-outlined">search</span>
            </li>
            <li>
              <span className="material-icons-outlined">favorite_border</span>
            </li>
            <li>
              <span
                className="material-icons-outlined"
                onClick={toggleModal}
                aria-label="shopping cart"
              >
                shopping_bag
              </span>
            </li>
          </div>
        </ul>
      </nav>
      {showCart && <CartModal cart={props.cart} toggleModal={toggleModal} />}
    </header>
  );
}

export default Header;
