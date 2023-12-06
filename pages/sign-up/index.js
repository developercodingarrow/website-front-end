import React from "react";
import AuthFormUi from "../../Utils/forms/AuthFormUi";
import { loginInputs } from "../../JsonData/authFormFiled";

export default function SignUp() {
  return (
    <>
      <div>
        <AuthFormUi formTitle={"LOGIN Up"} customInputs={loginInputs} />
      </div>
    </>
  );
}
