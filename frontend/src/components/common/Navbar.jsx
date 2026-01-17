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
          <li>Home</li>
          <li>Services</li>
          <li>Policies</li>
          <li>Claims</li>
          <li>About</li>
        </ul>

        {/* CTA */}
        <button className="navbar-cta">Contact Us</button>
      </nav>
    </header>
  );
}
