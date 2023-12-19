import React from "react";
import styles from "./css/profile.module.css";
import InputSecond from "../../../Utils/input/InputSecond";
import FormCards from "../../../Utils/Cards/formCards/FormCards";
import {
  userDetails,
  CreditaionDetails,
  userDetailApi,
  CreditaionDetailsApi,
  BusinessDetails,
  BusinessDetailsApi,
} from "../../../JsonData/ProfileFileds";
export default function ProfileComponent() {
  console.log(BusinessDetails);
  console.log(BusinessDetailsApi);
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.form_wrapper}>
          <div className={styles.left_side}>
            <div>
              <FormCards
                title="USER DETAILS"
                customeInputs={userDetails}
                apiData={userDetailApi}
                actionType="submit"
              />
            </div>

            <div>
              <FormCards
                title="USER LOGIN DETAILS"
                customeInputs={CreditaionDetails}
                apiData={CreditaionDetailsApi}
                actionType="link"
              />
            </div>
          </div>
          <div className={styles.Right_side}>
            <div>
              <FormCards
                title="Business DETAILS"
                customeInputs={BusinessDetails}
                apiData={BusinessDetailsApi}
                actionType="submit"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
