import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./pages/layouts/AppLayout";
import Login from "./pages/auth/Login";
import Profile from "./pages/auth/Profile";
import AccountSettings from "./pages/auth/AccountSettings";
import Employee from "./pages/Employee";
import Department from "./pages/Department";
import Role from "./pages/Role";
// import "./assets/plugins/global/plugins.bundle"
// import "./assets/js/scripts.bundle"
// import "./assets/plugins/custom/fullcalendar/fullcalendar.bundle"
// import "./assets/plugins/custom/datatables/datatables.bundle"
// import "./assets/js/custom/apps/ecommerce/catalog/products"
// import "./assets/js/custom/widgets"
// import "./assets/js/custom/apps/chat/chat"
// import "./assets/js/custom/modals/create-app"
// import "./assets/js/custom/modals/upgrade-plan"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<AppLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="employees" element={<Employee />} />
            <Route path="departments" element={<Department />} />
            <Route path="roles" element={<Role />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile/settings" element={<AccountSettings />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
