import React from "react";
import AuthFormUi from "../../Components/AuthComponents/AuthFormUi";
import { loginInputs } from "../../JsonData/authFormFiled";
import AuthFormLayout from "../../Components/AuthComponents/AuthFormLayout";
export default function LoginPage() {
  return (
    <>
      <AuthFormLayout>
        <AuthFormUi
          formTitle={"LOGIN"}
          btntext="LOGIN"
          formType="LOGIN"
          customInputs={loginInputs}
          formdescreption="Login an account to start using Dashcode"
        />
      </AuthFormLayout>
    </>
  );
}
