import React from "react";
import { useRouter } from "next/router";
import styles from "./css/authform.module.css";
import Input from "../../Utils/input/Input";
import { useForm, Controller } from "react-hook-form";
import SubmitBtn from "../../Utils/CustomeElements/Html Element/SubmitBtn";
import CustomeLink from "../../Utils/customeLinks/CustomeLink";
import AuthFormTopLayout from "./AuthFormTopLayout";

export default function AuthFormUi(props) {
  const router = useRouter();
  const {
    formTitle,
    customInputs,
    btntext,
    formType,
    formdescreption,
    handelForm,
  } = props;
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
      name: "mobileNumber",
      type: "text",
      placeholder: "Enter Your Mobile Number",
      lable: "mobile Number",
      validation: {
        required: "mobile Number is required.",
      },
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "password",
      lable: "password",
      validation: {
        required: "Password is required.",
      },
    },
    {
      id: 5,
      name: "passwordConfirm",
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

  const handleFormSubmit = async (data) => {
    try {
      const result = await handelForm(data);
      console.log(result.data);
      if (result.data.apiFor === "register") {
        router.push(`/verify-otp/${result.data.UrlToken}`);
      } else if (result.data.apiFor === "Login") {
        router.push("/user-dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AuthFormTopLayout
        formTitle={formTitle}
        formdescreption={formdescreption}
      >
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
