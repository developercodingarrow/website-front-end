import React, { useContext, useState } from "react";
import styles from "./css/imageUploadModel.module.css";
import Image from "next/image";
import { useImageUploadModel } from "../../custome-hooks/useImageUploadModel";
import SimpleImagePreview from "./ImagePreviews/SimpleImagePreview";
import ImageDetails from "./ImageDetails";
import sampleImage from "../../public/companies-gallery-images/gallery-image-1703315616207-images.jpg";
import { CustomeContext } from "../../Context Api/CustimeContextApi";
import UplaodInput from "./UplaodInput";
import { handelDeleteGalleryImage } from "./ImageUplaodHandler";
import { useCustomFormLogiccopy } from "../../custome-hooks/useCustomFormLogiccopy";
export default function ImageUploadModel(props) {
  const { dataBaseImages, setdataBaseImages, loading, setloading } =
    useContext(CustomeContext);
  const {
    isOpen,
    closeModal,
    handelSubmitData,
    numberOfImages,
    imageFor,
    id,
    customeInputs,
  } = props;

  const {
    uploadedImages,
    imagePrivew,
    handelImageSelect,
    updateImageDetails,
    imageInfo,
    removeImage,
  } = useImageUploadModel("galleryPhotos", numberOfImages);

  const handelSubmitIamge = async () => {
    if (id) {
      setloading(true);
      const resposne = await handelSubmitData(
        uploadedImages,
        imageInfo,
        imageFor,
        id
      );
      console.log(resposne);
      setloading(false);
    } else {
      setloading(true);
      const response = await handelSubmitData(
        uploadedImages,
        imageInfo,
        imageFor
      );
      console.log(response);
      setloading(false);
    }
  };

  const handelDelteDataImage = async (imageId) => {
    try {
      setloading(true);
      const response = await handelDeleteGalleryImage(id, imageId);
      console.log(response);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };
  return (
    <div className={`${styles.modal_wrapper} ${isOpen ? styles.open : ""}`}>
      <div className={styles.model_container}>
        <div className={styles.model}>
          <div className={styles.model_topBar}>
            <p>Uplaod your Gallery Image</p>
          </div>
          <div className={styles.inner_Conatiner}>
            <div className={styles.content_side}>
              <div className={styles.inputSection}>
                <UplaodInput imageuplodhandel={handelImageSelect} />
              </div>
              <div className={styles.images_section}>
                <div className={styles.image_cardWrapper}>
                  <SimpleImagePreview
                    handelRemove={handelDelteDataImage}
                    imagesList={dataBaseImages}
                    actionFor="api"
                  />
                </div>
              </div>

              <div className={styles.images_section}>
                <div className={styles.image_cardWrapper}>
                  <SimpleImagePreview
                    handelRemove={removeImage}
                    imagesList={imagePrivew}
                    actionFor="static"
                  />
                </div>
              </div>
            </div>
            <div className={styles.input_side}>
              <ImageDetails
                handelImageDetails={updateImageDetails}
                imageState={imageInfo}
                input_wrapper="block_type"
                inputDesign="inputDesign"
                inputPadding="input_Padding"
                lableStyle="lable_style"
                readOnlyMode={false}
              />
            </div>
          </div>
          <div className={styles.model_Footer}>
            <button onClick={handelSubmitIamge}>upload image</button>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className={styles.modalContent}>
<span className={styles.close} onClick={closeModal}>
  &times;
</span>
<div className={styles.inner_container}>
  <div className={styles.uplaod_imageSide}>
    <div className={styles.image_upoaldBtnPart}>
      <h2>Upload Image</h2>
      <input type="file" onChange={handelImageChoose} />
    </div>
    <div className={styles.imagePriew_container}>
      <div className={styles.data_imageContainer}>
        {dataBaseImages && dataBaseImages.length > 0 ? (
          <div className={styles.data_images}>
            {dataBaseImages.map((image, i) => {
              return (
                <div>
                  <div>
                    <Image src={sampleImage} width={100} height={100} />
                  </div>
                  <div>
                    <button>Delete image</button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            {" "}
            <p>There is no image in gallery</p>{" "}
          </div>
        )}
      </div>
      <SimpleImagePreview
        uploadedImages={imagePrivew}
        handelRemove={removeImage}
      />
    </div>
  </div>
  <div className={styles.image_inputSide}>
    <div className={styles.imageDetailsWrapper}>
      <ImageDetails
        handelImageDetails={updateImageDetails}
        imageState={imageInfo}
      />
    </div>
  </div>
</div>
<div className={styles.model_footer}>
  <button onClick={handelSubmitIamge}>upload image</button>
</div>
</div> */
}
