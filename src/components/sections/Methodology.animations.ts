import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initMethodologyAnimations = () => {
  const methodologySection = document.querySelector('.methodology');
  if (!methodologySection) return;

  // Línea vertical
  const lineTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.methodology-grid',
      start: 'top center',
      end: 'bottom center',
      scrub: 1
    }
  });

  lineTimeline.fromTo('.methodology-line', 
    { 
      height: 0,
      opacity: 0 
    },
    {
      height: '100%',
      opacity: 0.4,
      duration: 1,
      ease: 'power2.out'
    }
  );

  // Flecha - Ahora se vincula con el progreso de la línea
  gsap.fromTo('.methodology-arrow', 
    { 
      opacity: 0,
      yPercent: -50 
    },
    {
      opacity: 0.6,
      yPercent: 0,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.methodology-grid',
        start: 'bottom center',
        end: 'bottom top',
        scrub: 1,
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Animar cada tarjeta
  const cards = document.querySelectorAll('.method-card');
  cards.forEach((card) => {
    gsap.set(card, { opacity: 1 });
    
    gsap.from(card, {
      y: 50,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: card,
        start: 'top bottom-=100',
        end: 'top center',
        toggleActions: 'play none none reverse'
      }
    });
  });
};