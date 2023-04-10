import React from "react";
import styles from "./gridImageSection.module.css";
import StatProductCard from "../../Common/StatProductCard/StatProductCard";
import { statProductFakeData } from "../../../Services/statProductFakeData";

const GridImageSection = () => {
  return (
    <div className={styles.cardsContainer}>
      {statProductFakeData.map((curElem) => {
        return <StatProductCard cardData={curElem} />;
      })}
    </div>
  );
};

export default GridImageSection;
