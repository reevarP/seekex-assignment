import React, { Suspense } from "react";
import Header from "../../Components/Common/Header/Header";
import styles from "./home.module.css";
import mainImage from "../../Assets/mainImage.svg";
import menstshirt from "../../Assets/menstshirt.svg";
import womenswear from "../../Assets/womenswear.svg";
import wintercollection from "../../Assets/wintercollection.svg";
import hoodies from "../../Assets/hoodies.svg";
import poloneck from "../../Assets/poloneck.svg";
import fullsleeve from "../../Assets/fullsleeve.svg";
import baggy from "../../Assets/baggy.svg";
import winter from "../../Assets/winter.svg";
import bestdeal from "../../Assets/bestdeal.svg";
import womens from "../../Assets/womens.svg";
import trendy from "../../Assets/trendy.svg";
import { fakeData } from "../../Services/fakeData";
import NewSection from "../../Components/Common/NewSection/NewSection";
import { fakeHalfData } from "../../Services/fakeHalfData";
import ViewAllButton from "../../Components/Uncommon/ViewAllButton/ViewAllButton";
import bannerpersonality from "../../Assets/bannerpersonality.svg";
import GridImageSection from "../../Components/Uncommon/GridImageSection/GridImageSection";
import loosefitbanner from "../../Assets/loosefitbanner.svg";
import diamond from "../../Services/HurryUpIcons/diamond.svg";
import medal from "../../Services/HurryUpIcons/medal.svg";
import returning from "../../Assets/return.svg";
import quality from "../../Assets/quality.svg";
import payment from "../../Assets/payment.svg";
import helpline from "../../Assets/helpline.svg";
import semicircleleft from "../../Assets/semicircleleft.svg";
import semicircleright from "../../Assets/semicircleright.svg";
import oddshapeleft from "../../Assets/oddshapeleft.svg";
import oddshaperight from "../../Assets/oddshaperight.svg";
import Footer from "../../Components/Common/Footer/Footer";

const EachProductSectionLazy = React.lazy(() => import("../../Components/Uncommon/ProductSection/ProductSection"));

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <div className={styles.mainSection}>
          <img src={mainImage} alt="" />
        </div>
        <div className={styles.midSection}>
          <div className={styles.circleImages}>
            <div className={styles.circleImagesContainer}>
              <div className={`d-flex flex-column align-items-center ${styles.eachImageSection}`}>
                <img src={menstshirt} alt="" />
                <div className="mt-3">Men’s T-Shirts</div>
              </div>
              <div className={`d-flex flex-column align-items-center ${styles.eachImageSection}`}>
                <img src={womenswear} alt="" />
                <div className="mt-3">Women’s Wear</div>
              </div>
              <div className={`d-flex flex-column align-items-center ${styles.eachImageSection}`}>
                <img src={wintercollection} alt="" />
                <div className="mt-3">Winter Collections</div>
              </div>
              <div className={`d-flex flex-column align-items-center ${styles.eachImageSection}`}>
                <img src={hoodies} alt="" />
                <div className="mt-3">Hooded T-Shirts</div>
              </div>
              <div className={`d-flex flex-column align-items-center ${styles.eachImageSection}`}>
                <img src={poloneck} alt="" />
                <div className="mt-3">Polo Neck T-Shirts</div>
              </div>
              <div className={`d-flex flex-column align-items-center ${styles.eachImageSection}`}>
                <img src={fullsleeve} alt="" />
                <div className="mt-3">Full Sleeves T-Shirts</div>
              </div>
            </div>
          </div>
          <div className={styles.inorganicSection}>
            <div className="d-flex justify-content-between mb-3">
              <img src={baggy} alt="" style={{ width: "48%" }} />
              <img src={winter} alt="" style={{ width: "48%" }} />
            </div>
            <div className="d-flex justify-content-between">
              <img src={womens} alt="" style={{ width: "32%" }} />
              <img src={bestdeal} alt="" style={{ width: "32%" }} />
              <img src={trendy} alt="" style={{ width: "32%" }} />
            </div>
          </div>

          <NewSection sectionText={"Trending T-Shirts"} />
          <Suspense fallback={<div>Loading...</div>}>
            <EachProductSectionLazy dataArr={fakeData} />
          </Suspense>
          <ViewAllButton />
          <NewSection sectionText={"Featured Products"} />
          <Suspense fallback={<div>Loading...</div>}>
            <EachProductSectionLazy dataArr={fakeHalfData} />
          </Suspense>
          <ViewAllButton />
        </div>
        <div className={styles.mainSection}>
          <img src={bannerpersonality} alt="" />
        </div>

        <div className={styles.midSection}>
          <NewSection sectionText={"New Products"} />
          <Suspense fallback={<div>Loading...</div>}>
            <EachProductSectionLazy dataArr={fakeHalfData} />
          </Suspense>
          <ViewAllButton />

          <NewSection sectionText={"Best Selling Products"} />
          <Suspense fallback={<div>Loading...</div>}>
            <EachProductSectionLazy dataArr={fakeHalfData} />
          </Suspense>
          <ViewAllButton />

          <GridImageSection />
        </div>
        <div className={styles.mainSection}>
          <img src={loosefitbanner} alt="" />
        </div>

        <div className={styles.midSection}>
          <div className={styles.hurryUpContainer}>
            <div className={styles.hurryCard1}>
              <img src={diamond} alt="" width={96} />
              <div className={styles.hurryText}>Hurry Up!</div>
              <div className={styles.percentOff}>85% OFF</div>
              <div style={{ fontSize: "24px", margin: "0.5rem 0" }}>Sale</div>
              <button className={styles.shopNow}>SHOP NOW</button>
            </div>

            <div className={styles.hurryCard2}>
              <img src={medal} alt="" width={96} />
              <div className={styles.hurryText}>Hurry Up!</div>
              <div className={styles.percentOff}>85% OFF</div>
              <div style={{ fontSize: "24px", margin: "0.5rem 0" }}>Sale</div>
              <button className={styles.shopNow}>SHOP NOW</button>
            </div>
          </div>
        </div>

        <div className={styles.provisions}>
          <img src={semicircleleft} alt="" height={140} style={{ position: "absolute", left: "0", top: "90px" }} />
          <div className="d-flex flex-column align-items-center">
            <img src={returning} alt="" />
            <div style={{ marginTop: "1rem" }}>7 Days Return</div>
          </div>
          <div className={styles.verticalLine}></div>
          <div className="d-flex flex-column align-items-center">
            <img src={quality} alt="" />
            <div style={{ marginTop: "1rem" }}>Quality Products</div>
          </div>
          <div className={styles.verticalLine}></div>
          <div className="d-flex flex-column align-items-center">
            <img src={payment} alt="" />
            <div style={{ marginTop: "1rem" }}>Safe Payment</div>
          </div>
          <div className={styles.verticalLine}></div>
          <div className="d-flex flex-column align-items-center">
            <img src={helpline} alt="" />
            <div style={{ marginTop: "1rem" }}>24x7 Helpline</div>
          </div>
          <img src={semicircleright} alt="" height={140} style={{ position: "absolute", right: "0", bottom: "90px" }} />
        </div>

        <div className={styles.newsLetterSection}>
          <div className={styles.newsletterBox}>
            <img src={oddshapeleft} alt="" style={{ position: "absolute", left: "0", height: "100%" }} />
            <div className={styles.boxContent}>
              <div style={{ color: "#ffffff", fontSize: "24px", marginBottom: "2rem" }}>Subscribe to get updates on exciting offers & deals</div>
              <div>
                <input
                  type="text"
                  className={styles.subscriptionEmail}
                  placeholder="Enter your email"
                  style={{ outline: "none", border: "none", backgroundColor: "#ffffff33", height: "3rem", width: "24rem", padding: "0 2rem", color: "#ffffff" }}
                />
                <button style={{ fontWeight: "500", border: "none", backgroundColor: "#ffffff", height: "3rem", width: "6rem", color: "#770015" }}>Subscribe</button>
              </div>
            </div>
            <img src={oddshaperight} alt="" style={{ position: "absolute", right: "0", bottom: "0px", height: "100%" }} />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
