import React from "react";
import styles from "./css/uploadinput.module.css";
export default function UplaodInput(props) {
  const { imageuplodhandel } = props;

  const handelImageChoose = (e) => {
    imageuplodhandel(e);
  };
  return (
    <div>
      <input type="file" onChange={handelImageChoose} />
    </div>
  );
}
