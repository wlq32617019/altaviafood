const products = [
  {
    title: 'Poultry Products',
    subtitle: 'Chicken Feet & More',
    description:
      'Premium chicken feet sourced from Turkey and processed to meet the highest standards. We also supply whole chickens, wings, drumsticks, and other poultry cuts for the Southeast Asian market.',
    image: '/product-poultry.jpeg',
    tags: ['Chicken Feet', 'Whole Chicken', 'Wings', 'Drumsticks'],
  },
  {
    title: 'Beef & Lamb',
    subtitle: 'Premium Red Meat',
    description:
      'Carefully selected beef and lamb from trusted farms in the Middle East, North Africa, and Europe. Available in various cuts and specifications to meet diverse market demands.',
    image: '/product-meat.jpeg',
    tags: ['Beef Cuts', 'Lamb', 'Frozen', 'Fresh'],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Our Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Quality protein products sourced from trusted origins, delivered with consistency
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid lg:grid-cols-2 gap-10 stagger-children">
          {products.map((product) => (
            <div
              key={product.title}
              className="rounded-2xl overflow-hidden bg-white shadow-sm card-hover group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <p className="text-amber-light text-xs font-medium tracking-widest uppercase">
                    {product.subtitle}
                  </p>
                  <h3 className="text-white text-2xl font-bold">{product.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-navy/5 text-navy rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality assurance */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6 stagger-children">
          {[
            {
              title: 'Quality Assured',
              desc: 'All products meet international food safety standards and local import regulations.',
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
            },
            {
              title: 'Cold Chain Integrity',
              desc: 'End-to-end temperature-controlled logistics ensuring product freshness.',
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              ),
            },
            {
              title: 'Competitive Pricing',
              desc: 'Direct sourcing and own processing facility enable cost-effective supply.',
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-xl bg-white border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center text-amber mb-4">
                {item.icon}
              </div>
              <h4 className="font-semibold text-navy mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
