import React, { useState } from "react";
import style from "./navbar.module.css";
import { navBarPageLink } from "../../../JsonData/PageLinks";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/website-images/Simple-Logo.png";
import SearchComponents from "../../../Utils/ComponentsParts/Search/SearchComponents";
import {
  FaBars,
  HiMagnifyingGlass,
  PiUserCirclePlusThin,
  PiUserCircleMinusThin,
} from "../../../Utils/ApplicationIcon";
import Buttons from "../../../Utils/CustomeElements/Html Element/Buttons";

export default function Navbar() {
  const [openMobileSearch, setopenMobileSearch] = useState(true);
  const [isLogin, setisLogin] = useState(false);

  const handelTrigerMobileSearch = () => {
    setopenMobileSearch(!openMobileSearch);
  };

  const handelLoginRedirect = () => {
    setisLogin(!isLogin);
  };

  return (
    <div className={style.Navbar_mainContainer}>
      <div className={style.hangburgBox}>
        <FaBars />
      </div>
      <div className={style.Navbar_logoBox}>
        <Image
          src={logo}
          width={500}
          height={500}
          className={style.logo_imageStyle}
        />
      </div>
      <div className={style.searchBox}>
        <SearchComponents />
      </div>

      <div className={style.Navbar_userInfoBox}>
        {isLogin ? (
          <>
            <div className={style.logedInBox} onClick={handelLoginRedirect}>
              <div className={style.iconBox}>
                <PiUserCirclePlusThin />
              </div>
              <div className={style.loginInfo}>
                <span>info@gmail.com</span>
                <p>My Account</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <Buttons
              text={"Login"}
              btnSize={"smallbtn"}
              btnAction={handelLoginRedirect}
            />
          </>
        )}
      </div>

      {/* Mobile View Part */}
      <div className={style.mobile_searchIcon}>
        {" "}
        <HiMagnifyingGlass onClick={handelTrigerMobileSearch} />
      </div>
      <div
        className={`${style.mobile_searchBox} ${
          openMobileSearch ? style.mobile_searchBox : style.closeMobileSearch
        }`}
      >
        <SearchComponents handelTrigerMobileSearch={handelTrigerMobileSearch} />
      </div>
      {/* Mobile View IsLogin */}
      <div className={style.isLogin_mobileView}>
        {isLogin ? (
          <PiUserCirclePlusThin onClick={handelLoginRedirect} />
        ) : (
          <PiUserCircleMinusThin onClick={handelLoginRedirect} />
        )}
      </div>
    </div>
  );
}
