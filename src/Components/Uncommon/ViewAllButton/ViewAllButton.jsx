import React from "react";
import styles from "./viewAllButton.module.css";

const ViewAllButton = () => {
  return (
    <div className="my-4 d-flex justify-content-center">
      <button className={styles.viewAllButton}>VIEW ALL</button>
    </div>
  );
};

export default ViewAllButton;
