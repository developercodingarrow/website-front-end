import React from "react";
import TopBar from "../../CommonComponent/TopBar/TopBar";
import Navbar from "../../CommonComponent/Navbar/Navbar";
import AppDrawer from "../../../Utils/AppDrawer/AppDrawer";

export default function CommonLayout({ children }) {
  return (
    <>
      <div>
        <AppDrawer />
        <div>
          <TopBar />
          <Navbar />
        </div>
        <div>{children}</div>
        <div>Footer</div>
      </div>
    </>
  );
}
