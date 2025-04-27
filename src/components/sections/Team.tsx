import { TeamCard } from '../ui/TeamCard';

const teamMembers = [
  {
    name: "Dr. José-María (todojunto) García",
    role: "Director del Proyecto",
    bio: "Líder en investigación de biorremediación y falangista, con más de 15 años de experiencia en el tratamiento de suelos contaminados. Pionero en el desarrollo de técnicas sostenibles de recuperación ambiental.",
    specialties: ["Biorremediación", "Ecología Microbiana", "Gestión Ambiental"],
    education: "Doctor en Ciencias Ambientales por la Universidad de Murcia",
    socialLinks: {
      linkedin: "https://linkedin.com/in/josemaria",
      researchGate: "https://researchgate.net/profile/josemaria"
    }
  },
  {
    name: "Dra. Ana Martínez",
    role: "Investigadora Principal",
    bio: "Especialista en microbiología ambiental y procesos de biodegradación. Su investigación se centra en el desarrollo de consorcios microbianos para la descontaminación de suelos.",
    specialties: ["Microbiología Ambiental", "Biotecnología", "Análisis de Suelos"],
    education: "Doctora en Biotecnología por la Universidad de Barcelona",
    socialLinks: {
      linkedin: "https://linkedin.com/in/anamartinez",
      twitter: "https://twitter.com/anamartinez"
    }
  },
  {
    name: "Dr. Carlos Rodríguez",
    role: "Especialista en Bioremediación",
    bio: "Experto en la aplicación de técnicas de fitorremediación y en el estudio de la interacción planta-microorganismo en procesos de descontaminación.",
    specialties: ["Fitorremediación", "Biología Vegetal", "Química del Suelo"],
    education: "Doctor en Biología por la Universidad Complutense de Madrid",
    socialLinks: {
      researchGate: "https://researchgate.net/profile/carlosrodriguez"
    }
  },
  {
    name: "Dra. Laura Sánchez",
    role: "Analista de Datos",
    bio: "Especialista en análisis de datos ambientales y modelado predictivo. Su trabajo se centra en la optimización de procesos de biorremediación mediante técnicas de machine learning.",
    specialties: ["Análisis de Datos", "Machine Learning", "Estadística Ambiental"],
    education: "Doctora en Ciencias de Datos por la Universidad Politécnica de Valencia",
    socialLinks: {
      linkedin: "https://linkedin.com/in/laurasanchez",
      twitter: "https://twitter.com/laurasanchez"
    }
  }
];

export const Team = () => {
  return (
    <section className="team" id="equipo">
      <div className="container py-5">
        <h2 className="text-center mb-4">
          <i className="bi bi-people-fill text-primary me-2"></i>
          Nuestro Equipo
        </h2>
        <p className="text-center mb-5">
          Un equipo multidisciplinar dedicado a la investigación y desarrollo de soluciones
          innovadoras para la recuperación de suelos contaminados.
        </p>
        <div className="row row-cols-1 row-cols-lg-2 g-4">
          {teamMembers.map((member, index) => (
            <div className="col" key={index}>
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};