export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <span className="hero-badge">Blockchain Powered Insurance</span>

          <h1 className="hero-title">
            Transparent & Secure <br />
            <span>Insurance</span> for Everyone
          </h1>

          <p className="hero-description">
            InsuraChain leverages blockchain technology to provide tamper-proof
            insurance policies, instant claim tracking, and complete transparency
            between insurers and policyholders.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Explore Policies</button>
            <button className="secondary-btn">Track Claim</button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="hero-right">
          {/* Dummy image (replace later) */}
          <img
            src="https://via.placeholder.com/360x360.png?text=Blockchain+Insurance"
            alt="Blockchain Insurance"
            className="hero-image"
          />

          <span className="hero-tag tag-top">Decentralized</span>
          <span className="hero-tag tag-bottom">Tamper-Proof</span>
        </div>

      </div>
    </section>
  );
}
