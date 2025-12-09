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
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (!isVisible) {
      switch(direction) {
        case "up": return "translateY(50px)";
        case "left": return "translateX(-50px)";
        case "right": return "translateX(50px)";
        default: return "none";
      }
    }
    return "translate(0,0)";
  };

  return (
    <div ref={ref} style={{ width, position: 'relative', overflow: 'visible' }}>
      <div
        style={{
          transform: getTransform(),
          opacity: isVisible ? 1 : 0,
          transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
        }}
      >
        {children}
      </div>
    </div>
  );
};