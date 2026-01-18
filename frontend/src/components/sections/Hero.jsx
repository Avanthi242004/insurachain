import { Link } from "react-router-dom";

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
            {/* Explore Policies — navigates */}
            <Link to="/policies" className="primary-btn">
              Explore Policies
            </Link>

            {/* Track Claim — navigates */}
            <Link to="/claim/track" className="secondary-btn">
              Track Claim
            </Link>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="hero-right">
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
