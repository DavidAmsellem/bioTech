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
        return prev + 2; // Increment by 2 instead of 1 for faster progress
      });
    }, 15); // Reduced from 20ms to 15ms

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="tree-container">
          <div className="trunk" style={{ height: `${progress}%` }}>
            <div className="branches" style={{ opacity: progress > 20 ? 1 : 0 }}> {/* Show branches earlier */}
              <div className="branch branch-left"></div>
              <div className="branch branch-right"></div>
            </div>
            <div className="branches top" style={{ opacity: progress > 40 ? 1 : 0 }}> {/* Show top branches earlier */}
              <div className="branch branch-left"></div>
              <div className="branch branch-right"></div>
            </div>
          </div>
          {/* Moved leaves outside of trunk */}
          <div className="leaves-container" style={{ opacity: progress > 60 ? 1 : 0 }}>
            <div className="leaf leaf-1"></div>
            <div className="leaf leaf-2"></div>
            <div className="leaf leaf-3"></div>
            <div className="leaf leaf-4"></div>
          </div>
          <div className="soil"></div>
        </div>
        <p className="loading-text">Cargando... {progress}%</p>
      </div>
    </div>
  );
};