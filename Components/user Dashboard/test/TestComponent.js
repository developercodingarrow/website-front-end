import React from "react";
import styles from "../ProfileUpdate/css/profile.module.css";
import TestFormCard from "../../../Utils/Cards/formCards/TestFormCard";
import {
  userDetails,
  CreditaionDetails,
  userDetailApi,
  CreditaionDetailsApi,
  BusinessDetails,
  BusinessDetailsApi,
} from "../../../JsonData/ProfileFileds";
export default function TestComponent() {
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.form_wrapper}>
          <div className={styles.left_side}>
            <div>
              <TestFormCard
                title="USER DETAILS"
                customeInputs={userDetails}
                apiData={userDetailApi}
                actionType="submit"
              />
            </div>

            <div>
              <TestFormCard
                title="USER LOGIN DETAILS"
                customeInputs={CreditaionDetails}
                apiData={CreditaionDetailsApi}
                actionType="link"
              />
            </div>
          </div>
          <div className={styles.Right_side}>
            <div>
              <TestFormCard
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
