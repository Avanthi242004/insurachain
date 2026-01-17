import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-blue-800 text-white min-h-screen p-6 shadow-xl">
      <h1 className="text-2xl font-bold mb-10">InsuraChain</h1>

      <ul className="space-y-4 text-lg">
        <li><Link className="hover:text-blue-300" to="/dashboard">Dashboard</Link></li>
        <li><Link className="hover:text-blue-300" to="/policies">Policies</Link></li>
        <li><Link className="hover:text-blue-300" to="/claim">Submit Claim</Link></li>
        <li><Link className="hover:text-blue-300" to="/track">Track Claim</Link></li>
        <li><Link className="hover:text-blue-300" to="/admin">Admin</Link></li>
      </ul>
    </div>
  );
}
