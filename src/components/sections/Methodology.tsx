import { useEffect } from 'react';
import { initMethodologyAnimations } from './Methodology.animations';
import '../../../src/styles/sections/methodology.css';

const steps = [
  {
    title: "Análisis del Suelo",
    description: "Evaluación detallada del estado actual del suelo y sus contaminantes.",
    icon: "search",
    color: "var(--primary-color)"
  },
  {
    title: "Aplicación de Biochar",
    description: "Incorporación de carbón biológico para mejorar la estructura del suelo.",
    icon: "tree-fill",
    color: "var(--secondary-color)"
  },
  {
    title: "Fitorremediación",
    description: "Uso estratégico de plantas para extraer o degradar contaminantes.",
    icon: "flower1",
    color: "var(--accent-color)"
  },
  {
    title: "Monitoreo Microbiano",
    description: "Seguimiento de la actividad de microorganismos beneficiosos.",
    icon: "droplet-fill",
    color: "var(--primary-dark)"
  }
];

export const Methodology = () => {
  useEffect(() => {
    initMethodologyAnimations();
  }, []);

  return (
    <section className="methodology" id="metodologia">
      <div className="container-fluid px-4">
        <h2 className="text-center mb-4">
          <i className="bi bi-diagram-3 me-2"></i>
          Nuestra Metodología
        </h2>
        <div className="methodology-grid">
          <div className="methodology-line"></div>
          <div className="methodology-arrow"></div>
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="method-card"
            >
              <div className="text-center">
                <div className="step-icon" style={{ color: step.color }}>
                  <i className={`bi bi-${step.icon}`}></i>
                </div>
                <h5>{step.title}</h5>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};