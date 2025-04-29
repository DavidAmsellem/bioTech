import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../styles/sections/valenTime.css';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "Análisis Inicial",
    subtitle: "Evaluación Detallada",
    text: "Realizamos un análisis exhaustivo del terreno utilizando tecnología avanzada y métodos biotecnológicos para determinar el estado actual del suelo.",
    color: "#1a2b3c",
    image: "/images/analisis-suelo.jpg",
    details: [
      "Análisis de pH y nutrientes",
      "Evaluación de microorganismos",
      "Estudio de la estructura del suelo"
    ],
    stats: {
      precision: "99%",
      tiempo: "48h"
    }
  },
  {
    title: "Diagnóstico Técnico",
    subtitle: "Identificación de Problemas",
    text: "Interpretamos los resultados para identificar las áreas que necesitan intervención y desarrollamos un plan de acción personalizado.",
    color: "#2c3e50",
    image: "/images/diagnostico-biotec.jpg",
    details: [
      "Mapeo de áreas críticas",
      "Evaluación de riesgos",
      "Plan de intervención"
    ],
    stats: {
      precision: "95%",
      efectividad: "90%"
    }
  },
  {
    title: "Tratamiento Biotecnológico",
    subtitle: "Soluciones Naturales",
    text: "Aplicamos tratamientos específicos utilizando microorganismos y compuestos naturales para regenerar el suelo.",
    color: "#34495e",
    image: "/images/tratamiento-bio.jpg",
    details: [
      "Bioremediación natural",
      "Control biológico",
      "Regeneración del suelo"
    ],
    stats: {
      efectividad: "85%",
      duracion: "3-6 meses"
    }
  }
];

export const ValenTime = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = gsap.utils.toArray('.valentime-section');

    sections.forEach((section: any, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        pin: true,
        pinSpacing: false,
        scrub: 1,
        snap: 1,
        onEnter: () => gsap.to(section, {
          opacity: 1,
          scale: 1,
          duration: 0.5
        }),
        onLeaveBack: () => gsap.to(section, {
          opacity: 0.5,
          scale: 0.95,
          duration: 1,
        })
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="valentime-container" ref={containerRef}>
      {sections.map((section, index) => (
        <div 
          key={index}
          ref={el => sectionRefs.current[index] = el as HTMLDivElement}
          className="valentime-section"
          style={{ backgroundColor: section.color }}
        >
          <div className="valentime-content">
            <div className="content-left">
              <h2>{section.title}</h2>
              <h3>{section.subtitle}</h3>
              <p className="main-text">{section.text}</p>
              <div className="details-list">
                {section.details.map((detail, i) => (
                  <div key={i} className="detail-item">
                    <i className="bi bi-check-circle"></i>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
              <div className="stats-container">
                {Object.entries(section.stats).map(([key, value]) => (
                  <div key={key} className="stat-box">
                    <span className="stat-value">{value}</span>
                    <span className="stat-label">{key}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="content-right">
              <div className="image-container">
                <img src={section.image} alt={section.title} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};