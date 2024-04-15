import * as React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import SideBar from "./SideBar";
import Search from "../components/Search";
// import MainFooter from "./MainFooter";

//
function MainLayout() {
  return (
    <>
      <div>
        <MainHeader />
        <Search />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <SideBar />
          <Outlet />
        </div>
        {/* <MainFooter /> */}
      </div>
    </>
  );
}

export default MainLayout;
