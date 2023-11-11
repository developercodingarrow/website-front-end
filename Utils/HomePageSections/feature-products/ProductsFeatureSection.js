import React from "react";
import styles from "./css/ProductFeatureSection.module.css";
import ProductFeatureCard from "./ProductFeatureCard";

export default function ProductsFeatureSection() {
  return (
    <>
      <div className={styles.ProductsFeatureSection_main_container}>
        <div className={styles.section_header}>
          <h4>Feature Products</h4>
          <p>Feature</p>
        </div>

        <div className={styles.card_container}>
          <ProductFeatureCard />
          <ProductFeatureCard />
        </div>
      </div>
    </>
  );
}
