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
import UploadImageSection from "../../../Utils/imageUpload/UploadImageSection";

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
                title="TEST INPUT"
                customeInputs={userDetails}
                apiData={userDetailApi}
                actionType="submit"
                handelfomSubmit={handelUserDetails}
              />
            </div>

            <div>
              <TestFormCard
                title="TEST DISABLE INPUTS"
                customeInputs={CreditaionDetails}
                apiData={CreditaionDetailsApi}
                actionType="link"
              />
            </div>
          </div>
          <div className={styles.Right_side}>
            <div>
              <TestFormCard
                title="TEST FORMS INPUT ELEMENST"
                customeInputs={BusinessDetails}
                apiData={BusinessDetailsApi}
                actionType="submit"
                handelfomSubmit={handelUserDetails}
              />
            </div>
            <div>
              <UploadImageSection title="TEST Image Uplaod Model" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
