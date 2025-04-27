interface StatCardProps {
  icon: string;
  value: string;
  text: string;
  delay?: number;
}

export const StatCard = ({ icon, value, text, delay = 0 }: StatCardProps) => {
  return (
    <div className="stat-card" data-aos="fade-up" data-aos-delay={delay}>
      <i className={`bi bi-${icon} stat-icon`}></i>
      <h3 className="mt-3">{value}</h3>
      <p>{text}</p>
    </div>
  );
}