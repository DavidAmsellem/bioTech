import '../../../src/styles/sections/results.css';
import { useState } from 'react';
import { StatCard } from '../ui/StatCard';
import { FloatingIcons } from '../layout/FloatingIcons';

interface Result {
  id: number;
  title: string;
  description: string;
  icon: string;
  detailedInfo: {
    overview: string;
    findings: string[];
  };
}

const results: Result[] = [
  {
    id: 1,
    title: "Mejora de la Fertilidad",
    description: "Incremento en la capacidad del suelo",
    icon: "bi-graph-up-arrow",
    detailedInfo: {
      overview: "Mejora sustancial en la fertilidad mediante técnicas de biorremediación",
      findings: [
        "Aumento del 45% en nutrientes",
        "Mejora del 60% en intercambio iónico"
      ]
    }
  },
  {
    id: 2,
    title: "Reducción de Contaminantes",
    description: "Disminución efectiva de elementos nocivos en el suelo",
    icon: "bi-shield-check",
    detailedInfo: {
      overview: "Implementamos técnicas avanzadas de biorremediación para eliminar contaminantes del suelo.",
      findings: [
        "Reducción del 70% en metales pesados",
        "Eliminación del 85% de compuestos orgánicos",
        "Mejora del pH del suelo en un 40%"
      ]
    }
  },
  {
    id: 3,
    title: "Biodiversidad Microbiana",
    description: "Aumento de la actividad biológica beneficial",
    icon: "bi-moisture",
    detailedInfo: {
      overview: "Potenciamos la diversidad microbiana para mejorar la salud del suelo.",
      findings: [
        "Incremento del 200% en microorganismos beneficiosos",
        "Mejora del 75% en ciclos de nutrientes",
        "Mayor resistencia a patógenos"
      ]
    }
  }
];

const stats = [
  { 
    icon: "award-fill", 
    value: 95, 
    suffix: "%", 
    text: "Efectividad en pruebas" 
  },
  { 
    icon: "globe-americas", 
    value: 50, 
    suffix: "+", 
    text: "Hectáreas tratadas" 
  },
  { 
    icon: "flask-fill", 
    value: 1000, 
    suffix: "+", 
    text: "Muestras analizadas" 
  },
  { 
    icon: "calendar-check", 
    value: 3, 
    text: "Años de investigación" 
  },
  { 
    icon: "buildings-fill", 
    value: 15, 
    text: "Centros colaboradores" 
  }
];

export const Results = () => {
  const [hoveredResult, setHoveredResult] = useState<number | null>(null);

  return (
    <section id="resultados" className="results-section position-relative">
      <FloatingIcons />
      <div className="container py-5">
        <h2 className="text-center mb-5" data-aos="fade-down">
          <i className="bi bi-graph-up text-primary me-2 pulse-icon"></i>
          Resultados y Avances
        </h2>

        {/* Tarjetas de resultados */}
        <div className="row g-4 mb-5">
          {results.map((result) => (
            <div key={result.id} className="col-md-4">
              <div 
                className={`result-card ${hoveredResult === result.id ? 'expanded' : ''}`}
                onMouseEnter={() => setHoveredResult(result.id)}
                onMouseLeave={() => setHoveredResult(null)}
              >
                <div className="result-card-content">
                  <i className={`bi ${result.icon}`}></i>
                  <h3>{result.title}</h3>
                  <p>{result.description}</p>
                </div>
                
                <div className="result-card-details">
                  <div className="details-content">
                    <p className="overview">{result.detailedInfo.overview}</p>
                    <ul>
                      {result.detailedInfo.findings.map((finding, index) => (
                        <li key={index}>{finding}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
          {stats.map((stat, index) => (
            <div className="col" key={index}>
              <StatCard 
                {...stat}
                delay={index * 100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};