import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import DashboardLayout from "../components/layout/DashboardLayout";


import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Website */}
        <Route element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Admin */}
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<div>Admin Dashboard ✅</div>} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
