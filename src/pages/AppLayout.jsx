import Breadcrumbs from "../components/sections/Breadcrumbs";
import Footer from "../components/sections/Footer";
import SideMenu from "../components/sections/SideMenu";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
    return (
        <div className="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed toolbar-tablet-and-mobile-fixed aside-enabled aside-fixed" style={{
          "--kt-toolbar-height": "55px",
          "--kt-toolbar-height-tablet-and-mobile": "55px",
        }}>
            <Breadcrumbs />
            <SideMenu />
            <Outlet />
            <Footer />
        </div>
    )
}