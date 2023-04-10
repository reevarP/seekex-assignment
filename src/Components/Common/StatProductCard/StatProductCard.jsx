import React from "react";
import styles from "./statProductCard.module.css";

const StatProductCard = ({ cardData }) => {
  return (
    <div className={styles.fullCard}>
      <img src={cardData.image} alt="" />
      <div className={styles.cardLabel}>{cardData.label}</div>
    </div>
  );
};

export default StatProductCard;
