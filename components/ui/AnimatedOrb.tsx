import React from 'react';

// A lightweight animated gradient orb component. It's decorative (aria-hidden).
// The component renders SVG circles with subtle motion; it's responsive and will scale down on small screens.

const AnimatedOrb: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div aria-hidden className={className}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="g1" cx="50%" cy="40%">
            <stop offset="0%" stopColor="#B3AFE8" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.15" />
          </radialGradient>
          <filter id="f1" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="12" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#f1)">
          <circle cx="100" cy="100" r="80" fill="url(#g1)" className="orb-core" />
        </g>

        {/* subtle moving highlights */}
        <g className="orb-highlights" opacity="0.6">
          <circle cx="60" cy="50" r="24" fill="#FFFFFF" opacity="0.06" className="orb-h1" />
          <circle cx="150" cy="140" r="16" fill="#FFFFFF" opacity="0.04" className="orb-h2" />
        </g>

      </svg>

      <style>{`
        .orb-core { transform-origin: 50% 50%; animation: orb-rotate 12s linear infinite; }
        .orb-h1 { transform-origin: 60px 50px; animation: orb-move-1 8s ease-in-out infinite; }
        .orb-h2 { transform-origin: 150px 140px; animation: orb-move-2 10s ease-in-out infinite; }

        @keyframes orb-rotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(45deg) scale(1.02); }
          100% { transform: rotate(0deg) scale(1); }
        }

        @keyframes orb-move-1 {
          0% { transform: translateY(0px); opacity: 0.7 }
          50% { transform: translateY(-8px); opacity: 0.35 }
          100% { transform: translateY(0px); opacity: 0.7 }
        }

        @keyframes orb-move-2 {
          0% { transform: translateX(0px); opacity: 0.6 }
          50% { transform: translateX(6px); opacity: 0.25 }
          100% { transform: translateX(0px); opacity: 0.6 }
        }

        /* Responsive sizing to ensure it remains light on mobile */
        @media (max-width: 768px) {
          .orb-core { filter: blur(10px); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedOrb;

