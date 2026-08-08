"use client";

import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    budget: '$1,000 - $5,000',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (formData.website.trim() && !/^https?:\/\/[^\s$.?#].[^\s]*$/i.test(formData.website)) {
      tempErrors.website = 'Enter a valid URL (e.g., https://example.com)';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        website: '',
        budget: '$1,000 - $5,000',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 px-4 overflow-hidden bg-grid-pattern border-t border-white/5">
      {/* Decorative glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-brand-accent/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Info & Value Prop */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-xs font-semibold text-brand-accent mb-6 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
            Growth Audit
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-light leading-tight mb-6">
            Get Your Free <span className="text-[#00F0FF]">Growth Audit</span>
          </h2>
          
          <p className="text-brand-light/75 text-base sm:text-lg mb-8 leading-relaxed">
            Stop guessing. Get a detailed, expert-reviewed digital marketing and conversion audit of your site. We'll show you exactly where you're losing customers and how to scale your sales.
          </p>

          {/* Value list */}
          <div className="space-y-4 mb-10">
            {[
              { title: 'Performance Review', desc: 'Detailed analysis of your paid ad account structure and efficiency.' },
              { title: 'CRO & UX Check', desc: 'Identify bottlenecks that block users from converting.' },
              { title: 'SEO Opportunities', desc: 'Uncover keyword gaps and technical issues hurting rankings.' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#00F0FF]/10 border border-[#00F0FF]/20 flex items-center justify-center text-[#00F0FF]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">{item.title}</h4>
                  <p className="text-xs text-brand-light/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Details */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-6 text-xs text-brand-light/60">
            <div>
              <span className="block font-semibold text-white/80">Call Us</span>
              <a href="tel:+923125791105" className="hover:text-brand-accent transition-colors font-bold text-sm text-brand-light">+92 312 5791105</a>
            </div>
            <div>
              <span className="block font-semibold text-white/80">Location</span>
              <span className="text-brand-light font-medium text-sm">Blue Area, Islamabad, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Form */}
        <div className="lg:col-span-7 w-full">
          <div className="bg-[#1e1133]/60 backdrop-blur-lg border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
            {submitted ? (
              <div className="py-12 px-4 text-center flex flex-col items-center justify-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 shadow-lg shadow-emerald-500/10">
                  <svg className="w-8 h-8 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Audit Requested!</h3>
                <p className="text-brand-light/70 text-sm max-w-md mb-8">
                  Thank you! Our growth strategists are already looking at your site. We will reach out to your business email within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="bg-white/5 hover:bg-white/10 text-white font-bold px-6 py-2 rounded-full border border-white/10 text-sm transition-all"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Request Free Consultation</h3>
                  <p className="text-xs text-brand-light/50">Complete the form below and start your growth journey.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-xs font-semibold text-brand-light/80 mb-2">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ali Usman"
                      className={`px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-brand-light/30 focus:outline-none focus:border-brand-accent transition-colors ${errors.name ? 'border-red-500' : 'border-white/10'}`}
                    />
                    {errors.name && <span className="text-xs text-red-400 mt-1 font-medium">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-xs font-semibold text-brand-light/80 mb-2">Business Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ali@company.com"
                      className={`px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-brand-light/30 focus:outline-none focus:border-brand-accent transition-colors ${errors.email ? 'border-red-500' : 'border-white/10'}`}
                    />
                    {errors.email && <span className="text-xs text-red-400 mt-1 font-medium">{errors.email}</span>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Website */}
                  <div className="flex flex-col">
                    <label htmlFor="website" className="text-xs font-semibold text-brand-light/80 mb-2">Website URL</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://company.com"
                      className={`px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-brand-light/30 focus:outline-none focus:border-brand-accent transition-colors ${errors.website ? 'border-red-500' : 'border-white/10'}`}
                    />
                    {errors.website && <span className="text-xs text-red-400 mt-1 font-medium">{errors.website}</span>}
                  </div>

                  {/* Budget */}
                  <div className="flex flex-col">
                    <label htmlFor="budget" className="text-xs font-semibold text-brand-light/80 mb-2">Monthly Marketing Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl bg-[#1e1133] border border-white/10 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors"
                    >
                      <option className="bg-[#120921]" value="Less than $1,000">Less than $1,000</option>
                      <option className="bg-[#120921]" value="$1,000 - $5,000">$1,000 - $5,000</option>
                      <option className="bg-[#120921]" value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option className="bg-[#120921]" value="$10,000 - $25,000">$10,000 - $25,000</option>
                      <option className="bg-[#120921]" value="$25,000+">$25,000+</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-xs font-semibold text-brand-light/80 mb-2">Tell Us About Your Project & Goals</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your product, target market, or marketing pain points..."
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-brand-light/30 focus:outline-none focus:border-brand-accent transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-[#00F0FF] hover:bg-[#00e5ff] text-[#030712] font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-[#00F0FF]/10 hover:scale-[1.01] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-[#030712]" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analyzing details...
                    </>
                  ) : (
                    <>
                      Get Free Audit Now
                      <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
