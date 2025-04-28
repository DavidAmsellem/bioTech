import { useEffect, useRef } from 'react';
import '../../styles/sections/horizontal-scroll.css';

const scrollSections = [
  {
    title: "Análisis Inicial",
    subtitle: "Evaluación detallada del terreno",
    icon: "bi-search",
    stats: [
      { value: "95%", label: "Precisión" },
      { value: "48h", label: "Tiempo medio" }
    ],
    features: [
      { icon: "bi-check-circle", text: "Análisis de nutrientes" },
      { icon: "bi-check-circle", text: "Medición de pH" },
      { icon: "bi-check-circle", text: "Evaluación microbiana" }
    ],
    footer: "Primera fase del proceso de recuperación"
  },
  {
    title: "Tratamiento del Suelo",
    subtitle: "Aplicación de biotecnología",
    icon: "bi-flower1",
    stats: [
      { value: "85%", label: "Efectividad" },
      { value: "3mo", label: "Duración" }
    ],
    features: [
      { icon: "bi-check-circle", text: "Bioremediación natural" },
      { icon: "bi-check-circle", text: "Control de pH" },
      { icon: "bi-check-circle", text: "Monitoreo continuo" }
    ],
    footer: "Proceso de recuperación activa"
  },
  {
    title: "Resultados",
    subtitle: "Mejora demostrable",
    icon: "bi-graph-up",
    stats: [
      { value: "90%", label: "Recuperación" },
      { value: "2x", label: "Productividad" }
    ],
    features: [
      { icon: "bi-check-circle", text: "Mayor fertilidad" },
      { icon: "bi-check-circle", text: "Mejor retención" },
      { icon: "bi-check-circle", text: "Balance óptimo" }
    ],
    footer: "Resultados verificables y sostenibles"
  },
  {
    title: "Sostenibilidad",
    subtitle: "Impacto a largo plazo",
    icon: "bi-tree",
    stats: [
      { value: "100%", label: "Natural" },
      { value: "5yr+", label: "Duración" }
    ],
    features: [
      { icon: "bi-check-circle", text: "Ecológicamente responsable" },
      { icon: "bi-check-circle", text: "Autosostenible" },
      { icon: "bi-check-circle", text: "Bajo mantenimiento" }
    ],
    footer: "Solución permanente y respetuosa con el medio ambiente"
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
        {scrollSections.map((item, index) => (
          <div key={index} className="scroll-item">
            <CardContent data={item} />
          </div>
        ))}
      </div>
    </section>
  );
};