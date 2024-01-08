import React, { useEffect, useState } from "react";
import { craeteNewForm, getFormFileds } from "../../../Actions/formFiledAction";
import Link from "next/link";

export default function FormFieldComponent() {
  const [name, setName] = useState("");
  const [formfieldList, setformfieldList] = useState([]);
  const [laoding, setlaoding] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setlaoding(true);
      const data = { name: name };
      const response = await craeteNewForm(data);
      setlaoding(false);
    } catch (error) {
      console.log(error);
      setlaoding(false);
    }
  };

  useEffect(() => {
    handelgetdata();
  }, [laoding]);

  const handelgetdata = async () => {
    try {
      const response = await getFormFileds();
      setformfieldList(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <h2>Create Input Form Field </h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => handleChange(e)} />
          <button type="submit">Start Form Filed</button>
        </form>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {formfieldList.map((el, i) => {
          return (
            <Link href={`/super-admin/form-fileds/${el.slug}`}>{el.name}</Link>
          );
        })}
      </div>
    </div>
  );
}
