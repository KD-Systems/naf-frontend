import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import Employee from "./pages/Employee";
function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppLayout/>}>
          <Route path="dashboard" element={< Dashboard/>}/>
          <Route path="employees" element={<Employee />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>

        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/404" element={<NotFound />} />
        
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
