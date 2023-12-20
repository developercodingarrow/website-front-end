import React from "react";
import styles from "./css/formCard.module.css";
import SubmitBtn from "../../CustomeElements/Html Element/SubmitBtn";
import CustomeLink from "../../customeLinks/CustomeLink";
import { useCustomFormLogic } from "../../../custome-hooks/useCustomFormLogic";

export default function TestFormCard(props) {
  const { title, customeInputs, apiData, actionType } = props;
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
    setValue,
    onSubmit,
    renderInput,
  } = useCustomFormLogic(apiData);
  return (
    <>
      <div className={styles.card_wrapper}>
        <div className={styles.card_titleBox}>
          <p>{title}</p>
        </div>

        <div className={styles.card}>
          <div className={styles.card_body}>
            <form onSubmit={handleSubmit(onSubmit)}>
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
