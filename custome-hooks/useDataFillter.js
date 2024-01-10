import React from "react";
import ChipUi from "../Utils/sidebartest/ChipUi";
import SimpleUI from "../Utils/sidebartest/SimpleUi/SimpleUI";

export default function useDataFillter(uiStyle) {
  const renderInput = (input) => {
    switch (input.type) {
      case "text":
        return <input type="text" placeholder={input.placeholder} />;

      case "checkbox":
        if (uiStyle === "chip") {
          return (
            <ChipUi
              key={input._id}
              label={input.label}
              options={input.options}
              placeholder={input.placeholder}
            />
          );
        } else if (uiStyle === "simple") {
          return (
            <SimpleUI
              key={input._id}
              label={input.label}
              options={input.options}
              placeholder={input.placeholder}
            />
          );
        }
      case "radio":
        return (
          <div key={input._id}>
            <h4>{input.label}</h4>
            {input.options.map((option) => (
              <label key={option}>
                <input type="radio" value={option} />
                {option}
              </label>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return { renderInput };
}
