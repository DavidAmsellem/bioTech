import { useEffect, useRef } from 'react';
import '../../styles/sections/horizontal-scroll.css';

export const HorizontalScroll = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const updateScroll = () => {
      const rect = section.getBoundingClientRect();
      
      // Check if section is in view
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        const progress = Math.abs(rect.top) / (rect.height - window.innerHeight);
        const moveX = progress * (container.scrollWidth - window.innerWidth);
        container.style.transform = `translateX(-${moveX}px)`;
        container.style.position = 'fixed';
        container.style.top = '0';
      } else if (rect.top > 0) {
        // Before scroll area
        container.style.transform = 'translateX(0)';
        container.style.position = 'absolute';
        container.style.top = '0';
      } else {
        // After scroll area
        container.style.position = 'absolute';
        container.style.top = `${rect.height - container.offsetHeight}px`;
        container.style.transform = `translateX(-${container.scrollWidth - window.innerWidth}px)`;
      }
    };

    window.addEventListener('scroll', updateScroll);
    updateScroll(); // Initial position

    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <section ref={sectionRef} className="horizontal-scroll-section">
      <div className="scroll-container" ref={containerRef}>
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="scroll-item">
            <div className="content-card">
              <h3>Sección {item}</h3>
              <p>Contenido de ejemplo para la sección {item}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};