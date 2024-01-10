import React from "react";
import styles from "./css/productCard.module.css";
export default function ProductCards(props) {
  const { title, category } = props.data;
  const { buttonText } = props;
  return (
    <>
      <div className={styles.card}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.category}>{category}</p>
        <button className={styles.button}>{buttonText}</button>
      </div>
    </>
  );
}
