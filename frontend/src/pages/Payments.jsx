import MainLayout from "../components/layout/MainLayout";

export default function Payments() {
  return (
    <MainLayout>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Premium Payment
      </h2>

      <div className="bg-white p-6 rounded-xl shadow max-w-lg">

        <div className="mb-4">
          <p className="text-sm text-gray-500">Policy Name</p>
          <p className="font-semibold text-gray-800">Health Premium Plan</p>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-500">Coverage</p>
          <p className="font-semibold text-gray-800">₹10,00,000</p>
        </div>

        <div className="mb-6">
          <p className="text-sm text-gray-500">Amount to Pay</p>
          <p className="text-2xl font-bold text-blue-600">₹4,200</p>
        </div>

        <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Pay Securely
        </button>

        <p className="text-xs text-gray-500 mt-4 text-center">
          Payment is secured using blockchain transaction verification.
        </p>

      </div>
    </MainLayout>
  );
}
