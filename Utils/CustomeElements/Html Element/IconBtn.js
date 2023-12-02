import React from "react";
import styles from "../css/buttons.module.css";
import { MdDelete, CiEdit } from "../../ApplicationIcon";

export default function IconBtn(props) {
  const { icontype, buttonstyle, btnColor, btnSze, btnAction } = props;
  const IconComponent =
    {
      deleteIcon: MdDelete,
      editIcon: CiEdit,
    }[icontype] || null;

  const buttonClasses = `${styles[buttonstyle]} ${styles[btnColor]} ${styles[btnSze]}`;
  return (
    <>
      <div>
        <button className={buttonClasses} onClick={btnAction}>
          <IconComponent />
        </button>
      </div>
    </>
  );
}
