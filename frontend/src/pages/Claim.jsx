export default function Claim() {
  return (
    <div className="claim-page">

      <h2 className="claim-title">File a New Claim</h2>

      <div className="claim-card">

        <div className="claim-field">
          <label>Policy Number</label>
          <input type="text" placeholder="Enter Policy Number" />
        </div>

        <div className="claim-field">
          <label>Claim Reason</label>
          <textarea placeholder="Describe the issue" rows="3" />
        </div>

        <div className="claim-field">
          <label>Claim Amount</label>
          <input type="number" placeholder="Enter Amount" />
        </div>

        <button className="claim-btn">Submit Claim</button>

        <p className="claim-note">
          Claim will be verified and recorded using blockchain validation.
        </p>

      </div>

    </div>
  );
}
