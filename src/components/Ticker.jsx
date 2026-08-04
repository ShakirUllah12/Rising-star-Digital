import React from 'react';

const tickerItems = [
  'Performance Marketing',
  'SEO & Content',
  'Web Development & CRO',
  'Branding & Design',
  'Lifecycle Marketing',
  'Business Consultancy',
  'AI Video Editing',
  'Personal Branding'
];

function Ticker() {
  // Duplicate items twice to ensure seamless looping scroll
  const items = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="w-full overflow-hidden bg-[#00F0FF] border-y border-white/5 py-5 select-none relative z-10">
      <div className="flex w-max animate-ticker">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 mx-4">
            <span className="text-sm sm:text-base font-black tracking-wider text-[#030712] uppercase">
              {item}
            </span>
            <span className="text-xs text-[#A855F7] font-bold">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
