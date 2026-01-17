export default function Features() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        <div className="relative">
          <img
            src="/images/services/family.jpg"
            alt="Family"
            className="rounded-xl shadow-xl"
          />

          <div className="absolute -bottom-10 left-6 bg-white p-6 rounded-xl shadow-lg w-72">
            <p className="font-semibold text-gray-800">
              100% secure services
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Trusted by thousands of customers.
            </p>
          </div>
        </div>

        <div>
          <span className="text-primary font-semibold uppercase">
            About Company
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 leading-tight">
            Insure here to help you <br /> with exploring protection
          </h2>

          <ul className="mt-8 space-y-4 text-gray-700">
            <li>✔ 100% secure services</li>
            <li>✔ Anytime money back</li>
            <li>✔ Trusted company</li>
          </ul>

          <button className="mt-10 bg-primary text-white px-6 py-3 rounded-md">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}
