import React, { useContext } from "react";
import AuthFormUi from "../../Utils/forms/AuthFormUi";
import AuthFormLayout from "../../Components/Layouts/CommonLayouts/AuthFormLayout";
import { forgotePasswordInputs } from "../../JsonData/authFormFiled";
import { AuthContext } from "../../Context Api/AuthContextApi";
export default function ForgotPasswordPage() {
  const { handelverifyOtp } = useContext(AuthContext);
  return (
    <>
      <AuthFormLayout bootomUi="forgatePassword">
        <AuthFormUi
          formTitle={"verify OTP"}
          btntext="SEND OTP"
          formType="SINGUP"
          customInputs={forgotePasswordInputs}
          formdescreption="Enter your Register E-mail Address and send tour Otp for Reset your password"
          handelForm={handelverifyOtp}
        />
      </AuthFormLayout>
    </>
  );
}
