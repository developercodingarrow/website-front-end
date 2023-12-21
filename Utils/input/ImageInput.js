import React from "react";

export default function ImageInput(props) {
  const { imageChangeHandel } = props;
  return (
    <>
      <div>
        <p style={{ color: "red", fontSize: "12px" }}>Upload image</p>
        <input type="file" onChange={imageChangeHandel} />
      </div>
    </>
  );
}
