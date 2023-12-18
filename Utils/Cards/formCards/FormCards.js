import React from "react";
import styles from "./css/formCard.module.css";
import InputSecond from "../../input/InputSecond";

export default function FormCards(props) {
  const { title, customeInputs } = props;
  return (
    <>
      <div className={styles.card_wrapper}>
        <div className={styles.card_titleBox}>
          <p>{title}</p>
        </div>

        <div className={styles.card}>
          <div className={styles.card_body}>
            <form>
              {customeInputs.map(() => {
                return (
                  <InputSecond
                    inputDesign="inputDesign"
                    inputPadding="input_Padding"
                    inputplaceholder="user name"
                    inputContainer="block_container"
                    inputLabel="Name"
                    lableStyle="lable_style"
                  />
                );
              })}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
