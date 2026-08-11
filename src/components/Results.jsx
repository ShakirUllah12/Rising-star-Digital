import Image from 'next/image';

function Results() {
  return (
    <section id="results" className="relative py-24 lg:py-32 px-4 bg-white text-[#2e1f44] overflow-hidden border-t border-[#2e1f44]/10 select-none">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-8 items-end mb-16 text-left">
          <div className="md:col-span-7">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#A855F7] block mb-3">Case Studies</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-none text-[#2e1f44] tracking-tight">
              Real Impact.<br />
              <span className="text-[#00F0FF]">Proven Performance.</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-sm sm:text-base text-[#746c7e] leading-relaxed">
              We focus on metrics that impact your bank account — revenue, customer acquisition costs, and actual return on investment.
            </p>
          </div>
        </div>

        {/* Case Studies Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Large eCommerce case (Col span 7) */}
          <div className="lg:col-span-7 rounded-3xl border border-[#2e1f44]/10 bg-[#f7f4ef] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-2xl transition-all duration-500 group">
            <div className="w-full h-80 overflow-hidden relative">
              <Image 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80" 
                alt="Apex Apparel ecommerce" 
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#f7f4ef] via-transparent to-transparent opacity-90"></div>
            </div>
            
            <div className="p-8 text-left">
              <span className="text-[10px] font-extrabold tracking-widest text-[#A855F7] uppercase block mb-1">01 / Paid Social & Shopping</span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#2e1f44] mb-4">Apex Apparel (eCommerce)</h3>
              <p className="text-xs sm:text-sm text-[#746c7e] leading-relaxed mb-8 max-w-xl">
                Scaled Meta & Google Shopping campaigns with hyper-targeted product segmentation and custom catalog overlays.
              </p>
              
              <div className="flex gap-10 pt-6 border-t border-[#2e1f44]/10">
                <div className="flex flex-col">
                  <strong className="text-3xl font-black text-[#A855F7]">4.8x ROAS</strong>
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#746c7e] mt-1">Campaign Return</span>
                </div>
                <div className="flex flex-col">
                  <strong className="text-3xl font-black text-[#2e1f44]">+210%</strong>
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#746c7e] mt-1">Sales Volume</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Two smaller cards stacked (Col span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Card 2: B2B SaaS case (Pink themed) */}
            <div className="rounded-3xl border border-[#8B5CF6]/20 bg-[#8B5CF6] text-white p-8 flex flex-col justify-between shadow-sm hover:shadow-2xl transition-all duration-500 text-left relative overflow-hidden group">
              <div className="absolute -right-16 -top-16 w-36 h-36 bg-[#00F0FF]/10 rounded-full blur-xl pointer-events-none"></div>
              
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-[#00F0FF] uppercase block mb-1">02 / SEO & Content strategy</span>
                <h3 className="text-xl sm:text-2xl font-black mb-3">SaaSify Platforms</h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
                  Engineered a technical SEO rewrite and custom blog resource hub targeting commercial intent keywords.
                </p>
              </div>

              {/* Mini SVG Growth chart */}
              <div className="w-full h-16 my-4">
                <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="cyanChartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M 0 50 Q 30 45 60 48 T 120 25 T 180 8 T 200 5 L 200 60 L 0 60 Z" 
                    fill="url(#cyanChartGrad)"
                  />
                  <path 
                    d="M 0 50 Q 30 45 60 48 T 120 25 T 180 8 T 200 5" 
                    fill="none" 
                    stroke="#00F0FF" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                  />
                  <circle cx="200" cy="5" r="3" fill="#00F0FF" />
                </svg>
              </div>

              <div className="flex gap-10 pt-4 border-t border-white/10 mt-2">
                <div className="flex flex-col">
                  <strong className="text-2xl font-black text-[#00F0FF]">+340%</strong>
                  <span className="text-[9px] uppercase tracking-wider font-extrabold text-white/60 mt-0.5">Organic Traffic</span>
                </div>
                <div className="flex flex-col">
                  <strong className="text-2xl font-black text-white">12k+</strong>
                  <span className="text-[9px] uppercase tracking-wider font-extrabold text-white/60 mt-0.5">Inbound Leads</span>
                </div>
              </div>
            </div>

            {/* Card 3: Lead Gen case with Global Cloud */}
            <div className="rounded-3xl border border-[#2e1f44]/10 bg-[#f7f4ef] p-8 flex flex-col justify-between shadow-sm hover:shadow-2xl transition-all duration-500 text-left relative overflow-hidden group">
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-[#A855F7] uppercase block mb-1">03 / Lead Gen & Funnels</span>
                <h3 className="text-xl sm:text-2xl font-black text-[#2e1f44] mb-3">Novatech Systems</h3>
                <p className="text-xs sm:text-sm text-[#746c7e] leading-relaxed mb-6">
                  Designed high-converting landing funnels and set up CRM automation routing to filter leads.
                </p>
              </div>

              {/* Country tag cloud (Global Reach representation) */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['US', 'UK', 'DE', 'AU', 'AE'].map((country) => (
                  <div 
                    key={country} 
                    className="w-10 h-10 rounded-full border border-[#2e1f44]/15 flex items-center justify-center text-[10px] font-black text-[#2e1f44] hover:bg-[#2e1f44] hover:text-white transition-colors duration-300 shadow-sm bg-white"
                  >
                    {country}
                  </div>
                ))}
              </div>

              <div className="flex gap-10 pt-4 border-t border-[#2e1f44]/10 mt-2">
                <div className="flex flex-col">
                  <strong className="text-2xl font-black text-[#A855F7]">-45%</strong>
                  <span className="text-[9px] uppercase tracking-wider font-extrabold text-[#746c7e] mt-0.5">Cost-per-Lead</span>
                </div>
                <div className="flex flex-col">
                  <strong className="text-2xl font-black text-[#2e1f44]">8.2x</strong>
                  <span className="text-[9px] uppercase tracking-wider font-extrabold text-[#746c7e] mt-0.5">Funnel ROI</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Results;
