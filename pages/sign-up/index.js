import React from "react";
import AuthFormUi from "../../Utils/forms/AuthFormUi";
import { loginInputs } from "../../JsonData/authFormFiled";
import AuthFormLayout from "../../Components/Layouts/CommonLayouts/AuthFormLayout";

export default function SignUp() {
  return (
    <>
      <AuthFormLayout formTitle="Login">
        <AuthFormUi
          formTitle={"SING UP"}
          btntext="REGISTER"
          formType="SINGUP"
          formdescreption="Create an account to start using Dashcode"
        />
      </AuthFormLayout>
    </>
  );
}
