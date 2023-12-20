import React, { useContext } from "react";
import AuthFormLayout from "../../Components/AuthComponents/AuthFormLayout";
import { otpVerifation } from "../../JsonData/authFormFiled";
import { AuthContext } from "../../Context Api/AuthContextApi";
import VerificationUI from "../../Components/AuthComponents/VerificationUI";
export default function OtpVerification() {
  const { handelverifyOtp } = useContext(AuthContext);
  return (
    <>
      <AuthFormLayout bootomUi="forgatePassword">
        <VerificationUI
          formTitle={"verify OTP"}
          btntext="SEND OTP"
          formType="SINGUP"
          customInputs={otpVerifation}
          formdescreption="Enter your Register E-mail Address and send tour Otp for Reset your password"
          handleFormSubmit={handelverifyOtp}
        />
      </AuthFormLayout>
    </>
  );
}
