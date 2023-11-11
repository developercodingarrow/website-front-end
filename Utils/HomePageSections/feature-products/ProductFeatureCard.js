import React from "react";
import styles from "../feature-products/css/ProductFeatureCard.module.css";
import Image from "next/image";
import categoriesSample from "../../../public/categories-img/category-1.jpg";
import Link from "next/link";
import {
  LuIndianRupee,
  BsFillArrowRightCircleFill,
} from "./../../../Utils/ApplicationIcon";
export default function ProductFeatureCard() {
  return (
    <>
      <div className={styles.card_mainContainer}>
        <div className={styles.card_imageBox}>
          <Link href={"/"} className={styles.image_link}>
            <Image
              src={categoriesSample}
              width={500}
              height={500}
              className={styles.imageStyle}
            />
          </Link>
        </div>
        <div className={styles.card_contentBox}>
          <div className={styles.card_title}>
            <Link href={"/"} className={styles.carName_linkstyle}>
              Left Heading Of Brandix z54
            </Link>
          </div>
          <div className={styles.card_location}>
            <Link href={"/"} className={styles.carSate_linkstyle}>
              Haryana
            </Link>
            <Link href={"/"} className={styles.carCity_linkstyle}>
              Gurgaon
            </Link>
          </div>
        </div>
        <div className={styles.card_ActionBox}>
          <div className={styles.card_priceBox}>
            <div className={styles.priceIconBox}>
              <LuIndianRupee />
            </div>
            <div className={styles.card_price}>235</div>
          </div>
          <div className={styles.arrow_iconBox}>
            <BsFillArrowRightCircleFill className={styles.arrowStyle} />
          </div>
        </div>
      </div>
    </>
  );
}
