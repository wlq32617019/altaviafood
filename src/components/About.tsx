export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div className="fade-in-up">
            <div className="gold-line mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              Your Trusted Partner in
              <br />
              Global Food Trade
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Headquartered in Hong Kong, Altavia has established itself as a reliable
              bridge between premium food producers and emerging markets. We specialize
              in sourcing high-quality poultry, beef, and lamb products from trusted
              suppliers across the Middle East, North Africa, and Europe.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              With our own processing facility in Vietnam and an extensive network of
              partners spanning multiple continents, we ensure consistent quality,
              competitive pricing, and efficient delivery to our clients throughout
              Southeast Asia.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber mb-1">10+</div>
                <div className="text-sm text-gray-500">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber mb-1">3</div>
                <div className="text-sm text-gray-500">Continents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber mb-1">1</div>
                <div className="text-sm text-gray-500">Own Factory</div>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="fade-in-up relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/factory.jpeg"
                alt="Altavia processing facility in Vietnam"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-medium text-sm">
                  Our Processing Facility
                </p>
                <p className="text-white/70 text-xs mt-1">Vietnam</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-amber/30 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
