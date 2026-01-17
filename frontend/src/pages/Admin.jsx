import MainLayout from "../layouts/MainLayout";

export default function Admin() {
  return (
    <MainLayout>
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-5 rounded shadow">
          <h3 className="font-bold">Total Claims</h3>
          <p className="text-2xl text-blue-600">12</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3 className="font-bold">Approved</h3>
          <p className="text-2xl text-green-600">7</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3 className="font-bold">Pending</h3>
          <p className="text-2xl text-yellow-600">5</p>
        </div>
      </div>

      {/* Claim Table */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="font-bold mb-4">Claim Requests</h3>

        <table className="w-full border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border p-2">Claim ID</th>
              <th className="border p-2">User</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-2">CLM001</td>
              <td className="border p-2">Gowrav</td>
              <td className="border p-2">₹25,000</td>
              <td className="border p-2 text-yellow-600 font-bold">
                Pending
              </td>
              <td className="border p-2">
                <button className="bg-green-600 text-white px-2 py-1 rounded mr-2">
                  Approve
                </button>
                <button className="bg-red-600 text-white px-2 py-1 rounded">
                  Reject
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}
