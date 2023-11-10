import React from "react";
import TopBar from "../../CommonComponent/TopBar/TopBar";
import Navbar from "../../CommonComponent/Navbar/Navbar";

export default function CommonLayout({ children }) {
  return (
    <>
      <div>
        <TopBar />
        <Navbar />
      </div>
      <div>{children}</div>
      <div>Footer</div>
    </>
  );
}
