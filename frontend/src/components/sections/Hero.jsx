export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-left">
          <span className="hero-badge">Hello There!</span>

          <h1 className="hero-title">
            Smart & Secure <br />
            <span>Insurance</span> Solutions
          </h1>

          <p className="hero-description">
            InsuraChain provides transparent, blockchain-powered insurance
            policies with fast claim processing and real-time tracking.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">View Policies</button>
            <button className="secondary-btn">Track Claim</button>
          </div>
        </div>

        {/* RIGHT (DESIGN SHAPE ONLY) */}
        <div className="hero-right">
          <div className="hero-circle"></div>

          <span className="hero-tag tag-top">Trusted Platform</span>
          <span className="hero-tag tag-bottom">Secure & Transparent</span>
        </div>

      </div>
    </section>
  );
}
