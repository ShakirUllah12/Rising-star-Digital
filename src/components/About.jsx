import React from 'react';

const storyCards = [
  {
    kicker: '01 / MOMENTUM',
    title: 'Rising Star by the numbers.',
    isStats: true,
    stats: [
      { value: '30+', label: 'Countries Served' },
      { value: '500+', label: 'Clients Scaled' },
      { value: '4.9/5', label: 'Average Rating' }
    ]
  },
  {
    kicker: '02 / PRINCIPLE',
    title: 'Data-First Mindset',
    desc: 'No guesswork. We rely on clean attribution models, client unit margins, and cohort analytics to guide marketing decisions.',
    isStats: false,
    graphicType: 'chart'
  },
  {
    kicker: '03 / METHOD',
    title: 'Growth Engineering',
    desc: 'We merge software development with marketing: custom funnels, landing speed optimization, and programmatic automation tools.',
    isStats: false,
    graphicType: 'funnel'
  },
  {
    kicker: '04 / EXECUTION',
    title: 'Global Execution',
    desc: 'Headquartered in Blue Area, Islamabad, we deploy and manage multi-lingual campaigns reaching clients in over 30 countries.',
    isStats: false,
    graphicType: 'globe'
  }
];

function About() {
  return (
    <section id="who-we-are" className="relative py-24 px-4 bg-[#f7f4ef] text-[#2e1f44] overflow-hidden border-y border-[#2e1f44]/10 select-none">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Intro Header */}
        <div className="grid md:grid-cols-12 gap-8 items-start mb-16 text-left">
          <div className="md:col-span-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple-600 block mb-3">Who We Are</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-none text-[#2e1f44] tracking-tight">
              We build the systems.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-base sm:text-lg text-[#2e1f44]/80 leading-relaxed max-w-3xl">
              Rising Star Digital is a growth engineering firm. We merge technical development with performance marketing to build search engines, campaigns, and conversions that help business models scale.
            </p>
          </div>
        </div>

        {/* Horizontal Card Scroll Track */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-6 -mx-4 px-4 md:mx-0 md:px-0">
          {storyCards.map((card, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={idx}
                className={`snap-center md:snap-start shrink-0 w-[300px] sm:w-[420px] md:w-[460px] min-h-[490px] rounded-[30px] border p-8 flex flex-col justify-between shadow-lg relative overflow-hidden transition-all duration-300 ${
                  isEven 
                    ? 'bg-[#0B0F19] text-white border-white/10' 
                    : 'bg-white text-[#2e1f44] border-[#2e1f44]/10'
                }`}
              >
                {/* Kicker */}
                <span className={`text-[10px] font-extrabold tracking-widest uppercase ${isEven ? 'text-purple-400' : 'text-purple-600'}`}>
                  {card.kicker}
                </span>

                {/* Body Content */}
                <div className="my-auto text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight mb-4">
                    {card.title}
                  </h3>
                  
                  {card.isStats ? (
                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-current/10">
                      {card.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="flex flex-col">
                          <span className="text-xl sm:text-2xl font-black text-[#00F0FF]">{stat.value}</span>
                          <span className={`text-[9px] uppercase tracking-wider font-extrabold ${isEven ? 'text-white/50' : 'text-[#2e1f44]/55'}`}>
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className={`text-xs sm:text-sm leading-relaxed ${isEven ? 'text-white/70' : 'text-[#2e1f44]/75'}`}>
                      {card.desc}
                    </p>
                  )}
                </div>

                {/* Custom Graphics Panel at bottom of Card */}
                <div className="h-28 w-full flex items-end justify-between relative mt-4">
                  {card.isStats && (
                    <div className="flex items-end gap-3.5 w-full h-full pb-2">
                      <div className="w-1/3 h-[30%] rounded-t-xl bg-[#00F0FF]/80"></div>
                      <div className="w-1/3 h-[62%] rounded-t-xl bg-purple-500/80"></div>
                      <div className="w-1/3 h-[95%] rounded-t-xl bg-[#00F0FF]/40"></div>
                    </div>
                  )}

                  {card.graphicType === 'chart' && (
                    <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                      <path
                        d="M 0 90 Q 40 70 80 85 T 160 30 T 200 10 L 200 100 L 0 100 Z"
                        fill={isEven ? 'rgba(0, 240, 255, 0.1)' : 'rgba(168, 85, 247, 0.08)'}
                      />
                      <path
                        d="M 0 90 Q 40 70 80 85 T 160 30 T 200 10"
                        fill="none"
                        stroke={isEven ? '#00F0FF' : '#A855F7'}
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}

                  {card.graphicType === 'funnel' && (
                    <div className="flex flex-col items-center justify-center gap-1.5 w-full h-full">
                      <div className="w-[85%] h-5 bg-purple-500/80 rounded-full flex items-center justify-center text-[8px] font-black text-white">TRAFFIC</div>
                      <div className="w-[55%] h-5 bg-[#00F0FF]/60 rounded-full flex items-center justify-center text-[8px] font-black text-[#030712]">LEADS</div>
                      <div className="w-[30%] h-5 bg-[#00F0FF] rounded-full flex items-center justify-center text-[8px] font-black text-[#030712]">SALES</div>
                    </div>
                  )}

                  {card.graphicType === 'globe' && (
                    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                      <div className="w-24 h-24 rounded-full border border-dashed border-current/25 animate-slow-spin absolute"></div>
                      <div className="w-16 h-16 rounded-full border border-current/25 absolute"></div>
                      <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.003 9.003 0 008.34-5.347M12 21a9.003 9.003 0 01-8.34-5.347m8.34 5.347L12 15m-8.34-.347l.006-.003c.52-1.317 1.6-2.292 2.979-2.656m0 0L9 12m0 0L7.5 7.5M12 15v-6.5m0 6.5h-3.5m7-6.5c1.378.364 2.458 1.339 2.978 2.656a8.96 8.96 0 01-2.978-2.656zm0 0L15 9.75M12 8.5V3m0 5.5l1.5-4.25" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default About;
