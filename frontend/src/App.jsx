import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Policies from "./pages/Policies";
import Claim from "./pages/Claim";
import TrackClaim from "./pages/TrackClaim";
import Admin from "./pages/Admin";
import ProtectedRoute from "./utils/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
        <Route path="/policies" element={<ProtectedRoute><Policies/></ProtectedRoute>} />
        <Route path="/claim" element={<ProtectedRoute><Claim/></ProtectedRoute>} />
        <Route path="/track" element={<ProtectedRoute><TrackClaim/></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute role="admin"><Admin/></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}
