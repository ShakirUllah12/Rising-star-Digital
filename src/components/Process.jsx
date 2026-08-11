
const steps = [
  {
    num: '01',
    title: 'Audit & Discovery',
    desc: 'We analyze your website performance, ad account structure, competitor strategies, and search presence to identify your biggest conversion bottlenecks and lowest-hanging growth opportunities.',
    tag: 'Phase 1'
  },
  {
    num: '02',
    title: 'Strategy & Roadmap',
    desc: 'We map out a comprehensive performance marketing and organic discovery roadmap tailored to your specific profit margins, volume constraints, and growth targets.',
    tag: 'Phase 2'
  },
  {
    num: '03',
    title: 'Setup & Launch',
    desc: 'Our design and development teams deploy lightning-fast landing systems, tracking pixels, search funnels, and optimized ad creative pipelines for your active channels.',
    tag: 'Phase 3'
  },
  {
    num: '04',
    title: 'Optimize & Scale',
    desc: 'Using real-time analytics and cohort performance tracking, we execute continuous A/B tests, refine user journeys, and scale high-performing assets to maximize ROI.',
    tag: 'Continuous'
  }
];

function Process() {
  return (
    <section id="process" className="relative py-20 lg:py-28 px-4 bg-transparent">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-brand-accent uppercase tracking-widest text-xs font-bold mb-3">Our Methodology</p>
          <h2 className="text-3xl md:text-5xl font-black text-brand-light leading-tight mb-4">
            How We Drive <span className="text-[#00F0FF]">Predictable Growth</span>
          </h2>
          <p className="text-brand-light/60 text-sm sm:text-base">
            A battle-tested framework combining deep technical analysis, creative execution, and conversion science.
          </p>
        </div>

        {/* Grid Timeline */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div 
              key={step.num} 
              className="bg-[#1e1133]/40 backdrop-blur-md border border-white/5 hover:border-brand-accent/25 rounded-3xl p-6 relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Highlight background glow on hover */}
              <div className="absolute -right-10 -top-10 w-24 h-24 bg-brand-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div>
                {/* Step Number & Tag */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl font-black text-white/10 group-hover:text-[#00F0FF]/20 transition-colors duration-300">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-black tracking-widest uppercase text-brand-accent bg-brand-accent/10 px-2.5 py-1 rounded-full border border-brand-accent/10">
                    {step.tag}
                  </span>
                </div>

                {/* Step Content */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00F0FF] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-light/60 leading-relaxed mb-4">
                  {step.desc}
                </p>
              </div>

              {/* Connecting line decoration for visual flow */}
              <div className="w-full h-1 bg-gradient-to-right from-brand-accent to-pink-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-full mt-4"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Process;
