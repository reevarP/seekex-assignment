import React from "react";
import styles from "./header.module.css";
import hamburger from "../../../Assets/hamburger.svg";
import phoneIcon from "../../../Assets/phoneIcon.svg";
import searchIcon from "../../../Assets/search.svg";
import heart from "../../../Assets/heart.svg";
import shop from "../../../Assets/shopbag.svg";
import person from "../../../Assets/profileperson.svg";

const Header = () => {
  return (
    <>
      <div className={styles.blackHeader}>
        <div>Welcome to Our Store Hiscraves</div>
        <div className="d-flex align-items-center">
          <img src={phoneIcon} alt="" className="me-2" /> Call Us: 1234567890
        </div>
      </div>
      <div className={styles.header}>
        <div>
          <img src={hamburger} alt="" />
        </div>
        <div>Logo Here</div>
        <div className="d-flex align-items-center">
          <img className="me-3" src={searchIcon} alt="" />
          <img className="me-3" src={heart} alt="" />
          <img className="me-3" src={shop} alt="" />
          <img className="me-3" src={person} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
