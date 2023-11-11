import React from "react";
import styles from "./css/homePageCarosole.module.css";
export default function HomePageCarosoleElement() {
  return (
    <>
      <div className={styles.Carosole_mainContainer}>
        <div className={styles.carosole_leftSection}>
          <h2>Not enough </h2>
          <h2>Spare Pats</h2>
          <p>.</p>
          <p>We have everything you need – replacement parts, </p>
          <p>performance parts, accessories, oil & fluids, </p>
          <p>tools and much more...</p>
        </div>
        <div className={styles.carosole_RightSection}></div>
      </div>
    </>
  );
}
