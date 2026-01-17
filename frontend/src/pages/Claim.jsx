import MainLayout from "../components/layout/MainLayout";

export default function Claim() {
  return (
    <MainLayout>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        File a New Claim
      </h2>

      <div className="bg-white p-6 rounded-xl shadow w-full max-w-lg space-y-4">

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Policy Number
          </label>
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Policy Number"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Claim Reason
          </label>
          <textarea
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the issue"
            rows="3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Claim Amount
          </label>
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Amount"
          />
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Submit Claim
        </button>

        <p className="text-xs text-gray-500 text-center">
          Claim will be verified and recorded using blockchain validation.
        </p>

      </div>
    </MainLayout>
  );
}
