import React from "react";
import styles from "./css/asideoptioons.module.css";
import { AiOutlineDashboard } from "../../../Utils/ApplicationIcon";
import { asidebarOptions, asidefooterLink } from "../../../JsonData/PageLinks";
import Link from "next/link";

export default function AsideOptions() {
  return (
    <div className={styles.AsideOptions_mainContainer}>
      <div className={styles.options_tabContainer}>
        {asidebarOptions.map((el, i) => {
          return (
            <Link href={el.link} className={styles.options_Tab}>
              <div className={styles.option_Tab_iconBox}>
                {" "}
                {React.createElement(el.iconComponent)}
              </div>
              <div className={styles.option_Tab_Text}>{el.name}</div>
            </Link>
          );
        })}
      </div>

      <div className={styles.aside_footerLinkBox}>
        {asidefooterLink.map((el, i) => {
          return (
            <Link href={"/"} className={styles.options_Tab}>
              <div className={styles.footeroption_Tab_Text}>{el.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
