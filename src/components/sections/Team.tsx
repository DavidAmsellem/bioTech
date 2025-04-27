import { TeamCard } from '../ui/TeamCard';

const teamMembers = [
  {
    name: "Dr. José María García",
    role: "Director del Proyecto"
  },
  {
    name: "Dra. Ana Martínez",
    role: "Investigadora Principal"
  },
  {
    name: "Dr. Carlos Rodríguez",
    role: "Especialista en Bioremediación"
  },
  {
    name: "Dra. Laura Sánchez",
    role: "Analista de Datos"
  }
];

export const Team = () => {
  return (
    <section className="team" id="equipo">
      <div className="container py-5">
        <h2 className="text-center mb-4" data-aos="fade-down">
          <i className="bi bi-people-fill text-primary me-2 bounce-icon"></i>
          Nuestro Equipo
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {teamMembers.map((member, index) => (
            <div className="col" key={index}>
              <TeamCard 
                {...member}
                delay={index * 200}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};