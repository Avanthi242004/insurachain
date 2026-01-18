export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "₹0",
      duration: "Forever",
      features: [
        "View Policies",
        "Basic Claim Tracking",
        "Blockchain Record View",
      ],
    },
    {
      name: "Standard",
      price: "₹999",
      duration: "/ year",
      featured: true,
      features: [
        "Full Claim Management",
        "Real-Time Claim Tracking",
        "Smart Contract Verification",
        "Email Notifications",
      ],
    },
    {
      name: "Premium",
      price: "₹2,499",
      duration: "/ year",
      features: [
        "Priority Claim Processing",
        "Advanced Fraud Detection",
        "24/7 Support",
        "Complete Blockchain Audit",
      ],
    },
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-container">

        <span className="pricing-label">— Pricing</span>
        <h2 className="pricing-title">
          Choose the Right <span>Plan</span>
        </h2>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`pricing-card ${
                plan.featured ? "featured" : ""
              }`}
            >
              {plan.featured && (
                <span className="pricing-badge">Most Popular</span>
              )}

              <h3 className="pricing-name">{plan.name}</h3>

              <p className="pricing-price">
                {plan.price}
                <span>{plan.duration}</span>
              </p>

              <ul className="pricing-features">
                {plan.features.map((f, idx) => (
                  <li key={idx}>✓ {f}</li>
                ))}
              </ul>

              <button className="pricing-btn">
                Choose Plan
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
