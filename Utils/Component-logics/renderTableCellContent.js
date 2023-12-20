// CellContentRenderer.js

import React from "react";
import { CheckBoxElementsForSingle } from "../CustomeElements/Html Element/CheckBoxElements";
import SwitchBtn from "../CustomeElements/Html Element/SwitchBtn";
import Buttons from "../CustomeElements/Html Element/Buttons";

const renderCellContent = (data, id, componentType, handler) => {
  switch (componentType) {
    case "text":
      return data;
    case "checkbox":
      if (handler) {
        return (
          <CheckBoxElementsForSingle
            chekBoxStatus={data}
            handleCheckboxChange={handler}
            dataId={id}
          />
        );
      }
      break;

    case "switch":
      if (handler) {
        return (
          <>
            <SwitchBtn status={data} handelApi={handler} dataId={id} />
          </>
        );
      }
      break;

    case "delete":
      if (handler) {
        return (
          <Buttons
            text={"check"}
            buttonstyle={"smallbtn"}
            btnColor={"seconderyBtnColor"}
            btnSze={"smallbtn"}
            btnAction={handler}
          />
        );
      }
      break;

    default:
      return data;
  }
};

export default renderCellContent;
