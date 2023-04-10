import React from "react";
import styles from "./newSection.module.css";

const NewSection = ({ sectionText }) => {
  return (
    <div className="mt-5" style={{ position: "relative" }}>
      <div className={styles.line}></div>
      <div className={styles.lineText}>{sectionText}</div>
    </div>
  );
};

export default NewSection;
