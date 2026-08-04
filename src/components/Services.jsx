import React, { useState } from 'react';

const services = [
  {
    title: 'Performance Marketing',
    kicker: 'Paid growth systems',
    desc: 'Campaigns across Google, Meta and TikTok built around qualified demand, margin and measurable return.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    details: [
      'Google Ads & PMax',
      'Meta Campaign Scaling',
      'TikTok Conversion Ads',
      'Attribution Modeling',
      'Ad Creative Strategy',
      'Margin & ROI Auditing'
    ]
  },
  {
    title: 'SEO & Content',
    kicker: 'Organic demand',
    desc: 'Technical SEO and useful content systems that improve visibility across search engines and AI discovery.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    details: [
      'Technical Site Audits',
      'Keyword Mapping',
      'Content Production',
      'AI Engine Optimization',
      'Backlink Engineering',
      'Local & Global SEO'
    ]
  },
  {
    title: 'Web Development & CRO',
    kicker: 'Digital experiences',
    desc: 'Fast, conversion-focused websites and custom landing pages designed for usability, speed, and sales.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    details: [
      'React & NextJS Engineering',
      'Headless Storefronts',
      'Landing Page Funnels',
      'UI/UX Optimization',
      'A/B Testing Systems',
      'Core Web Vitals Optimization'
    ]
  },
  {
    title: 'Branding & Design',
    kicker: 'Distinctive brand systems',
    desc: 'Strategic positioning, identity, and creative design that make every touchpoint feel coherent and memorable.',
    image: 'https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&w=1200&q=80',
    details: [
      'Strategic Positioning',
      'Visual Identity & Logos',
      'Brand Guidelines',
      'Design Systems',
      'Collateral Design',
      'UI/UX Design'
    ]
  },
  {
    title: 'Lifecycle Marketing',
    kicker: 'Retention and loyalty',
    desc: 'Email automation, newsletter strategy, and retention flows that turn buyers into repeat customers.',
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1200&q=80',
    details: [
      'Klaviyo / ActiveCampaign Setup',
      'Welcome & Cart Abandonment',
      'Loyalty Programs',
      'Customer Cohort Analysis',
      'Re-engagement Flows',
      'Direct Mail Campaigns'
    ]
  },
  {
    title: 'Business Consultancy',
    kicker: 'Commercial clarity',
    desc: 'Practical guidance on business offers, checkout funnels, pricing strategies, and scaling decisions.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    details: [
      'Offer Structuring',
      'Pricing Strategies',
      'Sales Pipeline Optimization',
      'Market Penetration',
      'KPI Framework Design',
      'Tech Stack Consulting'
    ]
  },
  {
    title: 'AI Video Editing',
    kicker: 'Scalable creative production',
    desc: 'Human-led, AI-assisted video production and editing for paid social ads and high-impact short-form content.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
    details: [
      'TikTok & Reels Ads',
      'Smart Captioning',
      'Multi-hook Variations',
      'Sound Design',
      'Color Grading',
      'Batch Creative Output'
    ]
  },
  {
    title: 'Personal Branding',
    kicker: 'Founder visibility',
    desc: 'Strategic positioning and content production for founders, executives, and leaders to build digital authority.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1200&q=80',
    details: [
      'Profile Optimization',
      'Executive Ghostwriting',
      'Content Scheduling',
      'Industry Authority SEO',
      'PR & Media Strategy',
      'Podcasting Setup'
    ]
  }
];

function Services() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="services" className="relative py-24 lg:py-32 px-4 overflow-hidden border-t border-white/5 bg-[#0d0617]/40">
      {/* Background Section Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-left">
          <div className="max-w-2xl">
            <p className="text-brand-accent uppercase tracking-widest text-xs font-bold mb-3">What we do</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-light leading-tight">
              One system. <br className="hidden sm:inline" />
              <span className="text-[#00F0FF]">Every important lever.</span>
            </h2>
          </div>
          <p className="text-brand-light/65 text-sm sm:text-base max-w-md">
            Explore the capability that matches your next growth constraint. We work across the entire conversion loop to build predictable scale.
          </p>
        </div>

        {/* Services Accordion Container */}
        <div className="relative w-full min-h-[500px] lg:min-h-[700px] flex flex-col lg:flex-row rounded-3xl border border-white/10 overflow-hidden bg-[#0B0F19] shadow-2xl isolation-isolate">
          
          {/* Background Images Crossfade */}
          <div className="absolute inset-0 z-[-3] pointer-events-none">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="absolute inset-0 transition-opacity duration-700 ease-in-out bg-cover bg-center"
                style={{
                  backgroundImage: `url(${service.image})`,
                  opacity: activeIdx === idx ? 0.28 : 0
                }}
              />
            ))}
          </div>

          {/* Gradient Shade Overlays */}
          <div className="absolute inset-0 z-[-2] pointer-events-none bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#020617]/95 lg:from-[#020617]/90 lg:via-[#020617]/65 lg:to-[#020617]/85"></div>
          <div className="absolute inset-0 z-[-1] pointer-events-none bg-gradient-to-b from-transparent via-[#020617]/30 to-[#020617]/70"></div>

          {/* Desktop/Large screen view (>= 1024px) - Horizontal Flex layout */}
          <div className="hidden lg:flex w-full h-[700px]">
            {services.map((service, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`relative flex flex-col justify-end p-8 border-r border-white/10 transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group cursor-pointer overflow-hidden ${
                    isActive ? 'flex-[2.8] bg-[#030712]/45' : 'flex-[1] hover:bg-[#030712]/20'
                  }`}
                  style={{
                    borderRightWidth: idx === services.length - 1 ? 0 : '1px'
                  }}
                >
                  {/* Service Number */}
                  <span className="absolute top-8 left-8 text-xs font-black tracking-wider text-white/50 group-hover:text-[#00F0FF] transition-colors duration-300">
                    0{idx + 1}
                  </span>

                  {/* Vertical / Horizontal Text Container */}
                  <div className="flex flex-col items-start w-full">
                    {/* Header */}
                    <h3
                      className={`text-white transition-all duration-500 font-black tracking-tight text-left select-none ${
                        isActive
                          ? 'text-2xl xl:text-3xl mb-4 text-[#00F0FF]'
                          : 'text-xl xl:text-2xl whitespace-nowrap absolute bottom-8 left-8 group-hover:text-white'
                      }`}
                      style={!isActive ? {
                        writingMode: 'vertical-rl',
                        transform: 'rotate(180deg)',
                        transformOrigin: 'left bottom',
                        left: '2rem',
                        bottom: '2rem'
                      } : {}}
                    >
                      {service.title}
                    </h3>

                    {/* Expandable Content Drawer */}
                    <div
                      className={`transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] w-full text-left ${
                        isActive ? 'max-h-[480px] opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none'
                      }`}
                    >
                      <span className="block text-xs uppercase tracking-wider font-extrabold text-brand-accent mb-2">
                        {service.kicker}
                      </span>
                      <p className="text-sm text-brand-light/80 leading-relaxed max-w-lg mb-6">
                        {service.desc}
                      </p>

                      {/* Details bullets */}
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-3.5 mb-6">
                        {service.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2 text-xs font-semibold text-white/90">
                            <span className="text-[#00F0FF] text-sm">✦</span>
                            {detail}
                          </li>
                        ))}
                      </ul>

                      {/* Call-to-action */}
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-white hover:text-[#00F0FF] transition-colors group/link"
                      >
                        Request Case Study
                        <svg className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile/Tablet view (< 1024px) - Vertical accordion list */}
          <div className="flex lg:hidden flex-col w-full divide-y divide-white/10">
            {services.map((service, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div key={idx} className="w-full">
                  {/* Accordion header button */}
                  <button
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`w-full flex items-center justify-between p-6 text-left transition-colors duration-300 ${
                      isActive ? 'bg-[#030712]/60' : 'bg-transparent hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-black text-brand-light/40">0{idx + 1}</span>
                      <h3 className={`text-lg font-bold transition-colors duration-300 ${isActive ? 'text-[#00F0FF]' : 'text-white'}`}>
                        {service.title}
                      </h3>
                    </div>
                    <span className={`text-xs transition-transform duration-300 ${isActive ? 'rotate-180 text-[#00F0FF]' : 'text-white/40'}`}>
                      ▼
                    </span>
                  </button>

                  {/* Accordion content body */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isActive ? 'max-h-[600px] border-t border-white/5 bg-[#030712]/40 p-6' : 'max-h-0'
                    }`}
                  >
                    <span className="block text-xs uppercase tracking-wider font-extrabold text-brand-accent mb-2">
                      {service.kicker}
                    </span>
                    <p className="text-xs sm:text-sm text-brand-light/75 leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    {/* Inline mobile background image representation */}
                    <div
                      className="w-full h-40 rounded-2xl mb-6 bg-cover bg-center border border-white/10"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />

                    {/* Details bullets */}
                    <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-3 mb-6">
                      {service.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2 text-xs text-white/90">
                          <span className="text-[#00F0FF]">✦</span>
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* Call-to-action */}
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#00F0FF] transition-colors"
                    >
                      Request Case Study
                      <svg className="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;