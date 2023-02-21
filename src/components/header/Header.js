import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>FURNITURE</h1>
      <nav className={styles.nav}>
        <ul className={styles.navUl}>
          <div className={styles.navLinks}>
            <li>Living</li>
            <li>Dining</li>
            <li>Bedroom</li>
            <li>Kitchen</li>
          </div>
          <div className={styles.navLinks}>
            <li>
              <span className="material-icons-outlined">search</span>
            </li>
            <li>
              <span className="material-icons-outlined">favorite_border</span>
            </li>
            <li>
              <span className="material-icons-outlined">shopping_bag</span>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
