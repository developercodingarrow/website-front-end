import React, { useContext } from "react";
import AuthFormLayout from "../../Components/AuthComponents/AuthFormLayout";
import { forgotePasswordInputs } from "../../JsonData/authFormFiled";
import { AuthContext } from "../../Context Api/AuthContextApi";
import VerificationUI from "../../Components/AuthComponents/VerificationUI";
export default function ForgotePassword() {
  const { handelverifyOtp } = useContext(AuthContext);
  return (
    <>
      <AuthFormLayout bootomUi="forgatePassword">
        <VerificationUI
          formTitle={"FORGOTE PASSWORD"}
          btntext="SEND EMAIL"
          formType="forgote-password"
          customInputs={forgotePasswordInputs}
          formdescreption="Enter your Register E-mail Address and send tour Otp for Reset your password"
          handelForm={handelverifyOtp}
        />
      </AuthFormLayout>
    </>
  );
}
