import MainLayout from "../components/layout/MainLayout";

export default function Policies() {
  const policies = [
    {
      name: "Health Basic",
      coverage: "₹5,00,000",
      premium: "₹3,200 / year",
    },
    {
      name: "Health Premium",
      coverage: "₹10,00,000",
      premium: "₹6,500 / year",
    },
    {
      name: "Family Care",
      coverage: "₹15,00,000",
      premium: "₹9,200 / year",
    },
  ];

  return (
    <MainLayout>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Available Insurance Policies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {policies.map((p, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg text-blue-700">
              {p.name}
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Coverage: <span className="font-medium">{p.coverage}</span>
            </p>

            <p className="text-sm text-gray-600 mt-1">
              Premium: <span className="font-medium">{p.premium}</span>
            </p>

            <p className="text-xs text-gray-500 mt-3">
              Blockchain secured policy with tamper-proof records.
            </p>

            <button className="mt-5 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Buy Policy
            </button>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
