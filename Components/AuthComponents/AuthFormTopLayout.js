import React from "react";
import styles from "./css/authform.module.css";

export default function AuthFormTopLayout({
  children,
  formTitle,
  formdescreption,
}) {
  return (
    <>
      <div className={styles.AuthFormUi_formContainer}>
        <div className={styles.form_heading_Details}>
          <h4 className={styles.form_heading}>{formTitle}</h4>
          <p className={styles.formDescreption}>{formdescreption}</p>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
