import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import NotFound from "pages/NotFound";
import Dashboard from "pages/Dashboard";
import AppLayout from "pages/layouts/AppLayout";
import Login from "pages/auth/Login";
import Profile from "pages/auth/Profile";
import AccountSettings from "pages/auth/AccountSettings";
import Employee from "pages/Employee/Index";
import Designations from "pages/Designations/Index";
import Role from "pages/Role";
import Companies from "pages/companies/Index";
import ShowCompany from "pages/companies/Show";
import ShowDesignation from "pages/Designations/Show";
import ShowEmployee from "pages/Employee/Show";
import ShowUser from "pages/companies/users/Show";
import Contracts from "pages/contracts/Index";
import Machines from "pages/machines/Index";
import ShowContract from "pages/contracts/Show";
import WareHouse from "pages/warehouses/Index";
import ShowMachine from "pages/machines/Show";
import ShowMachineModel from "pages/machines/models/Show";
import Parts from "pages/parts/Index";

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
            {/* <Route path="employees" element={<Employee />} /> */}
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
            <Route
              path="employees"
              element={
                <PrivateRoute>
                  <Employee />
                </PrivateRoute>
              }
            />
            <Route
              path="employees/:id"
              element={
                <PrivateRoute>
                  <ShowEmployee />
                </PrivateRoute>
              }
            />
            {/* Employee End */}
            <Route
              path="roles"
              element={
                <PrivateRoute>
                  <Role />
                </PrivateRoute>
              }
            />

            <Route
              path="companies"
              element={
                <PrivateRoute>
                  <Companies />
                </PrivateRoute>
              }
            />
            <Route
              path="companies/:id"
              element={
                <PrivateRoute>
                  <ShowCompany />
                </PrivateRoute>
              }
            />
            <Route
              path="companies/:companyId/users/:id"
              element={
                <PrivateRoute>
                  <ShowUser />
                </PrivateRoute>
              }
            />

            <Route
              path="contracts"
              element={
                <PrivateRoute>
                  <Contracts />
                </PrivateRoute>
              }
            />
            <Route
              path="contracts/:id"
              element={
                <PrivateRoute>
                  <ShowContract />
                </PrivateRoute>
              }
            />

            {/* WareHouse Start */}
            <Route
              path="warehouses"
              element={
                <PrivateRoute>
                  <WareHouse />
                </PrivateRoute>
              }
            />
            {/* WareHouse End */}

            {/* Machine Start */}
            <Route
              path="machines"
              element={
                <PrivateRoute>
                  <Machines />
                </PrivateRoute>
              }
            />
            <Route
              path="machines/:id"
              element={
                <PrivateRoute>
                  <ShowMachine />
                </PrivateRoute>
              }
            />
            <Route
              path="machines/:machineId/models/:modelId"
              element={
                <PrivateRoute>
                  <ShowMachineModel />
                </PrivateRoute>
              }
            />
            {/* Machine End */}

            {/* Parts start */}
            <Route
              path="parts"
              element={
                <PrivateRoute>
                  <Parts />
                </PrivateRoute>
              }
            />
            <Route
              path="parts/:id"
              element={
                <PrivateRoute>
                  <ShowContract />
                </PrivateRoute>
              }
            />
            {/* Parts end */}

            <Route
              path="profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="profile/settings"
              element={
                <PrivateRoute>
                  <AccountSettings />
                </PrivateRoute>
              }
            />
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
