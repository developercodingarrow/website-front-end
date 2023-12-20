import React, { useContext } from "react";
import { useRouter } from "next/router";
import styles from "./css/authform.module.css";
import Input from "../../Utils/input/Input";
import { useForm, Controller } from "react-hook-form";
import SubmitBtn from "../../Utils/CustomeElements/Html Element/SubmitBtn";
import CustomeLink from "../../Utils/customeLinks/CustomeLink";
import AuthFormTopLayout from "./AuthFormTopLayout";
import { AuthContext } from "../../Context Api/AuthContextApi";
import useCustomeAuthFormLogic from "../../custome-hooks/useCustomeAuthFormLogic";

export default function AuthFormUi(props) {
  const router = useRouter();
  const { loading, setloading } = useContext(AuthContext);
  const {
    formTitle,
    customInputs,
    btntext,
    formType,
    formdescreption,
    handleFormSubmit,
  } = props;

  const {
    handleSubmit,
    formState,
    control,
    watch,
    renderInput,
    updatedInputs,
    isValid,
    errors,
  } = useCustomeAuthFormLogic(customInputs, formType);

  return (
    <>
      <AuthFormTopLayout
        formTitle={formTitle}
        formdescreption={formdescreption}
      >
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          {updatedInputs.map((input) => (
            <div key={input.id}>
              {renderInput(input)}
              {errors[input.name] && (
                <p className={"error_Msg"}>{errors[input.name].message}</p>
              )}
            </div>
          ))}
          {formType === "LOGIN" && (
            <div className={styles.forgote_Password}>
              <CustomeLink
                reDirectPath="/forgot-password"
                text="forgate password"
                linkStyle="linkStyle"
                linkColor="linkColor"
                linkSze="linkSize"
              />
            </div>
          )}

          <div className={styles.btnBox}>
            <SubmitBtn
              text={btntext}
              buttonstyle="smallbtn"
              btnColor="primaryBtnColor"
              btnSze="smallbtn"
              disabled={!isValid}
              loading={loading}
            />
          </div>
        </form>
        {formType === "SINGUP" && (
          <div className={styles.singup_linkBox}>
            <span>Don't have an account ? </span>{" "}
            <span>
              <CustomeLink
                reDirectPath="/login"
                text="Login"
                linkStyle="linkStyle"
                linkColor="linkColor"
                linkSze="linkSize"
              />{" "}
            </span>
          </div>
        )}

        {formType === "LOGIN" && (
          <div className={styles.singup_linkBox}>
            <span>Don't have an account ? </span>{" "}
            <span>
              <CustomeLink
                reDirectPath="/sign-up"
                text="SING UP"
                linkStyle="linkStyle"
                linkColor="linkColor"
                linkSze="linkSize"
              />{" "}
            </span>
          </div>
        )}
      </AuthFormTopLayout>
    </>
  );
}
