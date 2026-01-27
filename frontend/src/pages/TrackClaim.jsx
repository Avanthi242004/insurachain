import ClaimTimeline from "../components/claims/ClaimTimeline";

export default function TrackClaim() {
  return (
    <div className="track-claim-page">
      <h2 className="track-claim-title">Track Claim Status</h2>
      <ClaimTimeline />
    </div>
  );
}