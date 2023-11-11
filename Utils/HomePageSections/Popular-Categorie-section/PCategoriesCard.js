import React from "react";
import styles from "./css/PcategoriesCard.module.css";
import Image from "next/image";
import categoriesSample from "../../../public/categories-img/category-1.jpg";
import Link from "next/link";

export default function PCategoriesCard() {
  return (
    <>
      <div className={styles.card_mainContainer}>
        <div className={styles.card_body}>
          <div className={styles.image_container}>
            <div className={styles.card_img}>
              <Image
                src={categoriesSample}
                width={500}
                height={500}
                className={styles.categories_imageStyle}
              />
            </div>
          </div>
          <div className={styles.card_content}>
            <div className={styles.category_card_name}>
              <Link href={"/"} className={styles.linkStyle}>
                Headlights & Lighting
              </Link>
            </div>
            <div className={styles.caterory_card_listBox}>
              {[1, 2, 3, 4, 5].map((el, i) => {
                return (
                  <Link href={"/"} className={styles.linkStyle}>
                    <div className={styles.categories_list}>Turn Singles</div>
                  </Link>
                );
              })}
            </div>
            <div className={styles.card_action}>
              <Link href={"/"} className={styles.actionLinkStyle}>
                Shop All
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
