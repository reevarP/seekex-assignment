import React from "react";
import styles from "./productCard.module.css";
import cart from "../../../Assets/cart.svg";
import like from "../../../Assets/like.svg";
import share from "../../../Assets/share.svg";

const ProductCard = ({ cardData }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={cardData.image} alt="" className={styles.productImage} />
        <div className={styles.blurDiv}>
          <img src={cart} alt="" height={40} style={{ marginRight: "0.25rem" }} />
          <img src={like} alt="" height={40} style={{ marginRight: "0.25rem" }} />
          <img src={share} alt="" height={40} style={{ marginRight: "0.25rem" }} />
        </div>
      </div>
      <div className={styles.dataContainer}>
        <div className="px-3 text-center">{cardData.label}</div>
        <div className="d-flex align-items-center">
          <span style={{ fontSize: "20px", fontWeight: "700", marginRight: "0.25rem" }}>{cardData.currentPrice}</span>
          <span style={{ fontSize: "12px", color: "#FF0000", textDecoration: "line-through" }}>{cardData.previousPrice}</span>
        </div>
        <div className="d-flex">
          <div className={styles.eachSizeBox}>S</div>
          <div className={styles.eachSizeBox}>M</div>
          <div className={styles.eachSizeBox}>L</div>
          <div className={styles.eachSizeBox}>XL</div>
          <div className={styles.eachSizeBox}>XXL</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
