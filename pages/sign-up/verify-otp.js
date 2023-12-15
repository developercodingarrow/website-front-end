import React from "react";
import AuthFormUi from "../../Utils/forms/AuthFormUi";
import AuthFormLayout from "../../Components/Layouts/CommonLayouts/AuthFormLayout";
import { forgotePasswordInputs } from "../../JsonData/authFormFiled";

export default function VerifyOtpPage() {
  return (
    <>
      <AuthFormLayout bootomUi="Verify OTP">
        <AuthFormUi
          formTitle={"VERIFY OTP"}
          btntext="Verify OTP"
          formType="SINGUP"
          customInputs={forgotePasswordInputs}
          formdescreption="Enter OTP Which is sent to your Email"
        />
      </AuthFormLayout>
    </>
  );
}
