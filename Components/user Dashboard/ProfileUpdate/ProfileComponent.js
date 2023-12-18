import React from "react";
import styles from "./css/profile.module.css";
import InputSecond from "../../../Utils/input/InputSecond";
import FormCards from "../../../Utils/Cards/formCards/FormCards";
import {
  userDetails,
  CreditaionDetails,
} from "../../../JsonData/ProfileFileds";
export default function ProfileComponent() {
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.form_wrapper}>
          <div className={styles.left_side}>
            <FormCards title="USER DETAILS" customeInputs={userDetails} />

            <FormCards
              title="USER LOGIN DETAILS"
              customeInputs={CreditaionDetails}
            />
          </div>
          <div className={styles.Right_side}>
            <div className={styles.card}>
              <div className={styles.card_body}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
