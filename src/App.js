import Breadcrumbs from "./components/sections/Breadcrumbs";
import SideMenu from "./components/sections/SideMenu";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Footer from "./components/sections/Footer";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/panel/*" element={<AppLayout/>}>
          <Route path="dashboard" element={< Dashboard/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
