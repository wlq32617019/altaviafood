const businessSteps = [
  {
    step: '01',
    title: 'Source',
    description:
      'We identify and partner with certified suppliers across Turkey, the Middle East, North Africa, and Europe, ensuring every product meets international food safety standards.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Process',
    description:
      'Products are processed at our own facility in Vietnam, where strict quality control and hygiene protocols ensure consistency and compliance with local regulations.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Distribute',
    description:
      'Finished products are distributed across Southeast Asia through our established logistics network, reaching retailers, food processors, and hospitality businesses.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
];

export default function Business() {
  return (
    <section id="business" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            How We Operate
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A streamlined supply chain connecting premium sources to growing markets
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 stagger-children">
          {businessSteps.map((item) => (
            <div
              key={item.step}
              className="relative p-8 rounded-2xl bg-cream border border-gray-100 card-hover group"
            >
              <div className="text-amber/20 text-6xl font-bold absolute top-4 right-6">
                {item.step}
              </div>
              <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center text-navy group-hover:bg-amber group-hover:text-navy transition-colors duration-300 mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="mt-16 p-8 rounded-2xl bg-navy text-center fade-in-up">
          <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
            &ldquo;Our integrated approach — from sourcing to processing to distribution —
            gives us full control over quality and cost, ensuring the best value for
            our partners and customers.&rdquo;
          </p>
          <div className="mt-4 text-amber-light font-medium text-sm">
            — Altavia Management
          </div>
        </div>
      </div>
    </section>
  );
}
