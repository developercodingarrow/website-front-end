import React, { useState } from "react";
import { craeteNewForm } from "../../../Actions/formFiledAction";

export default function FormFieldComponent() {
  const [formFields, setFormFields] = useState([]);
  const [newField, setNewField] = useState({
    name: "",
    label: "",
    type: "Text",
    options: [], // For storing options for Radio, CheckBox, etc.
  });

  const handleAddField = () => {
    const { name, label, type, options } = newField;
    setFormFields([...formFields, { name, label, type, options }]);
    setNewField({
      name: "",
      label: "",
      type: "Text",
      options: [],
    });
  };

  const handleAddOption = (index) => {
    const updatedFields = [...formFields];
    updatedFields[index].options.push("");
    setFormFields(updatedFields);
  };

  const handleRemoveOption = (fieldIndex, optionIndex) => {
    const updatedFields = [...formFields];
    updatedFields[fieldIndex].options.splice(optionIndex, 1);
    setFormFields(updatedFields);
  };

  const handleFieldChange = (index, fieldName, value) => {
    const updatedFields = [...formFields];
    updatedFields[index][fieldName] = value;
    setFormFields(updatedFields);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = {
        name: "This is name",
        formFields: formFields,
      };
      const result = await craeteNewForm(data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Create Form Field for Jeans</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="formName">Form Name:</label>
          <input
            type="text"
            id="formName"
            placeholder="Form Name"
            value={newField.name}
            onChange={(e) => setNewField({ ...newField, name: e.target.value })}
          />
        </div>
        <button type="button" onClick={handleAddField}>
          Add Field
        </button>

        {formFields.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Label"
              value={field.label}
              onChange={(e) =>
                handleFieldChange(index, "label", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="name"
              value={field.name}
              onChange={(e) => handleFieldChange(index, "name", e.target.value)}
            />
            <select
              value={field.type}
              onChange={(e) => handleFieldChange(index, "type", e.target.value)}
            >
              <option value="Text">Text</option>
              <option value="Radio">Radio</option>
              <option value="checkbox">Check Box</option>
              {/* Add options for other field types */}
            </select>
            {field.type === "Radio" && (
              <>
                {field.options.map((option, optIndex) => (
                  <div key={optIndex}>
                    <input
                      type="text"
                      placeholder="Option"
                      value={option}
                      onChange={(e) =>
                        handleFieldChange(
                          index,
                          "options",
                          field.options.map((opt, i) =>
                            i === optIndex ? e.target.value : opt
                          )
                        )
                      }
                    />
                    <button
                      onClick={() => handleRemoveOption(index, optIndex)}
                      type="button"
                    >
                      Remove Option
                    </button>
                  </div>
                ))}
                <button onClick={() => handleAddOption(index)}>
                  Add Option
                </button>
              </>
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
