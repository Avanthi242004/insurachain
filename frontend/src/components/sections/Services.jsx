export default function Services() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary uppercase font-semibold">
            Our Services
          </span>
          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Excellent service and support for you
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {["Life Insurance", "Health Insurance", "Vehicle Insurance"].map(
            (service) => (
              <div
                key={service}
                className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition text-center"
              >
                <div className="w-16 h-16 mx-auto bg-red-50 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                  ✓
                </div>

                <h3 className="mt-6 text-xl font-semibold">{service}</h3>
                <p className="mt-3 text-gray-600">
                  Reliable coverage for your needs.
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
