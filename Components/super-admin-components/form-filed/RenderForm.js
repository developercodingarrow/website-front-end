import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  addformFiled,
  getSingleFormFileds,
} from "../../../Actions/formFiledAction";
import TestFormCard from "../../../Utils/Cards/formCards/TestFormCard";
import {
  userDetails,
  CreditaionDetails,
  userDetailApi,
  CreditaionDetailsApi,
  BusinessDetails,
  BusinessDetailsApi,
} from "../../../JsonData/ProfileFileds";

export default function RenderForm() {
  const router = useRouter();
  const { slug } = router.query;
  const [fields, setfields] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handelgetSingleForm(slug);
  }, [slug]);

  const handelgetSingleForm = async (slug) => {
    try {
      setIsLoading(true);
      const response = await getSingleFormFileds(slug);
      setfields(response.data.result.formFields);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handelsubmitForm = (data) => {
    alert(JSON.stringify(data));
    console.log(data.image);
    console.log(data.textInput);
  };

  console.log(fields);
  return (
    <>
      <div>
        {isLoading ? (
          <p>...</p> // Render a loading message or spinner while fetching data
        ) : (
          <TestFormCard
            title="Render Input"
            customeInputs={fields}
            actionType="submit"
            handelfomSubmit={handelsubmitForm}
            apiData=""
          />
        )}
      </div>
    </>
  );
}
