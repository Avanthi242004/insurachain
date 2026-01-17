export default function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Popular Pricing Plan</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {["Free", "Standard", "Premium"].map(plan => (
            <div key={plan} className="border p-6 rounded">
              <h3 className="text-xl font-semibold">{plan}</h3>
              <p className="text-2xl font-bold mt-4">$99</p>
              <button className="mt-6 bg-red-600 text-white px-5 py-2 rounded">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
