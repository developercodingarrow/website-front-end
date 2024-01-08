import React from "react";

export default function CheckBox({ value, label }) {
  return (
    <>
      <label>
        <input type="checkbox" value={value} />
        {label}
      </label>
    </>
  );
}
