import { Parallax } from 'react-parallax';
import { TeamCard } from '../ui/TeamCard';

const teamImage = '/images/team-bg.jpg';

const teamMembers = [
  { name: "Dr. Juan Pérez", role: "Director de Investigación" },
  { name: "Dra. María García", role: "Investigadora Principal" },
  { name: "Dr. Carlos Rodríguez", role: "Analista de Datos" }
];

export const Team = () => {
  return (
    <Parallax
      blur={0}
      bgImage={teamImage}
      bgImageAlt="Equipo de investigación"
      strength={150}
      className="team-parallax"
    >
      <section className="team" id="equipo">
        <div className="container py-5">
          <h2 className="text-center mb-4" data-aos="fade-down">
            <i className="bi bi-people-fill text-primary me-2 pulse-icon"></i>
            Equipo de Investigación
          </h2>
          <div className="row">
            {teamMembers.map((member, index) => (
              <div className="col-md-4" key={index}>
                <TeamCard 
                  {...member}
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