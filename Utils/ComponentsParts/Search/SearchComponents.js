import React, { useState } from "react";
import styles from "./css/searchComponents.module.css";
import {
  MdProductionQuantityLimits,
  TiArrowUnsorted,
  HiMagnifyingGlass,
  HiOutlineBuildingOffice,
  BiCategoryAlt,
  AiOutlineClose,
} from "../../../Utils/ApplicationIcon";

export default function SearchComponents(props) {
  const { handelTrigerMobileSearch } = props;
  const [searchType, setSearchType] = useState("product");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchTypeChange = (type) => {
    setSearchType(type);
    setShowDropdown(false);
  };

  const handleSearch = () => {
    if (searchType === "product") {
      // Perform search product function
      alert("product");
    } else if (searchType === "categories") {
      // Perform search categories function
      alert("categories");
    } else if (searchType === "companies") {
      // Perform search companies function
      alert("companyies");
    }
  };

  const handleIconClick = () => {
    handleSearch();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      <div className={styles.serachBar_mainContainer}>
        <div
          className={styles.search_forBox}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span className={styles.searchFor_typeIcon}>
            {searchType === "product" ? (
              <MdProductionQuantityLimits />
            ) : searchType === "categories" ? (
              <BiCategoryAlt />
            ) : (
              <HiOutlineBuildingOffice />
            )}
          </span>
          <span className={styles.searchFor_typeText}>{searchType}</span>
          <span className={styles.searcFor_arrow}>
            <TiArrowUnsorted />
          </span>
          {showDropdown && (
            <div
              className={`${styles.SearchType_deopDownBox} ${
                showDropdown
                  ? styles.SearchType_deopDownBox
                  : styles.HideDropdown
              }`}
            >
              <div
                onClick={() => handleSearchTypeChange("product")}
                className={styles.list_box}
              >
                <span className={styles.dropDown_iconBox}>
                  {" "}
                  <MdProductionQuantityLimits />{" "}
                </span>
                <span className={styles.dropDown_text}> Product </span>
              </div>

              <div
                onClick={() => handleSearchTypeChange("categories")}
                className={styles.list_box}
              >
                <span className={styles.dropDown_iconBox}>
                  {" "}
                  <BiCategoryAlt />{" "}
                </span>
                <span className={styles.dropDown_text}> Categories </span>
              </div>

              <div
                onClick={() => handleSearchTypeChange("companies")}
                className={styles.list_box}
              >
                <span className={styles.dropDown_iconBox}>
                  {" "}
                  <HiOutlineBuildingOffice />{" "}
                </span>
                <span className={styles.dropDown_text}> Companies </span>
              </div>
            </div>
          )}
        </div>
        <div className={styles.search_Input_wrapper}>
          <div className={styles.search_inputBox}>
            <input
              type="text"
              placeholder={`Search ${searchType}`}
              className={styles.search_input}
              onKeyPress={handleKeyPress}
            />{" "}
            <div className={styles.search_iconBox}>
              <HiMagnifyingGlass onClick={handleIconClick} />
            </div>
          </div>
          <div className={styles.MobileSearch_closeIcon}>
            {" "}
            <AiOutlineClose onClick={handelTrigerMobileSearch} />
          </div>
        </div>
      </div>
    </>
  );
}
