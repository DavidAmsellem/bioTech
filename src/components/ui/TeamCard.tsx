interface TeamCardProps {
  name: string;
  role: string;
  delay?: number;
}

export const TeamCard = ({ name, role, delay = 0 }: TeamCardProps) => {
  return (
    <div className="team-card text-center" data-aos="flip-left" data-aos-delay={delay}>
      <div className="team-icon-wrapper">
        <i className="bi bi-person-circle team-icon"></i>
      </div>
      <h5 className="mt-3">{name}</h5>
      <p>{role}</p>
    </div>
  );
}