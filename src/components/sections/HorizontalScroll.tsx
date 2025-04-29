import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../styles/sections/horizontal-scroll.css';
import { FloatingIcons } from '../layout/FloatingIcons';

gsap.registerPlugin(ScrollTrigger);

const scrollSections = [
  {
    title: "Análisis Inicial",
    subtitle: "Evaluación del terreno",
    icon: "bi-search",
    stats: [
      { value: "95%", label: "Precisión" },
      { value: "48h", label: "Tiempo" }
    ],
    features: [
      { icon: "bi-check-circle", text: "Análisis completo" },
      { icon: "bi-check-circle", text: "Evaluación precisa" }
    ],
    footer: "Primera fase del proceso"
  },
  {
    title: "Diagnóstico",
    subtitle: "Identificación de problemas",
    icon: "bi-clipboard-data",
    stats: [
      { value: "99%", label: "Fiabilidad" },
      { value: "24h", label: "Resultados" }
    ],
    features: [
      { icon: "bi-check-circle", text: "Análisis detallado" },
      { icon: "bi-check-circle", text: "Informe completo" }
    ],
    footer: "Diagnóstico preciso"
  },
  {
    title: "Tratamiento",
    subtitle: "Aplicación biotecnológica",
    icon: "bi-flower1",
    stats: [
      { value: "85%", label: "Efectividad" },
      { value: "3mo", label: "Duración" }
    ],
    features: [
      { icon: "bi-check-circle", text: "Bioremediación" },
      { icon: "bi-check-circle", text: "Monitoreo" }
    ],
    footer: "Proceso activo"
  },
  {
    title: "Resultados",
    subtitle: "Mejoras demostrables",
    icon: "bi-graph-up",
    stats: [
      { value: "90%", label: "Recuperación" },
      { value: "2x", label: "Rendimiento" }
    ],
    features: [
      { icon: "bi-check-circle", text: "Mayor fertilidad" },
      { icon: "bi-check-circle", text: "Mejor balance" }
    ],
    footer: "Resultados verificables"
  },
  {
    title: "Sostenibilidad",
    subtitle: "Impacto duradero",
    icon: "bi-tree",
    stats: [
      { value: "100%", label: "Natural" },
      { value: "5yr+", label: "Duración" }
    ],
    features: [
      { icon: "bi-check-circle", text: "Eco-friendly" },
      { icon: "bi-check-circle", text: "Autosostenible" }
    ],
    footer: "Solución permanente"
  }
];

interface CardData {
  title: string;
  subtitle: string;
  icon: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
  features: Array<{
    icon: string;
    text: string;
  }>;
  footer: string;
}

const CardContent = ({ data }: { data: CardData }) => (
  <div className="content-card">
    <div className="content-card-header">
      <i className={`bi ${data.icon} content-card-icon`}></i>
      <h3>{data.title}</h3>
      <p className="content-card-subtitle">{data.subtitle}</p>
    </div>

    <div className="content-card-body">
      <div className="content-card-stats">
        {data.stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="content-card-features">
        {data.features.map((feature, index) => (
          <div key={index} className="feature-item">
            <i className={`bi ${feature.icon} feature-icon`}></i>
            <span className="feature-text">{feature.text}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="content-card-footer">
      <p>{data.footer}</p>
    </div>
  </div>
);

export const HorizontalScroll = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    
    if (!section || !container) return;

    // Calcular el padding necesario para centrar primera y última card
    const paddingOffset = window.innerWidth / 2 - (container.children[0] as HTMLElement).offsetWidth / 2;

    // Aplicar padding al contenedor
    container.style.paddingLeft = `${paddingOffset}px`;
    container.style.paddingRight = `${paddingOffset}px`;

    gsap.to(container, {
      x: () => -(container.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        anticipatePin: 1,
        start: "top top",
        end: () => `+=${container.scrollWidth - window.innerWidth}`,
        scrub: 1.5,
        invalidateOnRefresh: true,
        snap: {
          snapTo: 1/(scrollSections.length-1),
          duration: {min: 0.2, max: 0.6},
          ease: "power1.inOut"
        },
        // Actualizar padding en resize
        onRefresh: ({ progress }) => {
          const newPadding = window.innerWidth / 2 - (container.children[0] as HTMLElement).offsetWidth / 2;
          container.style.paddingLeft = `${newPadding}px`;
          container.style.paddingRight = `${newPadding}px`;
          // Mantener la posición relativa del scroll
          gsap.set(container, {
            x: -((container.scrollWidth - window.innerWidth) * progress)
          });
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="horizontal-scroll-section">
    <FloatingIcons />
      <div className="scroll-container" ref={containerRef}>
        {scrollSections.map((item, index) => (
          <div key={index} className="scroll-item">
            <CardContent data={item} />
          </div>
        ))}
      </div>
      <svg 
        className="scroll-end-arrow" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M12 22L12 2M12 22L6 16M12 22L18 16" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </section>
  );
};