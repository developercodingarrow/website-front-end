import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getSingleFormFileds } from "../../Actions/formFiledAction";
import styles from "./css/productpageUi.module.css";
import ProductSidebar from "./ProductSidebar";
import ProductCards from "./ProductCards";
import ChipFilterBar from "./ChipFilterBar";

export default function ProductPageUi() {
  const router = useRouter();
  const { category } = router.query;
  const [fields, setfields] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handelgetSingleForm(category);
  }, [category]);

  const handelgetSingleForm = async (category) => {
    try {
      setIsLoading(true);
      const response = await getSingleFormFileds(category);
      setfields(response.data.result.formFields);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.sideBar_container}>
          <ProductSidebar fields={fields} />
        </div>
        <div className={styles.card_container}>
          <div className={styles.chip_wrapperContainer}>
            <ChipFilterBar fields={fields} />
          </div>
          <div>
            <ProductCards />
          </div>
        </div>
      </div>
    </>
  );
}
