import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./pages/layouts/AppLayout";
import Login from "./pages/auth/Login";
import Profile from "./pages/auth/Profile";
import AccountSettings from "./pages/auth/AccountSettings";
import Employee from "./pages/Employee/Index";
import Designations from "./pages/Designations/Index";
import Role from "./pages/Role";


import Companies from "./pages/companies/Index";
import ShowCompany from "./pages/companies/Show";
import ShowDesignation from "./pages/Designations/Show";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/panel/*" element={<AppLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="employees" element={<Employee />} />
            {/* Designation start */}
            <Route path="designations" element={<Designations />} />
            <Route path="designations/:id" element={<ShowDesignation />} />
             {/* Designation end */}

             {/* Employee Start */}
             <Route path="employees" element={<Employee />} />
             {/* Employee End */}
            <Route path="roles" element={<Role />} />

            <Route path="companies" element={<Companies />} />
            <Route path="companies/:id" element={<ShowCompany />} />

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
