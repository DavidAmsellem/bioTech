interface MethodCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export const MethodCard = ({ icon, title, description, delay = 0 }: MethodCardProps) => {
  return (
    <div className="card mb-3" data-aos="zoom-in" data-aos-delay={delay}>
      <div className="card-body text-center">
        <i className={`bi bi-${icon} feature-icon mb-3`}></i>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}