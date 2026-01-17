export default function Features() {
  return (
    <section className="features-section">
      <div className="features-container">

        {/* Header */}
        <div className="features-top">
          <div>
            <span className="features-label">— Features</span>
            <h2 className="features-heading">
              Features <span>| We Provide</span>
            </h2>
          </div>

          <button className="features-btn">
            View All Features <span>+</span>
          </button>
        </div>

        {/* Cards */}
        <div className="features-cards">

          <div className="feature-card">
            <div className="feature-icon">
              <img
                src="https://via.placeholder.com/48?text=🔗"
                alt="Blockchain"
              />
            </div>
            <h3>Blockchain Security</h3>
            <p>
              All insurance policies are stored on blockchain ensuring
              immutability and fraud prevention.
            </p>
            <a href="#">Learn more →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <img
                src="https://via.placeholder.com/48?text=⚡"
                alt="Fast Claims"
              />
            </div>
            <h3>Instant Claim Processing</h3>
            <p>
              Smart contracts automate claim verification for faster and
              transparent settlements.
            </p>
            <a href="#">Learn more →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <img
                src="https://via.placeholder.com/48?text=📊"
                alt="Tracking"
              />
            </div>
            <h3>Real-Time Tracking</h3>
            <p>
              Track policies and claims live with complete visibility and
              audit-ready records.
            </p>
            <a href="#">Learn more →</a>
          </div>

        </div>
      </div>
    </section>
  );
}
