import MainLayout from "../layouts/MainLayout";

export default function Dashboard() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4 text-slate-900">
        Welcome to Insurance Portal
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded shadow">
          <h3 className="font-bold text-lg">Total Policies</h3>
          <p className="text-2xl mt-2 text-blue-600">3</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3 className="font-bold text-lg">Claims Submitted</h3>
          <p className="text-2xl mt-2 text-yellow-600">1</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3 className="font-bold text-lg">Approved Claims</h3>
          <p className="text-2xl mt-2 text-green-600">1</p>
        </div>
      </div>
    </MainLayout>
  );
}
