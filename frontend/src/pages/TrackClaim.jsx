export default function TrackClaim() {
  return (
    <div className="claim-page">

      <h2 className="claim-title">Track Claim Status</h2>

      <div className="claim-card">

        <div className="claim-field">
          <label>Claim ID</label>
          <input
            type="text"
            placeholder="Enter Claim ID"
          />
        </div>

        <button className="claim-btn">
          Track Claim
        </button>

        {/* Result */}
        <div className="claim-result">
          <p>
            Status:
            <span className="claim-status pending">
              Pending Verification
            </span>
          </p>

          <p className="claim-note">
            This claim is currently being verified using blockchain records.
          </p>
        </div>

      </div>

    </div>
  );
}
