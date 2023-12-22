import React, { useState } from "react";
import styles from "./css/simpleImagepreview.module.css";
import Image from "next/image";

export default function SimpleImagePreview(props) {
  const { uploadedImages, onImageClick, selectedImageIndex } = props;

  //   const [selectedImage, setSelectedImage] = useState(null);

  //   const handleImageClick = (index) => {
  //     if (selectedImage === index) {
  //       setSelectedImage(null);
  //     } else {
  //       setSelectedImage(index);
  //     }
  //   };

  return (
    <div className={styles.imagePreviews}>
      {uploadedImages.map((image, index) => (
        <div
          key={index}
          className={styles.imagePreview}
          onClick={() => onImageClick(index)}
        >
          <img src={image} alt={`Preview ${index}`} width={100} height={100} />
        </div>
      ))}
    </div>
  );
}

function ImageDetails({
  index,
  imageDetails,
  updateImageDetails,
  removeImage,
}) {
  const imgesDetails = [
    {
      id: 1,
      name: "altText",
      type: "text",
      placeholder: "Alt Text",
      label: "Alt Text",
      validation: {
        required: "Alt Text is required.",
      },
    },
    {
      id: 2,
      name: "description",
      type: "text",
      placeholder: "Description",
      label: "Description",
      validation: {
        required: "Description is required.",
      },
    },
  ];

  return (
    <div className={styles.imageDetails}>
      {imgesDetails.map((detail) => (
        <div key={detail.id}>
          <label>{detail.label}</label>
          <input
            type={detail.type}
            name={detail.name}
            placeholder={detail.placeholder}
            value={imageDetails[index]?.[detail.name] || ""}
            onChange={(e) =>
              updateImageDetails(index, detail.name, e.target.value)
            }
          />
        </div>
      ))}
      <button onClick={() => removeImage(index)}>Remove</button>
    </div>
  );
}
