const services = [
  "Life Insurance",
  "Health Insurance",
  "Vehicle Insurance",
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Excellent service and support</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <h3 className="font-semibold text-xl">{s}</h3>
              <p className="text-gray-600 mt-2">
                Reliable coverage for your needs.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
