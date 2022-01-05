import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./pages/layouts/AppLayout";
import Login from "./pages/auth/Login";
import Profile from "./pages/auth/Profile";
import AccountSettings from "./pages/auth/AccountSettings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<AppLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile/settings" element={<AccountSettings />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Route>

          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />

          <Route path="/404" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
