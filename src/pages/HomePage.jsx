import React from "react";
import Breadcrumbs from "../components/sections/Breadcrumbs";
import NavBar from "../components/sections/NavBar";
import SideMenu from "../components/sections/SideMenu";

const HomePage = () => {
  return (
    <>
      <div
        className="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed toolbar-tablet-and-mobile-fixed aside-enabled aside-fixed"
        style={{
          "--kt-toolbar-height": "55px",
          "--kt-toolbar-height-tablet-and-mobile": "55px",
        }}
      >
       
            <SideMenu />       
            <Breadcrumbs />
          </div>
    </>
  );
};

export default HomePage;
