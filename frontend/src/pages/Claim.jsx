import MainLayout from "../layouts/MainLayout";

export default function Claim() {
  return (
    <MainLayout>
      <h2 className="text-xl font-bold mb-6">Submit Claim</h2>

      <div className="bg-white p-6 rounded shadow w-full max-w-xl">
        <input className="border p-2 w-full mb-4" placeholder="Policy Number" />
        <input className="border p-2 w-full mb-4" placeholder="Hospital Name" />
        <input className="border p-2 w-full mb-4" placeholder="Claim Amount" />

        <textarea
          className="border p-2 w-full mb-4"
          placeholder="Description"
        ></textarea>

        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Submit Claim
        </button>
      </div>
    </MainLayout>
  );
}
