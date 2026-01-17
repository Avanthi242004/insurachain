import MainLayout from "../layouts/MainLayout";

export default function Policies() {
  return (
    <MainLayout>
      <h2 className="text-xl font-bold mb-6">Available Insurance Policies</h2>

      <div className="grid grid-cols-3 gap-6">
        {["Health Basic", "Health Premium", "Family Care"].map((p, i) => (
          <div key={i} className="bg-white p-5 rounded shadow">
            <h3 className="font-bold text-lg">{p}</h3>
            <p className="text-sm text-gray-600 mt-2">
              Coverage up to ₹5,00,000
            </p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Buy Policy
            </button>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
