import { useRef, useEffect, useState, useCallback } from 'react';
import '../../styles/sections/craft-of-ui.css';
import { FloatingIcons } from '../layout/FloatingIcons';


// Componentes visuales
const AnalysisVisual = () => (
  <div className="visual-component analysis">
    <div className="layers">
      <div className="layer layer-1"></div>
      <div className="layer layer-2"></div>
      <div className="layer layer-3"></div>
    </div>
    <div className="magnifying-glass"></div>
  </div>
);

const TreatmentVisual = () => (
  <div className="visual-component treatment">
    <div className="soil"></div>
    <div className="plants">
      <div className="plant plant-1"></div>
      <div className="plant plant-2"></div>
      <div className="plant plant-3"></div>
    </div>
    <div className="water-drops">
      <div className="drop drop-1"></div>
      <div className="drop drop-2"></div>
      <div className="drop drop-3"></div>
    </div>
  </div>
);

const MonitoringVisual = () => (
  <div className="visual-component monitoring">
    <div className="graph">
      <div className="bar bar-1"></div>
      <div className="bar bar-2"></div>
      <div className="bar bar-3"></div>
    </div>
    <div className="data-points">
      <div className="point point-1"></div>
      <div className="point point-2"></div>
      <div className="point point-3"></div>
    </div>
  </div>
);

const ResultsVisual = () => (
  <div className="visual-component results">
    <div className="healthy-soil"></div>
    <div className="tree">
      <div className="leaves"></div>
    </div>
    <div className="stats">
      <div className="stat stat-1"></div>
      <div className="stat stat-2"></div>
    </div>
  </div>
);

export const CardCarousel = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout>();
  const autoPlayInterval = 3000; // 3 segundos entre cada cambio

  // Función para activar una tarjeta
  const activateCard = useCallback((index: number) => {
    if (!listRef.current) return;
    
    const items = listRef.current.querySelectorAll('li');
    const cols = new Array(items.length)
      .fill('')
      .map((_, i) => {
        items[i].dataset.active = (index === i).toString();
        return index === i ? '10fr' : '1fr';
      })
      .join(' ');
    
    listRef.current.style.setProperty('grid-template-columns', cols);
    setActiveIndex(index);
  }, []);

  // Función para el autoplay
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    autoPlayRef.current = setInterval(() => {
      if (!listRef.current) return;
      const items = listRef.current.querySelectorAll('li');
      const nextIndex = (activeIndex + 1) % items.length;
      activateCard(nextIndex);
    }, autoPlayInterval);
  }, [activeIndex, activateCard]);

  // Iniciar autoplay al montar el componente
  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [startAutoPlay]);

  // Efecto para establecer la tarjeta inicial
  useEffect(() => {
    if (!listRef.current) return;
    
    const items = listRef.current.querySelectorAll('li');
    const cols = new Array(items.length)
      .fill('')
      .map((_, i) => i === 0 ? '10fr' : '1fr')
      .join(' ');
    
    listRef.current.style.setProperty('grid-template-columns', cols);
    items[0].dataset.active = 'true';
  }, []); // Se ejecuta solo al montar

  // Modificar el handleInteraction para pausar el autoplay al interactuar
  const handleInteraction = (event: React.MouseEvent | React.FocusEvent) => {
    const target = event.target as HTMLElement;
    const closest = target.closest('li');
    if (!listRef.current || !closest) return;

    // Limpiar el intervalo actual
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    const items = listRef.current.querySelectorAll('li');
    const index = Array.from(items).indexOf(closest);
    activateCard(index);

    // Reiniciar el autoplay después de un tiempo
    setTimeout(startAutoPlay, autoPlayInterval * 2);
  };

  const items = [
    {
      title: "Análisis del Suelo",
      description: "Evaluación precisa del estado actual utilizando tecnología avanzada para determinar las condiciones del terreno.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M6 3h12l4 6-10 13L2 9Z" />
          <path d="M11 3 8 9l4 13 4-13-3-6" />
          <path d="M2 9h20" />
        </svg>
      ),
      visual: <AnalysisVisual />
    },
    {
      title: "Tratamiento",
      description: "Aplicación de soluciones biotecnológicas para la regeneración efectiva de suelos contaminados.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M7 3v18" />
          <path d="M3 7.5h4" />
          <path d="M3 12h18" />
          <path d="M3 16.5h4" />
        </svg>
      ),
      visual: <TreatmentVisual />
    },
    {
      title: "Monitoreo",
      description: "Seguimiento continuo del proceso de recuperación mediante sensores y análisis periódicos.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      ),
      visual: <MonitoringVisual />
    },
    {
      title: "Resultados",
      description: "Verificación y documentación de la mejora en la calidad y productividad del suelo.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 17V5a2 2 0 0 0-2-2H4" />
          <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
        </svg>
      ),
      visual: <ResultsVisual />
    }
  ];

  return (
    <div className="craft-container">
       <FloatingIcons />
      <h1 className="headline">Proceso de Regeneración</h1>
      <p className="lead">
        Descubre cómo transformamos suelos degradados en ecosistemas productivos 
        mediante biotecnología avanzada y métodos sostenibles.
      </p>
      <ul 
        className="card-grid"
        ref={listRef}
        onClick={handleInteraction}
        onFocus={handleInteraction}
        onMouseEnter={() => {
          if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
          }
        }}
        onMouseLeave={startAutoPlay}
      >
        {items.map((item, index) => (
          <li 
            key={index} 
            data-active={index === 0} // Establecemos la primera como activa
            style={{
              // Aplicamos el estilo inicial
              flex: index === 0 ? '10' : '1'
            }}
          >
            <article className="card">
              <div className="card-visual">
                {item.visual}
              </div>
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <div className="card-copy">
                  <div className="icon">{item.icon}</div>
                  <p>{item.description}</p>
                </div>
                <a href="#" className="card-link">
                  <span>Ver más</span>
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};
