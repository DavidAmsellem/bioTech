import { useEffect, useRef } from 'react';
import '../../styles/layout/growing-plant.css';

export const GrowingPlant = () => {
  const plantRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePlantGrowth = () => {
      if (!plantRef.current) return;
      
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const growthPercentage = (scrolled / windowHeight) * 100;
      
      plantRef.current.style.height = `${growthPercentage}%`;
      plantRef.current.style.opacity = Math.min(growthPercentage / 20, 1).toString();
    };

    window.addEventListener('scroll', updatePlantGrowth);
    updatePlantGrowth();

    return () => window.removeEventListener('scroll', updatePlantGrowth);
  }, []);

  return (
    <div className="growing-plant-container">
      <div className="growing-plant" ref={plantRef}>
        <svg className="leaf-top" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C7.03734 2 3 6.03734 3 11C3 12.8792 3.83353 13.9356 4.75006 14.75C5.41663 15.3334 6.20172 15.7223 6.92052 16.0186C7.35355 16.1981 7.76114 16.3396 8.09715 16.4393L8.55686 16.5584C8.71613 16.5909 8.87553 16.5909 9.03321 16.5588C9.1778 16.5293 9.31902 16.4866 9.45604 16.4317C9.79312 16.2933 10.1398 16.0807 10.5001 15.875C11.0501 15.5 11.8334 15.0417 12.5209 14.6875C12.8377 14.5252 13.1872 14.3635 13.5399 14.2211C13.7994 14.1121 14.0973 14 14.4167 14C17.9167 14 21.0001 11.4167 21.0001 7.91669C21.0001 4.41669 17.9167 2.00002 14.4167 2.00002L12 2Z"/>
        </svg>
        <div className="vine main-vine"></div>
        {[...Array(3)].map((_, i) => (
          <div key={`branch-${i}`} className={`branch branch-${i}`}>
            <div className="vine branch-vine"></div>
            <div className="leaves-container">
              {[...Array(3)].map((_, j) => (
                <svg 
                  key={`leaf-${i}-${j}`}
                  className={`leaf leaf-${j}`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C7.03734 2 3 6.03734 3 11C3 12.8792 3.83353 13.9356 4.75006 14.75C5.41663 15.3334 6.20172 15.7223 6.92052 16.0186C7.35355 16.1981 7.76114 16.3396 8.09715 16.4393L8.55686 16.5584C8.71613 16.5909 8.87553 16.5909 9.03321 16.5588C9.1778 16.5293 9.31902 16.4866 9.45604 16.4317C9.79312 16.2933 10.1398 16.0807 10.5001 15.875C11.0501 15.5 11.8334 15.0417 12.5209 14.6875C12.8377 14.5252 13.1872 14.3635 13.5399 14.2211C13.7994 14.1121 14.0973 14 14.4167 14C17.9167 14 21.0001 11.4167 21.0001 7.91669C21.0001 4.41669 17.9167 2.00002 14.4167 2.00002L12 2Z"/>
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};