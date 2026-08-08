import React from 'react';
import Image from 'next/image';

const reviews = [
  {
    name: 'Sarah K.',
    role: 'eCommerce Director, Apex Apparel',
    rating: 5,
    text: 'Rising Star Digital transformed our customer acquisition channel completely. We doubled our online sales in under 3 months, and their Slack communication has been exceptional.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    name: 'Mark R.',
    role: 'Head of Growth, SaaSify',
    rating: 5,
    text: "Their SEO and content strategy isn't just about traffic; it actually drives high-quality product signups. Our organic inbound demos have never been higher.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    name: 'David L.',
    role: 'Managing Director, Novatech Systems',
    rating: 5,
    text: 'Practical, transparent, and direct. The live Looker Studio dashboards they set up show us exactly what we are spending and what we are making in real-time.',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&h=100&q=80'
  }
];

function Reviews() {
  return (
    <section id="reviews" className="relative py-20 lg:py-28 px-4 bg-transparent border-t border-white/5">
      {/* Glow decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-brand-accent uppercase tracking-widest text-xs font-bold mb-3">Client Feedback</p>
          <h2 className="text-3xl md:text-5xl font-black text-brand-light leading-tight mb-4">
            Trusted by <span className="text-[#00F0FF]">Ambitious Brands</span>
          </h2>
          <p className="text-brand-light/60 text-sm sm:text-base">
            See what founders and marketing directors around the world say about working with Rising Star Digital.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div 
              key={idx} 
              className="bg-[#1e1133]/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-brand-accent/10 transition-all duration-300"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 text-[#00F0FF] mb-6">
                  {[...Array(rev.rating)].map((_, starIdx) => (
                    <svg key={starIdx} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-brand-light/75 italic leading-relaxed mb-8">
                  "{rev.text}"
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <Image 
                  src={rev.avatar} 
                  alt={rev.name} 
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border border-white/10 object-cover"
                />
                <div className="text-left">
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-none mb-1">{rev.name}</h4>
                  <span className="text-[10px] text-brand-light/50 font-medium">{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Reviews;
