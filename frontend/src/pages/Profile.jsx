import MainLayout from "../components/layout/MainLayout";

export default function Profile() {
  return (
    <MainLayout>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        User Profile
      </h2>

      <div className="bg-white p-6 rounded-xl shadow max-w-lg">

        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">
            Full Name
          </label>
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value="User"
            readOnly
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">
            Email Address
          </label>
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value="user@email.com"
            readOnly
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-1">
            Account Type
          </label>
          <input
            className="w-full border border-gray-300 p-3 rounded-lg bg-gray-100"
            value="Blockchain Verified User"
            readOnly
          />
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Edit Profile
        </button>

        <p className="text-xs text-gray-500 mt-4 text-center">
          Your profile data is secured using blockchain-based verification.
        </p>

      </div>
    </MainLayout>
  );
}
