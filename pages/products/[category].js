import React, { useContext } from "react";
import ProductPageUi from "../../Components/ProductPageComponent/ProductPageUi";
import { getProductByCategories } from "../../Actions/productAction";
import { projectContext } from "../../Context Api/ProjectContextApi";

export default function ProductPage({ initialProject }) {
  const { projectByCategories, setprojectByCategories } =
    useContext(projectContext);

  setprojectByCategories(initialProject);

  return (
    <>
      <ProductPageUi />
    </>
  );
}

// GET STATIC PROPS TO GET ALL PROJECTS
export async function getServerSideProps(context) {
  try {
    console.log(context.query);
    const { category } = context.params;
    const queryParams = {};

    // Iterate through the context.query object to handle dynamic query parameters
    for (const key in context.query) {
      // Exclude 'category' from being added to queryParams object
      if (key !== "category") {
        queryParams[key] = context.query[key];
      }
    }
    console.log(queryParams);
    const result = await getProductByCategories(category, queryParams);

    return {
      props: {
        initialProject: result.data.result,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        initialProject: {},
      },
    };
  }
}
