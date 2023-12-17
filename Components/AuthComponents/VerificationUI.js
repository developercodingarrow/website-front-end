import React, { useContext } from "react";
import { useRouter } from "next/router";
import styles from "./css/authform.module.css";
import AuthFormTopLayout from "./AuthFormTopLayout";
import Input from "../../Utils/input/Input";
import { Controller, useForm } from "react-hook-form";
import SubmitBtn from "../../Utils/CustomeElements/Html Element/SubmitBtn";
import { AuthContext } from "../../Context Api/AuthContextApi";

export default function VerificationUI(props) {
  const { loading, setloading } = useContext(AuthContext);
  const router = useRouter();
  const { UrlToken } = router.query;
  console.log(UrlToken);
  const { formTitle, formdescreption, btntext, customInputs, handelForm } =
    props;

  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
  } = useForm({
    mode: "all",
  });

  const handleFormSubmit = async (data) => {
    try {
      setloading(true);
      const result = await handelForm(data, UrlToken);
      console.log(result);
      setloading(false);
    } catch (error) {
      setloading(false);
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
          {customInputs.map((input, i) => {
            return (
              <div key={i}>
                <Controller
                  name={input.name}
                  control={control}
                  defaultValue=""
                  rules={input.validation}
                  render={({ field }) => (
                    <>
                      <Input
                        key={input.id}
                        {...field}
                        {...input}
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
      </AuthFormTopLayout>
    </>
  );
}
