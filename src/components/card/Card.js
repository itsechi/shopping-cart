import styles from "./Card.module.scss";

function Card(props) {
  return (
    <article className={styles.card}>
      <a href=".">
        <img src={props.img} className={styles.img} alt="#"></img>
      </a>
      <div className={styles.details}>
        <a href="." className={styles.title}>
          <span>{props.name}</span>
        </a>
        <p>{props.price}</p>
      </div>
    </article>
  );
}

export default Card;
