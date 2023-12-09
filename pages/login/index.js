import React from "react";
import AuthFormUi from "../../Utils/forms/AuthFormUi";
import { loginInputs } from "../../JsonData/authFormFiled";
import AuthFormLayout from "../../Components/Layouts/CommonLayouts/AuthFormLayout";
export default function index() {
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
