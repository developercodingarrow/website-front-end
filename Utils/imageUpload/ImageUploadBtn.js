import React from "react";

export default function ImageUploadBtn(props) {
  const { openModal } = props;
  return (
    <>
      <button onClick={openModal}>Upload Image</button>
    </>
  );
}
