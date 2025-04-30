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
    },
    svg: {
      id: "analisis",
      element: (
        <svg viewBox="0 0 400 400" className="section-svg">
          <g className="soil-layers">
            <path className="soil-top" d="M50,200 H350 Q370,150 350,100 H50 Q30,150 50,200" fill="#8B4513"/>
            <path className="soil-middle" d="M50,300 H350 Q370,250 350,200 H50 Q30,250 50,300" fill="#654321"/>
            <path className="soil-bottom" d="M50,400 H350 Q370,350 350,300 H50 Q30,350 50,400" fill="#3E2723"/>
          </g>
          <g className="measurement-tools">
            <circle className="ph-meter" cx="150" cy="150" r="20" fill="#4CAF50"/>
            <rect className="sensor" x="250" y="120" width="40" height="60" fill="#2196F3"/>
          </g>
        </svg>
      )
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
    },
    svg: {
      id: "diagnostico",
      element: (
        <svg viewBox="0 0 400 400" className="section-svg">
          <g className="diagnostic-graph">
            <path className="graph-line" d="M50,350 Q150,200 250,250 T350,100" fill="none" stroke="#4CAF50" strokeWidth="4"/>
            <g className="data-points">
              <circle cx="50" cy="350" r="8" fill="#FFF"/>
              <circle cx="150" cy="200" r="8" fill="#FFF"/>
              <circle cx="250" cy="250" r="8" fill="#FFF"/>
              <circle cx="350" cy="100" r="8" fill="#FFF"/>
            </g>
          </g>
        </svg>
      )
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
    },
    svg: {
      id: "tratamiento",
      element: (
        <svg viewBox="0 0 400 400" className="section-svg">
          <g className="plants">
            <path className="plant-stem" d="M200,350 V250" stroke="#4CAF50" strokeWidth="4"/>
            <g className="leaves">
              <path className="leaf" d="M200,300 Q230,280 200,260" fill="none" stroke="#4CAF50" strokeWidth="4"/>
              <path className="leaf" d="M200,280 Q170,260 200,240" fill="none" stroke="#4CAF50" strokeWidth="4"/>
            </g>
          </g>
          <g className="microorganisms">
            <circle className="microbe" cx="150" cy="320" r="10" fill="#81C784"/>
            <circle className="microbe" cx="250" cy="340" r="8" fill="#81C784"/>
            <circle className="microbe" cx="200" cy="360" r="12" fill="#81C784"/>
          </g>
        </svg>
      )
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
        scrub: 3, // Aumentado de 1 a 2 para hacer más lento el scrub
        snap: 1,
        onEnter: () => gsap.to(section, {
          opacity: 1,
          scale: 1,
          duration: 2, // Aumentado de 0.5 a 1.5
          ease: "power2.inOut" // Añadido ease para suavizar
        }),
        onLeaveBack: () => gsap.to(section, {
          opacity: 1,
          scale: 0.95,
          duration: 2, // Aumentado de 1 a 1.5
          ease: "power2.inOut" // Añadido ease para suavizar
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
              {section.svg && (
                <div className="svg-container">
                  {section.svg.element}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};