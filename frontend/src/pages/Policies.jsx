export default function Policies() {
  const policies = [
    {
      name: "Health Basic",
      coverage: "₹5,00,000",
      premium: "₹3,200 / year",
    },
    {
      name: "Health Premium",
      coverage: "₹10,00,000",
      premium: "₹6,500 / year",
    },
    {
      name: "Family Care",
      coverage: "₹15,00,000",
      premium: "₹9,200 / year",
    },
  ];

  return (
    <div className="policies-page">

      <h2 className="policies-title">
        Available Insurance Policies
      </h2>

      <div className="policies-grid">
        {policies.map((p, i) => (
          <div key={i} className="policy-card">

            <h3 className="policy-name">{p.name}</h3>

            <p className="policy-text">
              Coverage: <span>{p.coverage}</span>
            </p>

            <p className="policy-text">
              Premium: <span>{p.premium}</span>
            </p>

            <p className="policy-note">
              Blockchain secured policy with tamper-proof records.
            </p>

            <button className="policy-btn">
              Buy Policy
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}
