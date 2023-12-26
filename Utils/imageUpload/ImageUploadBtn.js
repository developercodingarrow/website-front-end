import React from "react";
import styles from "./css/imageUplaodBtn.module.css";
import { BiSolidCloudUpload } from "../ApplicationIcon";

export default function ImageUploadBtn(props) {
  const { openModal } = props;
  return (
    <>
      <button className={styles.uploadButton} onClick={openModal}>
        <BiSolidCloudUpload size={20} className={styles.icon} />
        Upload Image
      </button>
    </>
  );
}
