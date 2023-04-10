import React from "react";
import ProductCard from "../../Common/ProductCard/ProductCard";
import styles from "./productSection.module.css";

const ProductSection = ({ dataArr }) => {
  return (
    <div className={styles.productCardsContainer}>
      {dataArr.map((curElem) => {
        return <ProductCard cardData={curElem} />;
      })}
    </div>
  );
};

export default ProductSection;
