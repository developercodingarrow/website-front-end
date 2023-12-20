import React from "react";
import AuthFormUi from "../../Components/AuthComponents/AuthFormUi";
import { loginInputs } from "../../JsonData/authFormFiled";
import AuthFormLayout from "../../Components/AuthComponents/AuthFormLayout";
import AuthFormUiTest from "../../Components/AuthComponents/AuthFormUi";

export default function LoginPage() {
  const onFormSubmit = (data, handleForm) => {
    // Your default submission action
    alert(JSON.stringify(data));
  };
  return (
    <>
      <AuthFormLayout>
        <AuthFormUi
          formTitle={"LOGIN"}
          btntext="LOGIN"
          formType="LOGIN"
          customInputs={loginInputs}
          formdescreption="Login an account to start using Dashcode"
          handleFormSubmit={onFormSubmit}
        />
      </AuthFormLayout>
    </>
  );
}
