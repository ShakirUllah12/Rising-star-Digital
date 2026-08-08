"use client";

import React, { useState } from 'react';

const faqs = [
  {
    q: 'What channels and services do you specialize in?',
    a: 'We specialize in Performance Marketing (Google Search, Shopping, YouTube, Meta, TikTok), Organic SEO & Content Systems, Custom Web Development, Conversion Rate Optimization (CRO), Lifecycle Email Marketing, and Business Growth Strategy Consultancy.'
  },
  {
    q: 'How long does it take to see measurable results?',
    a: 'Performance Marketing (Paid Search and Social) usually drives target conversion volume and measurable ROI within the first 14 days of campaign launch. SEO and organic authority strategies are structured for compound value and typically require 3 to 6 months to start dominating major terms.'
  },
  {
    q: 'What is included in the Free Growth Audit?',
    a: 'We perform a comprehensive analysis of your current website layout, technical performance, search engine visibility, paid search structure, and organic content opportunities. You get a direct, actionable brief of what is currently bottlenecking your sales, with no obligation.'
  },
  {
    q: 'Do you work with global clients or local businesses?',
    a: 'We operate globally. Although our main operational engineering hub is in Blue Area, Islamabad, we serve ambitious brands across more than 30 countries including the United States, United Kingdom, Germany, Australia, and the UAE.'
  },
  {
    q: 'How is monthly communication and reporting handled?',
    a: 'You get a dedicated Slack channel for instant daily communication, weekly campaign updates, and a custom live Looker Studio performance dashboard showing actual leads, revenue, and ROAS. We schedule monthly strategy alignment reviews to coordinate plans.'
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-20 lg:py-28 px-4 bg-transparent border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-accent uppercase tracking-widest text-xs font-bold mb-3">Frequently Asked Questions</p>
          <h2 className="text-3xl md:text-5xl font-black text-brand-light leading-tight">
            Clearing Up the <span className="text-[#00F0FF]">Details</span>
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`bg-[#1e1133]/40 backdrop-blur-md border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#00F0FF]/40 shadow-lg shadow-[#00F0FF]/5' : 'border-white/5 hover:border-white/10'}`}
              >
                {/* Accordion Trigger */}
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-brand-light hover:text-white transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#00F0FF] border-[#00F0FF]/20' : 'text-brand-light/60'}`}>
                    ▼
                  </span>
                </button>

                {/* Accordion Content */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 border-t border-white/5' : 'max-h-0'}`}
                >
                  <p className="px-6 py-5 text-xs sm:text-sm text-brand-light/70 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FAQ;
