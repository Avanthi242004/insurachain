export default function Testimonials() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">What do people say?</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white p-8 rounded-xl shadow">
              <p className="text-gray-600">
                “Excellent insurance service and support!”
              </p>
              <p className="mt-4 font-semibold">John Doe</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
