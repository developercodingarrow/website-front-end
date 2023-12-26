import React, { useEffect, useState } from "react";
import styles from "./css/imageUploadPart.module.css";
import ImageUploadBtn from "./ImageUploadBtn";
import ImageUploadModel from "./ImageUploadModel";
import { useImageUploadModel } from "../../custome-hooks/useImageUploadModel";
import { handelUplaodGallery } from "./ImageUplaodHandler";
import { imgesDetailsFileds } from "../../JsonData/imageUploadsFileds";

export default function UploadImageSection(props) {
  const { title } = props;
  const { isModalOpen, openModal, closeModal } = useImageUploadModel();

  return (
    <>
      <div className={styles.card_wrapper}>
        <div className={styles.card_titleBox}>
          <p>{title}</p>
        </div>

        <div className={styles.card}>
          <div className={styles.card_body}>
            <ImageUploadBtn openModal={openModal} />
            <ImageUploadModel
              isOpen={isModalOpen}
              closeModal={closeModal}
              numberOfImages={5}
              handelSubmitData={handelUplaodGallery}
              imageFor="galleryPhotos"
              id="6584058de8a345aa157d21f2"
              customeInputs={imgesDetailsFileds}
            />
          </div>
        </div>
      </div>
    </>
  );
}
