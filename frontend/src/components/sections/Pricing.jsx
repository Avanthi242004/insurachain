export default function Pricing() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <span className="text-primary uppercase font-semibold">
          Pricing Plan
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Popular Pricing Plan
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {["Free", "Standard", "Premium"].map((plan, i) => (
            <div
              key={plan}
              className={`p-10 rounded-2xl border ${
                i === 1
                  ? "bg-gray-900 text-white scale-105"
                  : "bg-white"
              }`}
            >
              <h3 className="text-xl font-semibold">{plan}</h3>
              <p className="text-4xl font-bold mt-6">$99</p>

              <button className="mt-8 bg-primary text-white px-6 py-3 rounded-md">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
