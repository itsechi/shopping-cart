import styles from "./Card.module.scss";
import { Link } from "react-router-dom";
import React from "react";

function Card(props) {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <article className={styles.card}>
      <Link to={`./${props.id}`}>
        <div className={styles.imageContainer}>
          <img
            src={props.img}
            className={loaded ? styles.img : styles.hidden}
            alt="#"
            onLoad={() => setLoaded(true)}
          ></img>
        </div>
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
