import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <article className={styles.card}>
      <Link to={`./${props.id}`}>
        <img src={props.img} className={styles.img} alt="#"></img>
      </Link>
      <div className={styles.details}>
        <Link to={`./${props.id}`} className={styles.title}>
          <span>{props.name}</span>
        </Link>
        <p>{props.price}</p>
      </div>
    </article>
  );
}

export default Card;
