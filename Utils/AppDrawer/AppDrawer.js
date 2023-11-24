import React, { useContext } from "react";
import styles from "./css/AppDrawer.module.css";
import { AppContext } from "../../Context Api/AppContextApi";
import Link from "next/link";
export default function AppDrawer() {
  const { drawerToggle, setdrawerToggle, handelAppDrawer, appDrawerRef } =
    useContext(AppContext);

  return (
    <>
      <div
        className={`${styles.AppDrawer_mainContainer} ${
          drawerToggle
            ? styles.AppDrawer_mainContainer
            : styles.AppDrawer_mainContainerClose
        }`}
        ref={appDrawerRef}
      >
        <div className={styles.AppDrawer_header}>
          <div className={styles.innerContainer}>
            <div className={styles.company_LogoBox}>u</div>
            <div className={styles.AppDrawer_headerContent}>
              <span>my company Name</span>
              <span>info@gmail.com</span>
            </div>
          </div>
        </div>
        <div className={styles.AppDrawer_body}>
          <div className={styles.AppDrawer_Menu}>
            {[1, 2, 34, 5, 6, 7].map(() => {
              return (
                <Link href={"/"} className={styles.AppDrawer_link}>
                  <div className={styles.AppDrawer_Tab}> Home </div>
                </Link>
              );
            })}
          </div>
          <div className={styles.AppDrawer_footer}>footer</div>
        </div>
      </div>
    </>
  );
}
