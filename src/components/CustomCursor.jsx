import React, { useState, useEffect, useRef } from 'react';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  
  const requestRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const checkDevice = () => {
      const isCoarse = window.matchMedia('(pointer: coarse)').matches;
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(isCoarse || hasTouch);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnterInteractive = () => setIsActive(true);
    const handleMouseLeaveInteractive = () => setIsActive(false);

    const handleMagneticMove = (e) => {
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.15;
      const y = (e.clientY - r.top - r.height / 2) * 0.15;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      el.style.transition = 'transform 0.08s ease-out';
    };

    const handleMagneticLeave = (e) => {
      const el = e.currentTarget;
      el.style.transform = '';
      el.style.transition = 'transform 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)';
    };

    window.addEventListener('pointermove', handleMouseMove, { passive: true });

    const updateInteractiveElements = () => {
      const selectables = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');
      selectables.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnterInteractive);
        el.addEventListener('mouseleave', handleMouseLeaveInteractive);
      });

      const magnetics = document.querySelectorAll('.magnetic');
      magnetics.forEach((el) => {
        el.addEventListener('pointermove', handleMagneticMove);
        el.addEventListener('pointerleave', handleMagneticLeave);
      });
    };

    updateInteractiveElements();

    const animateRing = () => {
      setRingPosition((prev) => {
        const dx = mouseRef.current.x - prev.x;
        const dy = mouseRef.current.y - prev.y;
        return {
          x: prev.x + dx * 0.16,
          y: prev.y + dy * 0.16
        };
      });
      requestRef.current = requestAnimationFrame(animateRing);
    };

    requestRef.current = requestAnimationFrame(animateRing);

    const observer = new MutationObserver(updateInteractiveElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('pointermove', handleMouseMove);
      cancelAnimationFrame(requestRef.current);
      observer.disconnect();
      const selectables = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');
      selectables.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive);
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive);
      });
      const magnetics = document.querySelectorAll('.magnetic');
      magnetics.forEach((el) => {
        el.removeEventListener('pointermove', handleMagneticMove);
        el.removeEventListener('pointerleave', handleMagneticLeave);
      });
    };
  }, [isMobile]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[0] w-[520px] h-[520px] rounded-full bg-pink-500/5 blur-3xl -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 pointer-events-none"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      
      <div
        className="fixed pointer-events-none z-[9999] w-1.5 h-1.5 rounded-full bg-[#ffb22c] -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      <div
        className={`fixed pointer-events-none z-[9998] border rounded-full border-[#ffb22c]/70 -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ${
          isActive 
            ? 'w-[62px] h-[62px] bg-[#ffb22c]/10 border-[#ffb22c]' 
            : 'w-9 h-9'
        }`}
        style={{
          left: `${ringPosition.x}px`,
          top: `${ringPosition.y}px`,
        }}
      />
    </>
  );
}

export default CustomCursor;
