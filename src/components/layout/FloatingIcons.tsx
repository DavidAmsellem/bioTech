import { useEffect, useRef } from 'react';
import '../../styles/layout/floating-icons.css';

const icons = [
  { icon: 'bi-droplet-fill', color: 'var(--secondary-light)', size: 1 },
  { icon: 'bi-droplet-fill', color: 'var(--secondary-color)', size: 1.2 },
  { icon: 'bi-droplet-half', color: 'var(--secondary-dark)', size: 0.8 },
  { icon: 'bi-leaf-fill', color: 'var(--primary-light)', size: 1 },
  { icon: 'bi-leaf-fill', color: 'var(--primary-color)', size: 1.2 },
  { icon: 'bi-leaf', color: 'var(--primary-dark)', size: 0.8 }
];

export const FloatingIcons = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createIcon = () => {
      const iconData = icons[Math.floor(Math.random() * icons.length)];
      const icon = document.createElement('i');
      
      icon.className = `bi ${iconData.icon} floating-icon`;
      icon.style.left = Math.random() * 100 + '%';
      icon.style.color = iconData.color;
      icon.style.animationDuration = (Math.random() * 8 + 6) + 's';
      icon.style.fontSize = (iconData.size * (Math.random() * 0.5 + 0.8)) + 'rem';
      icon.style.opacity = '0';
      
      container.appendChild(icon);

      // Forzar reflow para asegurar que la animación se inicie
      icon.offsetHeight;
      icon.style.opacity = '0.8';

      setTimeout(() => {
        icon.remove();
      }, 14000);
    };

    // Crear iconos iniciales
    for (let i = 0; i < 10; i++) {
      setTimeout(() => createIcon(), i * 200);
    }

    // Continuar creando iconos periódicamente
    const interval = setInterval(createIcon, 1000);

    return () => {
      clearInterval(interval);
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="floating-icons-container" />;
};