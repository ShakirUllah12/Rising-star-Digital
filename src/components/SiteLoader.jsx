"use client";

import React, { useState, useEffect } from 'react';

function SiteLoader() {
  const [stage, setStage] = useState('logo'); // 'logo', 'welcome', 'hidden'

  useEffect(() => {
    // Check if user has already seen the intro animation in this session
    let seen = false;
    try {
      seen = sessionStorage.getItem('rsd-intro-seen') === '1';
      sessionStorage.setItem('rsd-intro-seen', '1');
    } catch (_) {}

    if (seen) {
      // Short-circuit loader if already seen
      const t = setTimeout(() => setStage('hidden'), 100);
      return () => clearTimeout(t);
    }

    // Two-stage welcome animation
    const logoTimeout = setTimeout(() => {
      setStage('welcome');
    }, 450);

    const hideTimeout = setTimeout(() => {
      setStage('hidden');
    }, 1100);

    return () => {
      clearTimeout(logoTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  if (stage === 'hidden') return null;

  return (
    <div className="fixed inset-0 z-[15000] flex flex-col items-center justify-center bg-[#160d25] text-white">
      {stage === 'logo' && (
        <div className="relative flex flex-col items-center animate-pulse">
          {/* SVG Star logo representation */}
          <div className="relative">
            <svg
              className="w-16 h-16 text-yellow-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" />
            </svg>
            <div className="absolute -inset-2 bg-yellow-400/20 blur-md rounded-full"></div>
          </div>
          <span className="mt-4 text-xs font-black tracking-widest text-brand-light uppercase">Rising Star Digital</span>
          <div className="absolute bottom-[-16px] left-0 right-0 h-[2px] bg-pink-500 overflow-hidden rounded-full">
            <div className="h-full bg-yellow-400 w-1/2 animate-shimmer"></div>
          </div>
        </div>
      )}

      {stage === 'welcome' && (
        <div className="flex flex-col items-center text-center animate-fade-in gap-1.5">
          <small className="text-[10px] text-pink-500 font-extrabold uppercase tracking-widest">Welcome to</small>
          <strong className="text-3xl sm:text-4xl font-black text-white tracking-tight">Rising Star Digital</strong>
          <b className="text-xs text-brand-light/65 uppercase tracking-[0.2em] font-semibold">Marketing Agency</b>
        </div>
      )}
    </div>
  );
}

export default SiteLoader;
