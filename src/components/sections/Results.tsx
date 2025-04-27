import { Parallax } from 'react-parallax';
import { StatCard } from '../ui/StatCard';

const resultsImage = '/images/results-bg.jpg';

const stats = [
  { icon: "award-fill", value: "95%", text: "Efectividad en pruebas" },
  { icon: "globe-americas", value: "50+", text: "Hectáreas tratadas" },
  { icon: "flask-fill", value: "1000+", text: "Muestras analizadas" },
  { icon: "calendar-check", value: "3", text: "Años de investigación" },
  { icon: "journal-text", value: "12+", text: "Publicaciones científicas" },
  { icon: "people", value: "25+", text: "Investigadores involucrados" },
  { icon: "building", value: "8", text: "Instituciones colaboradoras" },
  { icon: "graph-up", value: "85%", text: "Reducción de contaminantes" }
];

export const Results = () => {
  return (
    <Parallax
      blur={0}
      bgImage={resultsImage}
      bgImageAlt="Resultados del proyecto"
      strength={100}
      className="results-parallax"
    >
      <section className="results" id="resultados">
        <div className="container py-5">
          <h2 className="text-center mb-4" data-aos="fade-down">
            <i className="bi bi-graph-up-arrow text-primary me-2 bounce-icon"></i>
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
    </Parallax>
  );
};