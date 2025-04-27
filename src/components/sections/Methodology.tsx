import { Parallax } from 'react-parallax';
import { MethodCard } from '../ui/MethodCard';

const methodologyImage = '/images/methodology-bg.png';

const methods = [
  {
    icon: "tree-fill",
    title: "Biochar",
    description: "Tecnología de remediación basada en carbón biológico."
  },
  {
    icon: "flower1",
    title: "Fitoremediación",
    description: "Uso de plantas para la descontaminación de suelos."
  },
  {
    icon: "droplet-fill",
    title: "Microbiota",
    description: "Aprovechamiento de microorganismos beneficiosos."
  }
];

export const Methodology = () => {
  return (
    <Parallax
      blur={0}
      bgImage={methodologyImage}
      bgImageAlt="Metodología de investigación"
      strength={150}
      className="methodology-parallax"
    >
      <section className="methodology" id="metodologia">
        <div className="container py-5">
          <h2 className="text-center mb-4" data-aos="fade-down">
            <i className="bi bi-gear-fill text-primary me-2 rotate-icon"></i>
            Metodología
          </h2>
          <div className="row">
            {methods.map((method, index) => (
              <div className="col-md-4" key={index}>
                <MethodCard 
                  {...method}
                  delay={index * 200}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Parallax>
  );
};