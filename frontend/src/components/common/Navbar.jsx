import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">

        {/* Logo / Brand */}
        <div className="navbar-left">
          <div className="logo-circle">I</div>
          <span className="navbar-brand">InsuraChain</span>
        </div>

        {/* Links */}
        <ul className="navbar-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/services" className="nav-link">Services</Link></li>
          <li><Link to="/policies" className="nav-link">Policies</Link></li>
          <li><Link to="/claim/new" className="nav-link">Claims</Link></li>

          <li><Link to="/about" className="nav-link">About</Link></li>
        </ul>

        {/* CTA */}
        <Link to="/contact" className="navbar-cta">
          Contact Us
        </Link>

      </nav>
    </header>
  );
}
