import CountUp from 'react-countup';

interface StatCardProps {
  icon: string;
  value: number;
  text: string;
  suffix?: string;
  delay?: number;
}

export const StatCard = ({ icon, value, text, suffix = '', delay = 0 }: StatCardProps) => {
  // Si el icono ya incluye el prefijo bi-, lo usamos tal cual, si no, le añadimos el prefijo
  const iconClass = icon.startsWith('bi-') ? icon : `bi-${icon}`;
  
  return (
    <div className="stat-card" data-aos="fade-up" data-aos-delay={delay}>
      <i className={`bi ${iconClass} stat-icon`}></i>
      <h3 className="mt-3">
        <CountUp
          end={value}
          duration={2.5}
          separator="."
          suffix={suffix}
          enableScrollSpy={true}
          scrollSpyOnce={true}
        />
      </h3>
      <p>{text}</p>
    </div>
  );
}