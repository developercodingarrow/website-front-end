import React, { useContext } from "react";
import AuthFormUi from "../../Components/AuthComponents/AuthFormUi";
import AuthFormLayout from "../../Components/AuthComponents/AuthFormLayout";
import { AuthContext } from "../../Context Api/AuthContextApi";

export default function SignUpPage() {
  const { handelCreateNewUser } = useContext(AuthContext);
  return (
    <>
      <AuthFormLayout formTitle="Login">
        <AuthFormUi
          formTitle={"SING UP"}
          btntext="REGISTER"
          formType="SINGUP"
          formdescreption="Create an account to start using Dashcode"
          handelForm={handelCreateNewUser}
        />
      </AuthFormLayout>
    </>
  );
}
