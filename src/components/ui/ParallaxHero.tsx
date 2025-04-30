import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxHeroProps {
  children: React.ReactNode;
  backgroundImage: string;
  overlayOpacity?: number;
}

export const ParallaxHero: React.FC<ParallaxHeroProps> = ({ 
  children, 
  backgroundImage,
  overlayOpacity = 0.4 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const background = backgroundRef.current;

    if (!container || !background) return;

    gsap.to(background, {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="parallax-hero"
    >
      <div 
        ref={backgroundRef}
        className="parallax-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div 
        className="parallax-overlay"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      />
      <div className="parallax-content">
        {children}
      </div>
    </div>
  );
};