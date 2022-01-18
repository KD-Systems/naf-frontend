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
import ShowEmployee from "./pages/Employee/Show";
import ShowUser from "./pages/companies/sections/users/Show";
import Contracts from "./pages/contracts/Index";
import ShowContract from "./pages/contracts/Show";


import WareHouse from "./pages/warehouses/Index"

export const PrivateRoute = ({ children }) => {
  const auth = JSON.parse(localStorage.getItem("user"));
  return auth?.access_token ? children : <Navigate to="/" />;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/panel/*" element={<AppLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="employees" element={<Employee />} />
            {/* Designation start */}
            <Route
              path="designations"
              element={
                <PrivateRoute>
                  <Designations />
                </PrivateRoute>
              }
            />
            <Route
              path="designations/:id"
              element={
                <PrivateRoute>
                  <ShowDesignation />
                </PrivateRoute>
              }
            />
            {/* Designation end */}

            {/* Employee Start */}
            <Route path="employees" element={<Employee />} />
            <Route path="employees/:id" element={<ShowEmployee />} />
            {/* Employee End */}
            <Route path="roles" element={<Role />} />

            <Route path="companies" element={<Companies />} />
            <Route path="companies/:id" element={<ShowCompany />} />
            <Route path="companies/:companyId/users/:id" element={<ShowUser />} />

            <Route path="contracts" element={<Contracts />} />
            <Route path="contracts/:id" element={<ShowContract />} />

            {/* WareHouse Start */}
            <Route path="warehouses" element={<WareHouse />} />
            {/* WareHouse End */}

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
