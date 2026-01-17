export default function Hero() {
  return (
    <section className="relative bg-white pt-40 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="z-10">
          {/* Floating Tag Style */}
          <div className="inline-flex items-center gap-1 mb-6 px-3 py-1 border-2 border-yellow-500 rounded-sm">
            <span className="text-sm font-bold text-gray-800 uppercase tracking-widest">Hello There!</span>
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
            Secure Your <br />
            <span className="text-yellow-500">Future</span> with <br />
            InsuraChain.
          </h1>

          <p className="mt-8 text-gray-500 text-lg max-w-md leading-relaxed">
            I'm a modern insurance platform designed to provide transparent, 
            reliable, and secure coverage for individuals and businesses worldwide.
          </p>

          <div className="mt-12 flex items-center gap-6">
            {/* Dark Green Button */}
            <button className="bg-[#1B3C2B] hover:bg-green-900 text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-xl transition">
              Get Insurance
              <div className="bg-white rounded-full p-1">
                <svg className="w-4 h-4 text-[#1B3C2B]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
              </div>
            </button>

            <button className="text-gray-900 font-bold border-2 border-gray-200 px-8 py-4 rounded-full hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE COLUMN */}
        <div className="relative flex justify-center items-center">
          {/* Large Yellow Organic Circle */}
          <div className="absolute w-[450px] h-[450px] bg-yellow-400 rounded-full opacity-90 translate-x-10"></div>

          {/* Main Content Area (Placeholder for your image) */}
          <div className="relative z-10 w-[400px] h-[500px] bg-gray-200 rounded-b-full overflow-hidden border-8 border-white shadow-2xl flex items-end justify-center">
             <span className="mb-20 font-bold text-gray-400">[Insert Person/Graphic]</span>
          </div>

          {/* Floating Tag - Bottom Right */}
          <div className="absolute bottom-20 right-0 z-20 bg-yellow-500 text-[#1B3C2B] px-6 py-2 rounded-lg font-bold shadow-lg transform rotate-3">
             UI/UX Designer
          </div>

          {/* Floating Tag - Bottom Left */}
          <div className="absolute bottom-10 left-10 z-20 bg-[#1B3C2B] text-white px-6 py-3 rounded-full font-bold shadow-lg">
             Secure Coverage
          </div>
          
          {/* Hire Me / Circular Text Badge */}
          <div className="absolute top-20 right-10 z-20 w-24 h-24 bg-[#1B3C2B] rounded-full flex items-center justify-center border-4 border-white animate-spin-slow">
             <span className="text-white text-[10px] text-center font-bold">INSURE • TRUST • SECURE •</span>
          </div>
        </div>

      </div>
    </section>
  );
}