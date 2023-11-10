import React from "react";
import style from "./css/topBar.module.css";
import { topBarPageLink } from "../../../JsonData/PageLinks";
import Link from "next/link";
import { topBarIcon } from "../../../JsonData/IconData";

export default function TopBar() {
  return (
    <>
      <div className={style.topBar_mainContainer}>
        {/* Left side part start */}
        <div className={style.topBar_leftSide}>
          <div className={style.topBar_toolNumber}>Call Us: (800) 060-0730</div>
          {topBarPageLink.map((el, i) => {
            return (
              <div className={style.topBar_pageLinks} key={i}>
                <Link href={el.hrfURL} className={style.topBar_linkStyle}>
                  {" "}
                  {el.Page}
                </Link>
              </div>
            );
          })}
        </div>
        {/* ***Left side part End*** */}
        {/* Right side part start */}
        <div className={style.topBar_RightSide}>
          {topBarIcon.map((el, i) => {
            return (
              <div className={style.toBar_iconBox} key={i}>
                <Link href={el.link} className={style.topBar_iconLinkStyle}>
                  {React.createElement(el.iconComponent)}
                </Link>
              </div>
            );
          })}
        </div>
        {/* ***Right side part End*** */}
      </div>
    </>
  );
}
