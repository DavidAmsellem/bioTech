import { useRef, useEffect, useState } from 'react';
import '../styles/components/card.css';

interface CardProps {
  image: string;
  header: string;
  content: string;
}

export const Card = ({ image, header, content }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      setWidth(cardRef.current.offsetWidth);
      setHeight(cardRef.current.offsetHeight);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMouseX(e.clientX - rect.left - width/2);
      setMouseY(e.clientY - rect.top - height/2);
    }
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setMouseX(0);
      setMouseY(0);
    }, 1000);
  };

  const mousePX = mouseX / width;
  const mousePY = mouseY / height;
  const rX = mousePX * 30;
  const rY = mousePY * -30;
  const tX = mousePX * -40;
  const tY = mousePY * -40;

  return (
    <div 
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div 
        className="card"
        style={{
          transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
          height: '400px' // Añadido height
        }}
      >
        <div 
          className="card-bg" 
          style={{
            backgroundImage: `url(${image})`,
            transform: `translateX(${tX}px) translateY(${tY}px)`
          }}
        ></div>
        <div className="card-info">
          <h1>{header}</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};