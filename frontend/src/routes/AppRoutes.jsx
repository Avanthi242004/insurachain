import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import UserDashboard from "../pages/UserDashboard";
import Policies from "../pages/Policies";
import Claim from "../pages/Claim";
import TrackClaim from "../pages/TrackClaim";
import Payments from "../pages/Payments";
import Notifications from "../pages/Notifications";
import Profile from "../pages/Profile";
import BlockchainLog from "../pages/BlockchainLog";
import ForgotPassword from "../pages/ForgotPassword";

import ProtectedRoute from "../components/common/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }
      />

      <Route path="/policies" element={<ProtectedRoute><Policies /></ProtectedRoute>} />
      <Route path="/claims" element={<ProtectedRoute><Claim /></ProtectedRoute>} />
      <Route path="/track-claim" element={<ProtectedRoute><TrackClaim /></ProtectedRoute>} />
      <Route path="/payments" element={<ProtectedRoute><Payments /></ProtectedRoute>} />
      <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="/blockchain" element={<ProtectedRoute><BlockchainLog /></ProtectedRoute>} />

      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
}
