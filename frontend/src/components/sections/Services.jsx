export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">

        {/* LEFT SIDE */}
        <div className="services-left">
          <div className="services-image-wrapper">
            <img
              src="https://via.placeholder.com/320x320.png?text=Insurance+Expert"
              alt="Insurance Services"
              className="services-image"
            />

            {/* Floating Pills */}
            <span className="service-pill pill-1">Policy Management</span>
            <span className="service-pill pill-2">Claim Tracking</span>
            <span className="service-pill pill-3">Smart Contracts</span>
            <span className="service-pill pill-4">Fraud Detection</span>
            <span className="service-pill pill-5">Blockchain Ledger</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="services-right">
          <span className="services-label">— Services</span>

          <h2 className="services-title">
            What Does <span>InsuraChain</span> Offer?
          </h2>

          <p className="services-description">
            InsuraChain delivers secure, transparent, and automated insurance
            services powered by blockchain technology, ensuring trust between
            providers and policyholders.
          </p>

          {/* STATS */}
          <div className="services-stats">
            <div>
              <h3>100%</h3>
              <p>Transparent Records</p>
            </div>
            <div>
              <h3>24/7</h3>
              <p>Claim Tracking</p>
            </div>
            <div>
              <h3>0%</h3>
              <p>Data Tampering</p>
            </div>
          </div>

          {/* CTA */}
          <button className="services-btn">
            View Services <span>+</span>
          </button>
        </div>

      </div>
    </section>
  );
}
