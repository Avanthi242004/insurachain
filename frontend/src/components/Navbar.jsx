import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
      
      {/* Left Section */}
      <div>
        <h2 className="text-lg font-bold text-slate-900">
          Insurance Portal
        </h2>
        {user && (
          <p className="text-sm text-gray-500">
            Role: {user.role.toUpperCase()}
          </p>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {user && (
          <span className="text-slate-700 font-medium">
            {user.email}
          </span>
        )}

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition"
        >
          Logout
        </button>
      </div>

    </div>
  );
}
