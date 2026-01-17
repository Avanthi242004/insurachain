import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <img src="/images/logo.png" alt="Logo" className="h-10" />

        <nav className="space-x-6 hidden md:block">
          <Link to="/" className="font-medium">Home</Link>
          <Link to="/policies">Policies</Link>
          <Link to="/claim">Claim</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link
          to="/login"
          className="bg-red-600 text-white px-5 py-2 rounded"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
