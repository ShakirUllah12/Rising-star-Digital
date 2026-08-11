"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

function Hero() {
  const [hoverOffset, setHoverOffset] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Interactive HTML5 Canvas node network simulation background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    let mouse = { x: null, y: null, radius: 150 };

    const resize = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Dynamic density scaling
    const density = Math.min(80, Math.floor((canvas.width * canvas.height) / 16000));
    particles = [];
    for (let i = 0; i < density; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1
      });
    }

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const parent = canvas.parentElement;
    parent.addEventListener('pointermove', handlePointerMove, { passive: true });
    parent.addEventListener('pointerleave', handlePointerLeave);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;

        // Attract nodes toward mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p1.x;
          const dy = mouse.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            p1.x += (dx / dist) * force * 0.6;
            p1.y += (dy / dist) * force * 0.6;
          }
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(243, 186, 47, 0.38)';
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 95) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(124, 92, 252, ${0.16 * (1 - dist / 95)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      parent.removeEventListener('pointermove', handlePointerMove);
      parent.removeEventListener('pointerleave', handlePointerLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // 3D Parallax hover tracking
  const handleMouseMoveParallax = (e) => {
    if (!containerRef.current) return;
    const bounds = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - bounds.left) / bounds.width - 0.5;
    const y = (e.clientY - bounds.top) / bounds.height - 0.5;
    setHoverOffset({ x: x * 26, y: y * 26 });
  };

  const handleMouseLeaveParallax = () => {
    setHoverOffset({ x: 0, y: 0 });
  };

  return (
    <section id="top" className="relative overflow-hidden py-16 lg:py-24 px-4 bg-grid-pattern min-h-screen flex items-center justify-center z-10">
      {/* Interactive canvas background nodes */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* Left Column: Hero Copy & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start text-left select-none">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-light/90 mb-6 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            AI-powered strategy - Global execution
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#00F0FF] leading-[1.02] mb-6 tracking-tight animate-text-reveal">
            Smarter Digital Marketing.<br />
            <span className="text-white">Real Results.</span>
          </h1>

          {/* Subheading */}
          <p className="text-brand-light/80 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
            We help ambitious brands scale globally with data-driven digital marketing that delivers measurable ROI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-6 mb-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#00F0FF] hover:bg-[#00e5ff] text-[#030712] font-bold px-7 py-3.5 rounded-full shadow-lg shadow-[#00F0FF]/20 hover:scale-105 transition-all duration-300 magnetic"
            >
              Get Your Free Audit
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-white font-semibold text-sm hover:underline decoration-[#7C5CFC] decoration-2 transition-all group"
            >
              Explore services
              <svg className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </a>
          </div>

          {/* Reviews / Social Proof */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <Image
                className="w-10 h-10 rounded-full border-2 border-[#120921] object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
                alt="Client avatar"
                width={40}
                height={40}
              />
              <Image
                className="w-10 h-10 rounded-full border-2 border-[#120921] object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
                alt="Client avatar"
                width={40}
                height={40}
              />
              <Image
                className="w-10 h-10 rounded-full border-2 border-[#120921] object-cover"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&h=100&q=80"
                alt="Client avatar"
                width={40}
                height={40}
              />
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#120921] bg-orange-500 text-white text-xs font-bold">
                +
              </div>
            </div>

            <div className="flex flex-col text-xs sm:text-sm">
              <span className="font-extrabold text-white">4.9/5 from 500+ reviews</span>
              <span className="text-brand-light/60 text-xs">Trusted across 30+ countries</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Dashboard Mockup with 3D Parallax */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMoveParallax}
          onMouseLeave={handleMouseLeaveParallax}
          className="lg:col-span-5 w-full flex flex-col gap-4 relative min-h-[580px] justify-center select-none"
          style={{ perspective: '1200px' }}
        >
          {/* Main Performance Card */}
          <div 
            className="w-full bg-[#1e1133]/65 backdrop-blur-lg border border-white/12 rounded-3xl p-6 shadow-2xl relative overflow-hidden transition-transform duration-300 ease-out z-20"
            style={{
              transform: `rotateY(-8deg) rotateX(2deg) translate3d(${hoverOffset.x * 0.85}px, ${hoverOffset.y * 0.85}px, 0)`
            }}
          >
            {/* Header info */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-brand-light/50">Growth Cockpit</span>
                <h3 className="text-lg font-black text-white mt-0.5">Live performance</h3>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                LIVE
              </span>
            </div>

            {/* Growth Stat & Chart */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black text-[#00F0FF] tracking-tight">+247%</span>
                <span className="text-xs text-brand-light/50 font-semibold">ROI growth</span>
              </div>

              {/* Glowing SVG Area Chart */}
              <div className="w-full h-32 mt-4 relative">
                <svg className="w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  
                  <line x1="0" y1="30" x2="300" y2="30" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="0" y1="60" x2="300" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="0" y1="90" x2="300" y2="90" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  
                  <path
                    d="M 0 100 Q 40 85 80 90 T 160 55 T 240 45 T 300 15 L 300 120 L 0 120 Z"
                    fill="url(#chartGradient)"
                  />
                  
                  <path
                    d="M 0 100 Q 40 85 80 90 T 160 55 T 240 45 T 300 15"
                    fill="none"
                    stroke="#00F0FF"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  <circle cx="300" cy="15" r="4" fill="#00F0FF" />
                  <circle cx="300" cy="15" r="8" fill="#00F0FF" className="animate-ping opacity-75" />
                </svg>
              </div>
            </div>

            {/* Performance bars */}
            <div className="space-y-3.5 text-left">
              <div>
                <div className="flex justify-between text-xs font-extrabold mb-1">
                  <span className="text-white/80">Google Ads</span>
                  <span className="text-[#00F0FF]">88%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#00F0FF] rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-extrabold mb-1">
                  <span className="text-white/80">Meta Ads</span>
                  <span className="text-[#00F0FF]">74%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#00F0FF] rounded-full" style={{ width: '74%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-extrabold mb-1">
                  <span className="text-white/80">SEO</span>
                  <span className="text-[#00F0FF]">95%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#00F0FF] rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Sub Row: Revenue and ROAS Card (Floated closer with higher depth) */}
          <div className="grid grid-cols-2 gap-4">
            {/* Revenue card */}
            <div 
              className="bg-[#1e1133]/70 backdrop-blur-lg border border-white/12 rounded-2xl p-4 shadow-xl text-left transition-transform duration-300 ease-out z-30"
              style={{
                transform: `translate3d(${hoverOffset.x * 1.3}px, ${hoverOffset.y * 1.3}px, 0)`
              }}
            >
              <span className="text-[9px] uppercase tracking-wider font-extrabold text-brand-light/50">Revenue</span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-lg font-black text-white">$48,290</span>
                <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                  +32%
                </span>
              </div>
            </div>

            {/* ROAS card */}
            <div 
              className="bg-[#1e1133]/70 backdrop-blur-lg border border-white/12 rounded-2xl p-4 shadow-xl text-left transition-transform duration-300 ease-out z-10"
              style={{
                transform: `translate3d(${hoverOffset.x * 0.55}px, ${hoverOffset.y * 0.55}px, 0)`
              }}
            >
              <span className="text-[9px] uppercase tracking-wider font-extrabold text-brand-light/50">ROAS</span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-lg font-black text-white">4.7x</span>
                <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                  +11%
                </span>
              </div>
            </div>
          </div>

          {/* Rotating SVG Orbit Badge (Floated behind but distinct) */}
          <div 
            className="absolute left-[-28px] bottom-[-28px] w-32 h-32 rounded-full border border-cyan-400/10 bg-[#0B0F19]/50 backdrop-blur-md shadow-2xl z-30 pointer-events-none transition-transform duration-300 ease-out flex items-center justify-center"
            style={{
              transform: `translate3d(${hoverOffset.x * 1.05}px, ${hoverOffset.y * 1.05}px, 0)`
            }}
          >
            <svg className="w-full h-full animate-slow-spin" viewBox="0 0 120 120">
              <defs>
                <path id="badgeCircle" d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" />
              </defs>
              <text className="text-[7.5px] fill-[#00F0FF] uppercase tracking-widest font-black select-none">
                <textPath href="#badgeCircle" startOffset="0%">
                  RISING STAR DIGITAL • MARKETING AGENCY • 
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-4 h-4 text-[#00F0FF]" fill="currentColor" viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;