import React from "react";
import styles from "./css/authFormLayout.module.css";
import Image from "next/image";
import sideBanner from "../../../public/website-images/sideBanner.jpg";

export default function AuthFormLayout({ children, formTitle }) {
  return (
    <>
      <div className={styles.AuthFormUi_mainContainer}>
        <div className={styles.AuthFormUi_bannerSide}>
          <Image
            src={sideBanner}
            alt="side banner"
            width={900}
            height={900}
            className={styles.sideBannerImage}
          />
        </div>
        <div className={styles.AuthFormUi_formSide}>
          <div className={styles.AuthFormUi_formContainer}>{children}</div>
        </div>
      </div>
    </>
  );
}
