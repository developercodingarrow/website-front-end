import CommonLayout from "../Components/Layouts/CommonLayouts/CommonLayout";
import HomePageCarosoleElement from "../Utils/ComponentsParts/HomePageCarosole/HomePageCarosoleElement";
import PopulaerCategoriesSection from "../Utils/HomePageSections/Popular-Categorie-section/PopulaerCategoriesSection";
import styles from "../styles/PagesStyles/homePage.module.css";

export default function Page() {
  return (
    <>
      <CommonLayout>
        <div className={styles.page_MainContainer}>
          <div className={styles.carosole_section}>
            <HomePageCarosoleElement />
          </div>
          <div className={styles.Popular_categoriesSection}>
            <PopulaerCategoriesSection />
          </div>
        </div>
      </CommonLayout>
    </>
  );
}
