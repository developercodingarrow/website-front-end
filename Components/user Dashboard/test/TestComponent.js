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
import ImageUplaodCard from "../../../Utils/Cards/formCards/ImageUplaodCard";
export default function TestComponent() {
  const handelUserDetails = (data) => {
    alert(JSON.stringify(data));
    console.log(data.image);
    console.log(data.textInput);
  };

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
                handelfomSubmit={handelUserDetails}
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
                handelfomSubmit={handelUserDetails}
              />
            </div>
            <div>
              <ImageUplaodCard title="Upload Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
