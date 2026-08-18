export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-port.jpeg"
          alt="Global shipping port"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="gold-line mx-auto mb-8" />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          Bridging Continents,
          <br />
          <span className="text-amber-light">Delivering Quality</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          Altavia is a Hong Kong-based global food trading company, sourcing premium
          poultry, beef, and lamb products from the Middle East, North Africa, and Europe
          to serve the growing markets of Southeast Asia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#business"
            className="inline-flex items-center justify-center px-8 py-4 bg-amber hover:bg-amber-light text-navy font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber/20"
          >
            Our Business
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-amber rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
