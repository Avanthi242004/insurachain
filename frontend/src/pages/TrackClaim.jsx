import MainLayout from "../layouts/MainLayout";

export default function TrackClaim() {
  return (
    <MainLayout>
      <h2 className="text-xl font-bold mb-6">Track Claim Status</h2>

      <div className="bg-white p-6 rounded shadow w-full max-w-lg">
        <input
          className="border p-2 w-full mb-4"
          placeholder="Enter Claim ID"
        />

        <button className="bg-blue-600 text-white px-6 py-2 rounded">
          Track
        </button>

        <div className="mt-6">
          <p>Status: <span className="text-yellow-600 font-bold">Pending</span></p>
        </div>
      </div>
    </MainLayout>
  );
}
