import React, { useContext, useState } from "react";
import styles from "./css/carousel.module.css";
import ProductFeatureCard from "../HomePageSections/feature-products/ProductFeatureCard";
import { CarouselContext } from "../../Context Api/CarouselContextApi";

export default function OneWayCarousel({ numVisible, products }) {
  const { currentSlide, nextSlide, prevSlide } = useContext(CarouselContext);

  const totalSlides = Math.ceil(products.length / numVisible);

  const handelPreviou = () => {
    prevSlide(totalSlides);
  };

  const handelNext = () => {
    nextSlide(totalSlides);
  };

  return (
    <>
      <div className={styles.carouselContainer}>
        <div
          className={styles.productsWrapper}
          style={{ transform: `translateX(-${currentSlide * 108}%)` }}
        >
          {products.map((product, index) => (
            <ProductFeatureCard
              style={{ flex: `0 0 calc(100% / ${numVisible})` }}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
