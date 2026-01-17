export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        
        <img src="/images/services/family.jpg" alt="Family" />

        <div>
          <h2 className="text-3xl font-bold">
            Insure here to help you with exploring protection
          </h2>

          <ul className="mt-6 space-y-4">
            <li>✔ 100% secure services</li>
            <li>✔ Anytime money back</li>
            <li>✔ Trusted company</li>
          </ul>

          <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}
