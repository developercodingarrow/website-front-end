import React from "react";
import styles from "./css/formCard.module.css";
import ImageInput from "../../input/ImageInput";
import useImageUpload from "../../../custome-hooks/useImageUpload";
import Image from "next/image";

export default function ImageUplaodCard(props) {
  const { title, handelfomSubmit } = props;

  const handelUplaodImage = (imageDta, id) => {
    // console.log(imageDta);
    console.log(id);
  };

  const { image, handleImageChange, UploadImage } =
    useImageUpload(handelUplaodImage);

  return (
    <>
      <div className={styles.card_wrapper}>
        <div className={styles.card_titleBox}>
          <p>{title}</p>
        </div>

        <div className={styles.card}>
          <div className={styles.card_body}>
            <ImageInput imageChangeHandel={handleImageChange} />

            <div>
              {image && (
                <div>
                  <Image src={image} alt="Uploaded" width={100} height={100} />
                </div>
              )}
            </div>

            <button onClick={UploadImage}>Upload</button>
          </div>
        </div>
      </div>
    </>
  );
}
