import React from "react";
import styles from "./footer.module.css";
import facebook from "../../../Assets/facebook.svg";
import twitter from "../../../Assets/twitter.svg";
import instagram from "../../../Assets/instagram.svg";
import linkedin from "../../../Assets/linkedin.svg";
import pinterest from "../../../Assets/pinterest.svg";
import mappin from "../../../Assets/mappin.svg";
import phoneoutline from "../../../Assets/phoneoutline.svg";
import mailicon from "../../../Assets/mailicon.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.contentAndSocial}>
        <div className="mb-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived not only five centuries....
        </div>
        <div>
          <img src={facebook} alt="" height={40} style={{ marginRight: "0.25rem", cursor: "pointer" }} />
          <img src={twitter} alt="" height={40} style={{ marginRight: "0.25rem", cursor: "pointer" }} />
          <img src={instagram} alt="" height={40} style={{ marginRight: "0.25rem", cursor: "pointer" }} />
          <img src={linkedin} alt="" height={40} style={{ marginRight: "0.25rem", cursor: "pointer" }} />
          <img src={pinterest} alt="" height={40} style={{ marginRight: "0.25rem", cursor: "pointer" }} />
        </div>
      </div>
      <div style={{ width: "20%" }}>
        <div style={{ fontSize: "20px", color: "#770015", marginBottom: "1rem" }}>ONLINE SHOPPING</div>
        <div>
          <div className={styles.eachFooterLink}>Men's T-Shirts</div>
          <div className={styles.eachFooterLink}>Women's Wear</div>
          <div className={styles.eachFooterLink}>Winter Collections</div>
          <div className={styles.eachFooterLink}>Hooded T-Shirts</div>
          <div className={styles.eachFooterLink}>Streetwear Collections</div>
        </div>
      </div>
      <div style={{ width: "20%" }}>
        <div style={{ fontSize: "20px", color: "#770015", marginBottom: "1rem" }}>CUSTOMER POLICIES</div>
        <div>
          <div className={styles.eachFooterLink}>About Us</div>
          <div className={styles.eachFooterLink}>Terms & Conditions</div>
          <div className={styles.eachFooterLink}>Shipping & Returns Policy</div>
          <div className={styles.eachFooterLink}>Cancellation & Refund Policy</div>
          <div className={styles.eachFooterLink}>Contact Us</div>
        </div>
      </div>
      <div style={{ width: "20%" }}>
        <div style={{ fontSize: "20px", color: "#770015", marginBottom: "1rem" }}>STORE INFORMATION</div>
        <div>
          <div style={{ fontSize: "12px", marginBottom: "0.5rem" }}>
            <img src={mappin} alt="" style={{ marginRight: "0.5rem" }} />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <div style={{ fontSize: "12px", marginBottom: "0.5rem" }}>
            <img src={phoneoutline} alt="" style={{ marginRight: "0.5rem" }} />
            Call Us: 1234567890
          </div>
          <div style={{ fontSize: "12px", marginBottom: "0.5rem" }}>
            <img src={mailicon} alt="" style={{ marginRight: "0.5rem" }} />
            Email Us: info@yourmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
