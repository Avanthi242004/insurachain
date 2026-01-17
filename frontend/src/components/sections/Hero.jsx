export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-red-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Insurance to keep life secure!
          </h1>
          <p className="mt-4 text-gray-600">
            Trusted insurance solutions to protect what matters most.
          </p>

          <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded">
            Get Started
          </button>
        </div>

        <img
          src="/images/hero/hero.png"
          alt="Insurance Hero"
          className="w-full"
        />
      </div>
    </section>
  );
}
