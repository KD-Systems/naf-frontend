import Breadcrumbs from "./components/sections/Breadcrumbs";
import SideMenu from "./components/sections/SideMenu";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Footer from "./components/sections/Footer";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/auth/Login";
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
function App() {

  const AuthLayoutRoute = ({ childrens }) => {
    return (
      {
        childrens: <Navigate to="/login"/>
      }
    );
  };
  return (
      <div >
    <BrowserRouter>
     
        <Routes>
          
          
          {/* <Route path="/" element={<AuthLayoutRoute><AuthLayout/></AuthLayoutRoute>} /> */}
          
          <Route path="/login" element={< Login/>} />
          <Route path="/dashboard" element={< Dashboard/>} />
          <Route path="*" element={<NotFound />} />
         
        </Routes>
       
    </BrowserRouter>
      </div>
  );
}

export default App;
