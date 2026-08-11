"use client";

import { useState, useEffect } from 'react';


const servicesList = [
  {
    title: 'Performance Marketing',
    kicker: 'Paid growth systems',
    desc: 'Campaigns across Google, Meta and TikTok built around qualified demand, margin and measurable return.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'SEO & Content',
    kicker: 'Organic demand',
    desc: 'Technical SEO and useful content systems that improve visibility across search and AI-led discovery.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Web Development & CRO',
    kicker: 'Digital experiences',
    desc: 'Fast websites and landing systems designed for usability, search performance and stronger conversion.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Branding & Design',
    kicker: 'Distinctive brand systems',
    desc: 'Strategy, identity and campaign design that make every customer touchpoint feel coherent and memorable.',
    image: 'https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Lifecycle Marketing',
    kicker: 'Retention and loyalty',
    desc: 'Email automation and customer journeys that improve repeat purchase, retention and long-term value.',
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Business Consultancy',
    kicker: 'Commercial clarity',
    desc: 'Practical consultancy for offers, funnels, sales alignment, market entry and sustainable growth decisions.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'AI Video Editing',
    kicker: 'Scalable creative production',
    desc: 'Human-led, AI-assisted editing for paid social, short-form content and efficient campaign variations.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Personal Branding',
    kicker: 'Founder visibility',
    desc: 'Positioning, content and digital presence for experts and leaders who want credible, consistent authority.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
  }
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeService = servicesList[activeServiceIdx];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 pt-4 sticky top-0 z-50">
      <header className={`flex items-center justify-between px-6 py-3 transition-all duration-300 rounded-full border shadow-2xl ${
        isScrolled 
          ? 'bg-[#160d25]/90 border-white/15 backdrop-blur-md py-2.5 mt-1' 
          : 'bg-[#1e1133]/60 border-white/10 backdrop-blur-md'
      }`}>
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 group">
          <div className="relative">
            <svg
              className="w-8 h-8 text-[#00F0FF] transform group-hover:scale-110 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" />
            </svg>
            <div className="absolute -inset-1 bg-cyan-400/20 blur-sm rounded-full opacity-50"></div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm md:text-base font-black tracking-wider text-white">RISING STAR</span>
            <span className="text-[9px] font-black text-purple-500 tracking-widest bg-purple-500/10 px-1 py-0.5 rounded mt-0.5 self-start">DIGITAL</span>
          </div>
        </a>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-semibold text-brand-light/80">
          <a href="#who-we-are" className="px-3 py-2 rounded-full hover:bg-white/5 hover:text-white transition-all">Who We Are</a>
          
          {/* Mega Menu Parent Link */}
          <div className="relative group">
            <a 
              href="#services" 
              className="flex items-center gap-1 px-4 py-2 rounded-full hover:bg-white/5 hover:text-white transition-all"
            >
              What We Do
              <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            {/* Desktop Mega Menu Dropdown */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[760px] p-6 bg-[#160d25]/98 border border-white/10 rounded-[28px] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 grid grid-cols-12 gap-6 z-50 text-left pointer-events-auto">
              
              {/* Left Column: Intro */}
              <div className="col-span-4 flex flex-col justify-between border-r border-white/5 pr-4">
                <div>
                  <small className="block text-[10px] font-extrabold uppercase tracking-widest text-pink-500 mb-3">Growth Services</small>
                  <strong className="block text-xl font-black text-white leading-tight mb-2">Specialists where it matters. Connected everywhere else.</strong>
                  <p className="text-xs text-brand-light/60 leading-relaxed">Explore the capability that matches your next growth constraint.</p>
                </div>
                <a href="#services" className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-500 hover:text-purple-400 mt-6 transition-colors group/cta">
                  View all services
                  <span className="transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform">↗</span>
                </a>
              </div>

              {/* Middle Column: Links List */}
              <div className="col-span-5 grid grid-cols-1 gap-1">
                {servicesList.map((service, idx) => (
                  <a
                    key={idx}
                    href="#services"
                    onMouseEnter={() => setActiveServiceIdx(idx)}
                    onFocus={() => setActiveServiceIdx(idx)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                      activeServiceIdx === idx 
                        ? 'bg-white/5 text-purple-500 border border-white/5' 
                        : 'text-brand-light/80 hover:bg-white/5 hover:text-white border border-transparent'
                    }`}
                  >
                    <span>{service.title}</span>
                    {activeServiceIdx === idx && <span className="text-[10px] opacity-80">↗</span>}
                  </a>
                ))}
              </div>

              {/* Right Column: Interactive Preview Panel */}
              <div className="col-span-3 flex flex-col rounded-2xl bg-white/5 border border-white/5 p-4 justify-between overflow-hidden">
                <div className="w-full h-24 rounded-lg overflow-hidden mb-3 relative bg-[#1b1228] border border-white/5">
                  <img 
                    src={activeService.image} 
                    alt={activeService.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#160d25] to-transparent opacity-40"></div>
                </div>
                <div>
                  <small className="block text-[9px] font-extrabold text-brand-accent uppercase tracking-wider mb-1">{activeService.kicker}</small>
                  <strong className="block text-xs font-bold text-white mb-1 leading-tight">{activeService.title}</strong>
                  <p className="text-[11px] text-brand-light/60 leading-relaxed line-clamp-3">{activeService.desc}</p>
                </div>
              </div>

            </div>
          </div>

          <a href="#results" className="px-4 py-2 rounded-full hover:bg-white/5 hover:text-white transition-all">Results</a>
          <a href="#reviews" className="px-4 py-2 rounded-full hover:bg-white/5 hover:text-white transition-all">Reviews</a>
          <a href="#process" className="px-4 py-2 rounded-full hover:bg-white/5 hover:text-white transition-all">Process</a>
          <a href="#faq" className="px-4 py-2 rounded-full hover:bg-white/5 hover:text-white transition-all">FAQ</a>
        </nav>

        {/* Action Button & Hamburger Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-1.5 bg-white/5 hover:bg-white/10 text-white font-medium px-5 py-2 rounded-full border border-white/15 hover:border-white/20 text-xs md:text-sm shadow-inner transition-all duration-300 hover:scale-105 magnetic"
          >
            Get Free Audit
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>

          {/* Hamburger button (visible < md) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden flex-col items-center justify-center w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all"
            aria-label="Toggle Menu"
          >
            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
            <div className={`w-5 h-0.5 bg-white my-1 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 h-0 my-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div className={`fixed inset-0 top-[84px] bg-[#0d0617]/98 backdrop-blur-lg z-40 transition-all duration-500 overflow-y-auto px-6 py-8 flex flex-col justify-between border-t border-white/5 md:hidden ${
        mobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
      }`}>
        <div className="flex flex-col gap-5 text-left">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#00F0FF]">Navigate</span>
          <a href="#who-we-are" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-black text-white hover:text-[#00F0FF] transition-colors">Who We Are</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-black text-white hover:text-[#00F0FF] transition-colors">What We Do</a>
          
          {/* Mobile sublinks for services */}
          <div className="pl-4 flex flex-col gap-3.5 border-l border-white/10 py-1">
            {servicesList.map((service, idx) => (
              <a 
                key={idx} 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-xs font-semibold text-brand-light/60 hover:text-white"
              >
                {service.title}
              </a>
            ))}
          </div>
          <a href="#results" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-black text-white hover:text-[#00F0FF] transition-colors">Results</a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-black text-white hover:text-[#00F0FF] transition-colors">Reviews</a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-black text-white hover:text-[#00F0FF] transition-colors">Process</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-black text-white hover:text-[#00F0FF] transition-colors">FAQ</a>
        </div>

        {/* Mobile Audit Action CTA */}
        <div className="pt-8 border-t border-white/10 text-left flex flex-col gap-4">
          <p className="text-xs text-brand-light/50">Blue Area, Islamabad · <a href="tel:+923125791105" className="hover:underline text-brand-light font-semibold">+92 312 5791105</a></p>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 bg-[#00F0FF] hover:bg-[#00e5ff] text-[#030712] font-bold py-3.5 rounded-xl shadow-lg transition-all"
          >
            Get Free Audit Now
            <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;