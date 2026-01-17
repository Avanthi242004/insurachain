export default function Register() {
  return (
    <div className="h-screen flex justify-center items-center bg-slate-100">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4 text-center">
          Register Page
        </h2>

        <input className="w-full border p-2 mb-3" placeholder="Email" />
        <input className="w-full border p-2 mb-3" placeholder="Password" />

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Register
        </button>
      </div>
    </div>
  );
}
