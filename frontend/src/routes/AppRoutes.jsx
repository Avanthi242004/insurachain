import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";

import UserDashboard from "../pages/UserDashboard";
import Policies from "../pages/Policies";
import Services from "../pages/Services";
import Claim from "../pages/Claim";
import TrackClaim from "../pages/TrackClaim";
import Payments from "../pages/Payments";
import Notifications from "../pages/Notifications";
import Profile from "../pages/Profile";
import BlockchainLog from "../pages/BlockchainLog";
import About from "../pages/About";

import MainLayout from "../components/layout/MainLayout";
import ProtectedRoute from "../components/common/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>

      {/* ---------- PUBLIC ROUTES ---------- */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* ---------- PROTECTED ROUTES ---------- */}
      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        {/* Default protected route */}
        <Route index element={<Navigate to="/dashboard" />} />

        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/policies" element={<Policies />} />

        {/* Claims */}
        <Route path="/claim/new" element={<Claim />} />
        <Route path="/claim/track" element={<TrackClaim />} />

        {/* Other */}
        <Route path="/payments" element={<Payments />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blockchain" element={<BlockchainLog />} />
        <Route path="/about" element={<About />} />
      </Route>

      {/* ---------- ALIASES ---------- */}
      <Route path="/claims" element={<Navigate to="/claim/new" />} />
      <Route path="/track-claim" element={<Navigate to="/claim/track" />} />

      {/* ---------- FALLBACK ---------- */}
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
}
