import Footer from "../../components/sections/Footer";
import SideMenu from "../../components/sections/SideMenu";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/sections/NavBar";
import {  useSelector } from "react-redux";
import SideMenuCompany from "components/sections/SideMenuCompany";
export default function AppLayout() {
  const { user } = useSelector((state) => state.auth);

  //Replace the classes of body for the panel
  let body = document.getElementsByTagName("body");
  body[0].setAttribute(
    "class",
    "header-fixed header-tablet-and-mobile-fixed aside-enabled aside-fixed"
  );

  return (
    <div className="page d-flex flex-row flex-column-fluid">
      {user?.details!==null ? <SideMenuCompany/> : <SideMenu />}
      
      <div
        className="wrapper d-flex flex-column flex-row-fluid "
        id="wrapper"
      >
        <NavBar />
        <div className="post d-flex flex-column-fluid mt-5" id="kt_post">
        <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
