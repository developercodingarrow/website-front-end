import { useForm, Controller } from "react-hook-form";
import InputSecond from "../Utils/input/InputSecond";
import SelectInput from "../Utils/input/SelectInput";
import CheckboxInput from "../Utils/input/CheckboxInput";
import RadioInput from "../Utils/input/RadioInput";

export function useCustomFormLogic(apiData) {
  const { handleSubmit, formState, control, watch, setValue } = useForm({
    mode: "all",
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

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
        defaultValue={apiData[input.name]}
        rules={input.validation}
        render={({ field }) => (
          <InputComponent {...input} {...field} {...specificProps} />
        )}
      />
    );
  };

  return {
    handleSubmit,
    formState,
    control,
    watch,
    setValue,
    onSubmit,
    renderInput,
  };
}
