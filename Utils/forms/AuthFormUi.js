import React from "react";
import styles from "./css/authFormUi.module.css";
import Image from "next/image";
import sideBanner from "../../public/website-images/sideBanner.jpg";
import Input from "../input/Input";
import { useForm, Controller } from "react-hook-form";
import Buttons from "../CustomeElements/Html Element/Buttons";
import SubmitBtn from "../CustomeElements/Html Element/SubmitBtn";
import CustomeLink from "../customeLinks/CustomeLink";

export default function AuthFormUi(props) {
  const { formTitle, customInputs, btntext, formType, formdescreption } = props;
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
  } = useForm({
    mode: "all", // Use "onChange" mode for real-time validation as the user types
  });

  const SignUpInputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "User Name",
      lable: "Name",
      validation: {
        required: "Name is required.",
      },
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "email",
      lable: "email",
      validation: {
        required: "Email is required.",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email address.",
        },
      },
    },
    {
      id: 3,
      name: "password",
      type: "text",
      placeholder: "password",
      lable: "password",
      validation: {
        required: "Password is required.",
      },
    },
    {
      id: 4,
      name: "Confirmpassword",
      type: "text",
      placeholder: "Confirm password",
      lable: "Confirm password",
      validation: {
        required: "Confirm Password is required.",
        validate: (value) =>
          value === watch("password") || "Passwords do not match.",
      },
    },
  ];

  const inputsToRender = customInputs ? customInputs : SignUpInputs;

  const handleFormSubmit = (data) => {
    alert("Form submitted with data: " + JSON.stringify(data));
  };

  return (
    <>
      <div className={styles.AuthFormUi_formContainer}>
        <div className={styles.form_heading_Details}>
          <h4 className={styles.form_heading}>{formTitle}</h4>
          <p className={styles.formDescreption}>{formdescreption}</p>
        </div>
        <div>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            {inputsToRender.map((input, i) => {
              return (
                <div>
                  <Controller
                    name={input.name}
                    control={control}
                    defaultValue=""
                    rules={input.validation}
                    render={({ field }) => (
                      <>
                        <Input
                          key={input.id}
                          {...input}
                          {...field}
                          inputDesign={"primaryInput"}
                          inputPadding={"primary_pading"}
                          inputContainer={"blockContainer"}
                        />
                        {errors[input.name] && (
                          <p className={"error_Msg"}>
                            {errors[input.name].message}
                          </p>
                        )}
                      </>
                    )}
                  />
                </div>
              );
            })}

            {formType === "LOGIN" && (
              <div className={styles.forgote_Password}>
                <CustomeLink
                  reDirectPath="/sign-up"
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
              />
            </div>
          </form>
        </div>
        {formType === "SINGUP" && (
          <div className={styles.singup_linkBox}>
            {/* Content to show when formType is SINGUP */}
            <span>Don't have an account ? </span>{" "}
            <span>
              {" "}
              <CustomeLink
                reDirectPath="/login"
                text="SignUp"
                linkStyle="linkStyle"
                linkColor="linkColor"
                linkSze="linkSize"
              />{" "}
            </span>
          </div>
        )}
      </div>
    </>
  );
}
