import Breadcrumbs from "./components/sections/Breadcrumbs";
import SideMenu from "./components/sections/SideMenu";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Footer from "./components/sections/Footer";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <div
        className="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed toolbar-tablet-and-mobile-fixed aside-enabled aside-fixed"
        style={{
          "--kt-toolbar-height": "55px",
          "--kt-toolbar-height-tablet-and-mobile": "55px",
        }}
      >
        <Breadcrumbs />
        <SideMenu />
        <Routes>
          <Route path="/dashboard" element={< Dashboard/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
