import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full pt-6 absolute z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* NAV CONTAINER - Match Dark Green from Image */}
        <div className="bg-[#1B3C2B] rounded-full px-8 py-3 flex items-center shadow-lg">
          
          {/* LOGO - Styled like the 'O' logo */}
          <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl">
            <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-[#1B3C2B]">
              I
            </div>
            <span>Insura<span className="text-gray-300">Chain</span></span>
          </Link>

          {/* MENU - High contrast white/yellow links */}
          <nav className="hidden md:flex mx-auto items-center gap-8 text-sm font-medium">
            <Link to="/" className="text-yellow-400 border-b-2 border-yellow-400 pb-1">Home</Link>
            <Link to="/policies" className="text-white hover:text-yellow-400 transition">Policies</Link>
            <Link to="/claims" className="text-white hover:text-yellow-400 transition">Claims</Link>
            <Link to="/services" className="text-white hover:text-yellow-400 transition">Services</Link>
            <Link to="/about" className="text-white hover:text-yellow-400 transition">About</Link>
          </nav>

          {/* CTA - White pill button */}
          <Link
            to="/contact"
            className="bg-white text-[#1B3C2B] text-sm font-bold px-7 py-2.5 rounded-full hover:bg-yellow-500 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}