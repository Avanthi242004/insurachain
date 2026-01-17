import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function DashboardLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg hidden md:flex flex-col">

        <div className="px-6 py-5 border-b">
          <h1 className="text-xl font-bold text-red-600">
            Insurance Admin
          </h1>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">

          {[
            { to: "/admin", label: "Dashboard" },
            { to: "/admin/policies", label: "Policies" },
            { to: "/admin/claims", label: "Claims" },
            { to: "/admin/users", label: "Users" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block px-4 py-2 rounded transition ${
                  isActive
                    ? "bg-red-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

        </nav>

        <div className="px-6 py-4 border-t">
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">

          <h2 className="text-xl font-semibold text-gray-800">
            Admin Dashboard
          </h2>

          <div className="flex items-center gap-4">
            <span className="text-gray-600">Admin</span>
            <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
              A
            </div>
          </div>

        </header>

        {/* Page content */}
        <main className="p-6 flex-1 overflow-y-auto">
          <Outlet />
        </main>

      </div>
    </div>
  );
}
