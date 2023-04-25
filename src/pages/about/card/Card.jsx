import React from "react";
import styles from "./Card.module.scss";

const Card = ({ icon, title, text, cardBg }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_icon}>
        <img src={icon} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Card;
