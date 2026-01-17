import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
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
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive
                  ? "bg-red-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/policies"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive
                  ? "bg-red-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Policies
          </NavLink>

          <NavLink
            to="/admin/claims"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive
                  ? "bg-red-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Claims
          </NavLink>

          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive
                  ? "bg-red-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Users
          </NavLink>
        </nav>

        <div className="px-6 py-4 border-t">
          <button className="w-full bg-red-600 text-white py-2 rounded">
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        
        {/* Topbar */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Dashboard
          </h2>

          <div className="flex items-center gap-4">
            <span className="text-gray-600">Admin</span>
            <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center">
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
