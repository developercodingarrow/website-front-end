import React from "react";
import styles from "./css/formCard.module.css";
import SubmitBtn from "../../CustomeElements/Html Element/SubmitBtn";
import CustomeLink from "../../customeLinks/CustomeLink";
import { useCustomFormLogiccopy } from "../../../custome-hooks/useCustomFormLogiccopy";

export default function TestFormCard(props) {
  const { title, customeInputs, apiData, actionType, handelfomSubmit } = props;
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
    setValue,
    renderInput,
  } = useCustomFormLogiccopy(apiData);
  return (
    <>
      <div className={styles.card_wrapper}>
        <div className={styles.card_titleBox}>
          <p>{title}</p>
        </div>

        <div className={styles.card}>
          <div className={styles.card_body}>
            <form onSubmit={handleSubmit(handelfomSubmit)}>
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
