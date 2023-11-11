import React from "react";
import styles from "./css/popularCategoriessection.module.css";
import PCategoriesCard from "./PCategoriesCard";

export default function PopulaerCategoriesSection() {
  return (
    <>
      <div className={styles.PopulaerCategoriesSection_mainContainer}>
        <div className={styles.section_header}>
          <h4>Popular Categories</h4>
          <p>all Categories</p>
        </div>
        <div className={styles.PopulaerCategoriesSection_cardContainer}>
          {[1, 2, 3, 4, 5, 6].map((el) => {
            return <PCategoriesCard key={el} />;
          })}
        </div>
      </div>
    </>
  );
}
