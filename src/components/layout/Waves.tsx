import '../../styles/layout/waves.css';

export const Waves = () => {
  return (
    <div className="waves-container">
      <div className="waves-content">
        {/* Puedes añadir contenido aquí si lo necesitas */}
      </div>

      {/* Contenedor de las olas */}
      <div>
        <svg 
          className="waves" 
          xmlns="http://www.w3.org/2000/svg" 
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" 
          preserveAspectRatio="none" 
          shapeRendering="auto"
        >
          <defs>
            <path 
              id="gentle-wave" 
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" 
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="var(--wave-color-1)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="var(--wave-color-2)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="var(--wave-color-3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="var(--wave-color-4)" />
          </g>
        </svg>
      </div>
    </div>
  );
};