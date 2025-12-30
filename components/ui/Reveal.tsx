import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "fit-content", 
  delay = 0,
  direction = "up"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Respect user preference for reduced motion
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const getTransform = () => {
    if (isVisible || prefersReducedMotion) return 'translate(0,0)';

    // Use smaller offsets on narrow viewports for a gentler effect
    const isNarrow = typeof window !== 'undefined' && window.innerWidth < 640;
    const offset = isNarrow ? 28 : 50;

    switch(direction) {
      case "up": return `translateY(${offset}px)`;
      case "left": return `translateX(-${offset}px)`;
      case "right": return `translateX(${offset}px)`;
      default: return 'none';
    }
  };

  const cssWidth = width === '100%' ? '100%' : 'fit-content';

  return (
    <div ref={ref} style={{ width: cssWidth, position: 'relative', overflow: 'visible' }}>
      <div
        style={{
          transform: getTransform(),
          opacity: isVisible || prefersReducedMotion ? 1 : 0,
          transition: prefersReducedMotion ? 'none' : `all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
        }}
      >
        {children}
      </div>
    </div>
  );
};