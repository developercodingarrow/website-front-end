import React from "react";
import styles from "./css/formCard.module.css";
import InputSecond from "../../input/InputSecond";
import { useForm, Controller } from "react-hook-form";
import SubmitBtn from "../../CustomeElements/Html Element/SubmitBtn";
import CustomeLink from "../../customeLinks/CustomeLink";
import SelectInput from "../../input/SelectInput";
import CheckboxInput from "../../input/CheckboxInput";
import RadioInput from "../../input/RadioInput";

export default function FormCards(props) {
  const { title, customeInputs, apiData, actionType } = props;

  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
    setValue,
  } = useForm({
    mode: "all", // Use "onChange" mode for real-time validation as the user types
  });

  const handelFormSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  console.log(apiData.name);

  // Function to render input based on type
  const renderInput = (input) => {
    let InputComponent, specificProps;
    let defaultValue = apiData[input.name];
    switch (input.type) {
      case "text":
        InputComponent = InputSecond;
        specificProps = {
          inputDesign: "inputDesign",
          inputPadding: "input_Padding",
          inputplaceholder: input.placeholder,
          inputContainer: "block_container",
          inputLabel: input.label,
          lableStyle: "lable_style",
          defaultValue: defaultValue || "",
          // Add specific props for InputSecond
        };
        break;
      case "select":
        InputComponent = SelectInput;
        specificProps = {
          selectOptions: input.options || [],
          inputLabel: input.label,
          lableStyle: "lable_style",
          inputContainer: "block_container",
        };
        break;
      case "checkbox":
        InputComponent = CheckboxInput;
        specificProps = {
          checkBoxOptions: input.options,
          inputLabel: input.label,
          onChange: (selectedOptions) => setValue(input.name, selectedOptions), // Update the form value
          defaultValue: defaultValue || [],
          checkBoxStyle: "inLine_customCheckbox_wrapper",
          checkBoxContainerStyle: "inLine_checkBox_container",
        };
        break;
      case "radio":
        InputComponent = RadioInput;
        specificProps = {
          radioOptions: input.options || [],
          onChange: (selectedOption) => setValue(input.name, selectedOption), // Update the form value
          selectedOption: watch(input.name),
          inputLabel: input.label,
          lableStyle: "lable_style",
          inputContainer: "block_container",
          defaultValue: defaultValue || "",
          radiostyle: "inlineRadio_container",
          radioTitleGap: "title_rowGap",
          radio_textgap: "radio_btn_textGap",
          radioOptionBox: "inline_radioOptionBox",
        };
        break;
      default:
        return null;
    }

    return (
      <Controller
        key={input.id}
        name={input.name}
        control={control}
        defaultValue={defaultValue}
        rules={input.validation}
        render={({ field }) => (
          console.log(field),
          (
            <InputComponent
              {...input}
              {...field}
              {...specificProps} // Merge specificProps with the input component props
            />
          )
        )}
      />
    );
  };

  return (
    <>
      <div className={styles.card_wrapper}>
        <div className={styles.card_titleBox}>
          <p>{title}</p>
        </div>

        <div className={styles.card}>
          <div className={styles.card_body}>
            <form onSubmit={handleSubmit(handelFormSubmit)}>
              <div className={styles.card_input_wrapper}>
                {customeInputs.map((input) => renderInput(input))}
              </div>

              <div className={styles.card_btnBox}>
                {actionType === "submit" ? (
                  <div>
                    <SubmitBtn
                      text="submit"
                      buttonstyle="smallbtn"
                      btnColor="primaryBtnColor"
                      btnSze="smallbtn"
                      disabled={!isValid}
                    />
                  </div>
                ) : (
                  <div>
                    <CustomeLink
                      reDirectPath="/Edit"
                      text="Edit"
                      linkStyle="linkStyle"
                      linkColor="linkColor"
                      linkSze="linkSize"
                    />{" "}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

/*
  {customeInputs.map((input, i) => {
                  return (
                    <div>
                      <Controller
                        name={input.name}
                        control={control}
                        defaultValue={apiData[input.name]}
                        rules={input.validation}
                        render={({ field }) => (
                          <>
                            <InputSecond
                              {...input}
                              {...field}
                              inputDesign="inputDesign"
                              inputPadding="input_Padding"
                              inputplaceholder="user name"
                              inputContainer="block_container"
                              inputLabel="Name"
                              lableStyle="lable_style"
                            />
                          </>
                        )}
                      />
                    </div>
                  );
                })}

*/
