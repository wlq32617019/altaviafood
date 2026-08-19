export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div className="fade-in-up">
            <div className="gold-line mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Let&apos;s Build a Partnership
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Whether you&apos;re looking for reliable supply of premium poultry, beef, or lamb
              products, or you want to explore collaboration opportunities, we&apos;d love to
              hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center text-navy shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Headquarters</h4>
                  <p className="text-gray-600 text-sm">Hong Kong SAR, China</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center text-navy shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Processing Facility</h4>
                  <p className="text-gray-600 text-sm">Vietnam</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center text-navy shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Email</h4>
                  <a
                    href="mailto:Sales@altaviafood.com"
                    className="text-gray-600 text-sm hover:text-amber transition-colors"
                  >
                    Sales@altaviafood.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="fade-in-up">
            <form
              className="p-8 rounded-2xl bg-cream border border-gray-100"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for your inquiry. We will get back to you shortly.');
              }}
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all text-sm"
                    placeholder="your@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-navy mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all text-sm"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-navy mb-2">
                    Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-navy focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all text-sm"
                  >
                    <option value="">Select your interest</option>
                    <option value="poultry">Poultry Products</option>
                    <option value="beef">Beef Products</option>
                    <option value="lamb">Lamb Products</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all text-sm resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-navy hover:bg-navy-light text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
