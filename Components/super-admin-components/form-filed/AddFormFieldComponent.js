import React, { useState } from "react";
import { useRouter } from "next/router";
import { addformFiled } from "../../../Actions/formFiledAction";

export default function AddFormFieldComponent() {
  const router = useRouter();
  const { slug } = router.query;
  const [showForm, setShowForm] = useState(false);
  const [newField, setNewField] = useState({
    label: "",
    name: "",
    placeholder: "",
    type: "Text",
    options: [],
  });
  const [formFields, setFormFields] = useState([]);

  const handleAddField = () => {
    setFormFields([...formFields, { ...newField }]);
    setNewField({
      label: "",
      name: "",
      placeholder: "",
      type: "Text",
      options: [],
    });
  };

  const handleTypeChange = (e) => {
    const type = e.target.value;
    setNewField({
      ...newField,
      type,
      options: type === "Text" ? [] : newField.options, // Clear options if type is Text
    });
  };

  const handleOptionChange = (e, index) => {
    const updatedOptions = [...newField.options];
    updatedOptions[index] = e.target.value;
    setNewField({ ...newField, options: updatedOptions });
  };

  const handleAddOption = () => {
    setNewField({ ...newField, options: [...newField.options, ""] });
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = [...newField.options];
    updatedOptions.splice(index, 1);
    setNewField({ ...newField, options: updatedOptions });
  };

  const handleSubmit = async () => {
    try {
      const fildData = { formFields: formFields };
      const response = await addformFiled(fildData, slug);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={() => setShowForm(true)}>Add Field</button>
      {showForm && (
        <div>
          <input
            type="text"
            placeholder="Label"
            value={newField.label}
            onChange={(e) =>
              setNewField({ ...newField, label: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Name"
            value={newField.name}
            onChange={(e) => setNewField({ ...newField, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Placeholder"
            value={newField.placeholder}
            onChange={(e) =>
              setNewField({ ...newField, placeholder: e.target.value })
            }
          />
          <select value={newField.type} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="Checkbox">Checkbox</option>
            <option value="Radio">Radio</option>
          </select>
          {newField.type === "Checkbox" || newField.type === "Radio" ? (
            <div>
              {newField.options.map((option, index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder={`Option ${index + 1}`}
                    value={option}
                    onChange={(e) => handleOptionChange(e, index)}
                  />
                  <button onClick={() => handleRemoveOption(index)}>
                    Remove
                  </button>
                </div>
              ))}
              <button onClick={handleAddOption}>Add Option</button>
            </div>
          ) : null}
          <button onClick={handleAddField}>Add Field</button>

          <div>
            {formFields.length > 0 && (
              <button onClick={handleSubmit}>Submit</button>
            )}
          </div>
        </div>
      )}
      <div>
        {formFields.map((field, index) => (
          <div key={index}>
            <p>{`Field ${index + 1}`}</p>
            <p>{`Label: ${field.label}`}</p>
            <p>{`Name: ${field.name}`}</p>
            <p>{`Placeholder: ${field.placeholder}`}</p>
            <p>{`Type: ${field.type}`}</p>
            {field.type !== "Text" && (
              <p>
                Options:
                {field.options.map((option, i) => (
                  <span key={i}>{`${option}, `}</span>
                ))}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
