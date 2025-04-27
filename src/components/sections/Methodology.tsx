import { MethodCard } from '../ui/MethodCard';

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
    <section className="methodology" id="metodologia">
      <div className="container py-5">
        <h2 className="text-center mb-4" data-aos="fade-down">
          <i className="bi bi-gear-fill text-primary me-2 rotate-icon"></i>
          Metodología
        </h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {methods.map((method, index) => (
            <div className="col" key={index}>
              <MethodCard 
                {...method}
                delay={index * 200}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};