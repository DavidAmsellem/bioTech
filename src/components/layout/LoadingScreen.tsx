import { useEffect, useState } from 'react';
import '../../styles/layout/loading-screen.css';

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-brand">
          <h1 className="brand-text">Bio<span>Tech</span></h1>
        </div>
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-dots">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="dot"></div>
            ))}
          </div>
        </div>
        <div className="loading-info">
          <p className="loading-message">Preparando soluciones biotecnológicas</p>
          <p className="loading-percentage">{progress}%</p>
        </div>
      </div>
    </div>
  );
};