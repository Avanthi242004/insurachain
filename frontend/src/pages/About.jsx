

export default function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-label">— About Us</span>
          <h1>
            Redefining Insurance with <span>Blockchain Trust</span>
          </h1>
          <p>
            InsuraChain is a next-generation insurance platform built to bring
            transparency, security, and speed into every policy and claim.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Traditional insurance systems are often slow, opaque, and heavily
              dependent on manual verification. InsuraChain was created to change
              that.
            </p>
            <p>
              By leveraging blockchain technology and smart contracts, we ensure
              that every policy and claim is tamper-proof, verifiable, and fully
              transparent — empowering both insurers and policyholders.
            </p>
          </div>

          <div className="about-highlight">
            <h3>Why Blockchain?</h3>
            <p>
              Blockchain removes intermediaries, prevents fraud, and creates a
              single source of truth that cannot be altered.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION + VALUES */}
      <section className="about-values">
        <div className="about-container">

          <h2 className="center">Our Mission & Values</h2>

          <div className="values-grid">

            <div className="value-card">
              <h3>Transparency</h3>
              <p>
                Every policy, claim, and update is recorded on blockchain,
                ensuring full visibility and trust.
              </p>
            </div>

            <div className="value-card">
              <h3>Security</h3>
              <p>
                Immutable records and cryptographic validation protect data from
                tampering and fraud.
              </p>
            </div>

            <div className="value-card">
              <h3>Speed</h3>
              <p>
                Smart contracts automate claim verification, reducing delays and
                eliminating manual bottlenecks.
              </p>
            </div>

            <div className="value-card">
              <h3>User-First</h3>
              <p>
                Designed with simplicity in mind, InsuraChain puts control back
                in the hands of policyholders.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="about-stats">
        <div className="about-container stats-grid">

          <div>
            <h3>100%</h3>
            <p>Tamper-Proof Records</p>
          </div>

          <div>
            <h3>24/7</h3>
            <p>Real-Time Claim Tracking</p>
          </div>

          <div>
            <h3>0%</h3>
            <p>Data Manipulation</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Built for the Future of Insurance</h2>
        <p>
          InsuraChain isn’t just an insurance platform — it’s a trust layer
          designed for the digital age.
        </p>
        <a href="/policies" className="primary-btn">
          Explore Policies
        </a>
      </section>

    </div>
  );
}