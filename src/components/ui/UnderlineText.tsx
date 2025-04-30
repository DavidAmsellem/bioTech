import { useEffect, useRef } from 'react';

interface UnderlineTextProps {
  children: React.ReactNode;
  threshold?: number;
}

export const UnderlineText = ({ children, threshold = 0.1 }: UnderlineTextProps) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      },
      {
        threshold: threshold
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [threshold]);

  return (
    <span ref={textRef} className="underline-on-scroll">
      {children}
    </span>
  );
};