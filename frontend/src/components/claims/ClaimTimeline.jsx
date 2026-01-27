

export default function ClaimTimeline() {
  const steps = [
    {
      title: "Claim Submitted",
      status: "completed",
      time: "14 Jan 2026 · 10:12 AM",
      description:
        "Your claim has been successfully submitted and recorded.",
      hash: "0xA4F9C2...91B",
    },
    {
      title: "Initial Verification",
      status: "completed",
      time: "14 Jan 2026 · 10:18 AM",
      description:
        "Basic claim details were verified automatically.",
      hash: "0xB9E2F1...4D3",
    },
    {
      title: "Blockchain Validation",
      status: "active",
      time: "14 Jan 2026 · 10:32 AM",
      description:
        "Your claim is being securely validated on blockchain. This record is immutable.",
      hash: "0xC12E7A...88F",
    },
    {
      title: "Smart Contract Review",
      status: "pending",
      time: "Pending",
      description:
        "Smart contract will validate coverage and eligibility.",
      hash: null,
    },
    {
      title: "Claim Approved",
      status: "pending",
      time: "Pending",
      description:
        "Approval will be issued once verification completes.",
      hash: null,
    },
    {
      title: "Payment Released",
      status: "pending",
      time: "Pending",
      description:
        "Funds will be released directly to your registered account.",
      hash: null,
    },
  ];

  return (
    <div className="timeline-wrapper">
      <h2 className="timeline-title">Claim Progress</h2>

      <div className="timeline">
        {steps.map((step, index) => (
          <div key={index} className={`timeline-item ${step.status}`}>
            
            {/* Dot + Line */}
            <div className="timeline-marker">
              <span className="timeline-dot" />
              {index !== steps.length - 1 && (
                <span className="timeline-line" />
              )}
            </div>

            {/* Content */}
            <div className="timeline-content">
              <h3>{step.title}</h3>
              <span className="timeline-time">{step.time}</span>

              <p>{step.description}</p>

              {step.hash && (
                <div className="timeline-hash">
                  🔗 Blockchain Hash:
                  <span>{step.hash}</span>
                </div>
              )}

              {step.status === "active" && (
                <span className="timeline-badge">
                  Verifying on Blockchain
                </span>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}