import Breadcrumbs from "../components/sections/Breadcrumbs";
import Footer from "../components/sections/Footer";
import SideMenu from "../components/sections/SideMenu";
import { Outlet } from "react-router-dom";
import NavBar from "../components/sections/NavBar";

export default function AppLayout() {
  //Replace the classes of body for the panel
  let body = document.getElementsByTagName("body");
  body[0].setAttribute(
    "class",
    "header-fixed header-tablet-and-mobile-fixed aside-enabled aside-fixed"
  );

  return (
    <div className="page d-flex flex-row flex-column-fluid">
      <SideMenu />
      <div
        className="wrapper d-flex flex-column flex-row-fluid"
        id="kt_wrapper"
      >
        <NavBar />

        <Outlet />
      <Footer />
      </div>
    </div>
  );
}
