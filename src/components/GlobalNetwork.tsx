const sourcingRegions = [
  { name: 'Turkey', role: 'Primary poultry source', x: '55%', y: '32%' },
  { name: 'Middle East', role: 'Poultry & livestock', x: '58%', y: '38%' },
  { name: 'North Africa', role: 'Livestock products', x: '47%', y: '36%' },
  { name: 'Europe', role: 'Premium meat cuts', x: '48%', y: '25%' },
];

const marketRegions = [
  { name: 'Vietnam', role: 'Processing hub & market', x: '74%', y: '42%' },
  { name: 'Southeast Asia', role: 'Core market', x: '72%', y: '48%' },
];

export default function GlobalNetwork() {
  return (
    <section id="network" className="py-24 lg:py-32 bg-deep text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Global Network
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Connecting premium sources across three continents to the dynamic markets of Southeast Asia
          </p>
        </div>

        {/* Network Visualization */}
        <div className="relative fade-in-up">
          {/* World Map SVG */}
          <div className="relative w-full aspect-[2/1] max-w-5xl mx-auto">
            {/* Simplified world map outline */}
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full opacity-20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            >
              {/* Simplified continent outlines */}
              {/* Europe */}
              <path d="M450 120 L480 100 L520 110 L530 130 L510 150 L490 160 L470 150 L450 140 Z" fill="currentColor" opacity="0.3" />
              {/* Africa */}
              <path d="M430 180 L470 170 L500 190 L510 230 L500 280 L480 310 L460 320 L440 300 L430 260 L420 220 Z" fill="currentColor" opacity="0.3" />
              {/* Middle East */}
              <path d="M530 160 L570 150 L590 170 L580 200 L560 210 L540 200 L530 180 Z" fill="currentColor" opacity="0.3" />
              {/* Asia */}
              <path d="M600 100 L700 80 L780 100 L800 150 L780 200 L740 230 L700 240 L660 230 L620 200 L600 160 Z" fill="currentColor" opacity="0.3" />
              {/* Southeast Asia */}
              <path d="M700 240 L740 230 L760 250 L750 280 L730 290 L710 280 L700 260 Z" fill="currentColor" opacity="0.3" />
            </svg>

            {/* Trade Routes - Sourcing to Vietnam */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Turkey to Vietnam */}
              <path
                d="M55 32 Q65 20 74 42"
                stroke="#C4915E"
                strokeWidth="0.3"
                fill="none"
                strokeDasharray="2 1"
                className="trade-route"
                opacity="0.6"
              />
              {/* Middle East to Vietnam */}
              <path
                d="M58 38 Q66 30 74 42"
                stroke="#C4915E"
                strokeWidth="0.3"
                fill="none"
                strokeDasharray="2 1"
                className="trade-route"
                opacity="0.6"
              />
              {/* North Africa to Vietnam */}
              <path
                d="M47 36 Q60 25 74 42"
                stroke="#C4915E"
                strokeWidth="0.3"
                fill="none"
                strokeDasharray="2 1"
                className="trade-route"
                opacity="0.6"
              />
              {/* Europe to Vietnam */}
              <path
                d="M48 25 Q60 15 74 42"
                stroke="#C4915E"
                strokeWidth="0.3"
                fill="none"
                strokeDasharray="2 1"
                className="trade-route"
                opacity="0.6"
              />
            </svg>

            {/* Sourcing Points */}
            {sourcingRegions.map((region) => (
              <div
                key={region.name}
                className="absolute group"
                style={{ left: region.x, top: region.y }}
              >
                <div className="relative -translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 rounded-full bg-amber pulse-dot" />
                  <div className="absolute -inset-2 rounded-full bg-amber/20" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-navy-light/90 backdrop-blur px-3 py-2 rounded-lg text-xs">
                    <p className="font-semibold text-white">{region.name}</p>
                    <p className="text-white/60">{region.role}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Market Points */}
            {marketRegions.map((region) => (
              <div
                key={region.name}
                className="absolute group"
                style={{ left: region.x, top: region.y }}
              >
                <div className="relative -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-white border-2 border-amber pulse-dot" />
                  <div className="absolute -inset-3 rounded-full bg-white/10" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-navy-light/90 backdrop-blur px-3 py-2 rounded-lg text-xs">
                    <p className="font-semibold text-white">{region.name}</p>
                    <p className="text-white/60">{region.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-8 mt-8 fade-in-up">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber" />
            <span className="text-white/60 text-sm">Sourcing Regions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-white border-2 border-amber" />
            <span className="text-white/60 text-sm">Processing & Markets</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-amber/60" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #C4915E 0, #C4915E 4px, transparent 4px, transparent 8px)' }} />
            <span className="text-white/60 text-sm">Trade Routes</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 stagger-children">
          {[
            { value: '4+', label: 'Sourcing Regions' },
            { value: '3', label: 'Continents' },
            { value: '6+', label: 'Markets Served' },
            { value: '1', label: 'Own Factory (Vietnam)' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl font-bold text-amber mb-2">{stat.value}</div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
