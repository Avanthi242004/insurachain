import MainLayout from "../components/layout/MainLayout";

export default function TrackClaim() {
  return (
    <MainLayout>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Track Claim Status
      </h2>

      <div className="bg-white p-6 rounded-xl shadow w-full max-w-lg">

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Claim ID
        </label>

        <input
          className="border border-gray-300 p-3 w-full rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Claim ID"
        />

        <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Track Claim
        </button>

        {/* Result */}
        <div className="mt-6 border-t pt-4">
          <p className="text-gray-700">
            Status:
            <span className="ml-2 text-yellow-600 font-bold">
              Pending Verification
            </span>
          </p>

          <p className="text-sm text-gray-500 mt-2">
            This claim is currently being verified using blockchain records.
          </p>
        </div>

      </div>
    </MainLayout>
  );
}
