import '../../../src/styles/sections/results.css';
import { StatCard } from '../ui/StatCard';

const stats = [
  { icon: "award-fill", value: "95%", text: "Efectividad en pruebas" },
  { icon: "globe-americas", value: "50+", text: "Hectáreas tratadas" },
  { icon: "flask-fill", value: "1000+", text: "Muestras analizadas" },
  { icon: "calendar-check", value: "3", text: "Años de investigación" }
];

export const Results = () => {
  return (
    <section className="results" id="resultados">
      <div className="container py-5">
        <h2 className="text-center mb-4" data-aos="fade-down">
          <i className="bi bi-graph-up text-primary me-2 pulse-icon"></i>
          Resultados y Avances
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
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