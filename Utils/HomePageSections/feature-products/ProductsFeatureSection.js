import React, { useContext } from "react";
import styles from "./css/ProductFeatureSection.module.css";
import { IoMdArrowDropright, IoMdArrowDropleft } from "../../ApplicationIcon";
import OneWayCarousel from "../../carousel/OneWayCarousel";
import { CarouselContext } from "../../../Context Api/CarouselContextApi";

const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Product 4" },
  { id: 5, name: "Product 5" },
  { id: 6, name: "Product 6" },
  { id: 7, name: "Product 7" },
  { id: 8, name: "Product 8" },
  // Add more products as needed
];

export default function ProductsFeatureSection() {
  const { nextSlide, prevSlide } = useContext(CarouselContext);

  const totalSlides = Math.ceil(products.length / 3);

  const handelPreviou = () => {
    prevSlide(totalSlides);
  };

  const handelNext = () => {
    nextSlide(totalSlides);
  };

  return (
    <>
      <div className={styles.ProductsFeatureSection_main_container}>
        <div className={styles.section_header}>
          <h4>Feature Products</h4>
          <div className={styles.navidation_arrowBox}>
            <span>
              {" "}
              <IoMdArrowDropleft onClick={handelPreviou} />
            </span>
            <span>
              {" "}
              <IoMdArrowDropright onClick={handelNext} />
            </span>
          </div>
        </div>

        <div className={styles.card_container}>
          <OneWayCarousel numVisible={3} products={products} />
        </div>
      </div>
    </>
  );
}
