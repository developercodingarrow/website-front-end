import React from "react";
import styles from "./css/authFormUi.module.css";
import Image from "next/image";
import sideBanner from "../../public/website-images/sideBanner.jpg";

export default function AuthFormUi() {
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
          <div className={styles.AuthFormUi_formContainer}>
            <div className={styles.form_heading_Details}>
              <h4 className={styles.form_heading}>Sign up</h4>
              <p className={styles.formDescreption}>
                Create an account to start using Dashcode
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
