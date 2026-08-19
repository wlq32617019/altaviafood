export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/altavia-logo.png"
                alt="Altavia Limited Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              A Hong Kong-based international food trading company, connecting premium
              protein sources from the Middle East, North Africa, and Europe to the
              dynamic markets of Southeast Asia.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-amber/20 flex items-center justify-center text-white/50 hover:text-amber transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase text-white/80 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['About', 'Business', 'Products', 'Global Network', 'Contact'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '')}`}
                      className="text-white/50 hover:text-amber-light text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase text-white/80 mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              {[
                'Chicken Feet',
                'Whole Chicken',
                'Poultry Cuts',
                'Beef Products',
                'Lamb Products',
              ].map((item) => (
                <li key={item}>
                  <span className="text-white/50 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Altavia Limited. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Hong Kong SAR, China
          </p>
        </div>
      </div>
    </footer>
  );
}
