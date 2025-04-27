import { useEffect } from 'react';

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
}

type GTagArguments = [
  command: 'js' | 'config' | 'event',
  targetId: Date | string,
  config?: {
    page_path?: string;
    send_to?: string;
  } | GTagEvent
];

declare global {
  interface Window {
    dataLayer: Array<{ 'gtag.args': GTagArguments }>;
    gtag: (...args: GTagArguments) => void;
  }
}

export const Analytics = () => {
  useEffect(() => {
    // Inicializar dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(...args: GTagArguments) { 
      window.dataLayer.push({ 'gtag.args': args }); 
    }

    // Configurar el script de Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Inicializar Google Analytics
    window.gtag('js', new Date());
    window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });

    // Configurar el seguimiento de eventos personalizados
    const trackScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      if (scrollPercent % 25 === 0) {
        window.gtag('event', 'scroll_depth', {
          category: 'Engagement',
          action: 'scroll',
          label: `${scrollPercent}%`,
          value: scrollPercent
        });
      }
    };

    const trackClicks = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        window.gtag('event', 'click', {
          category: 'User Interaction',
          action: 'click',
          label: `${target.tagName.toLowerCase()} - ${target.textContent || 'no text'}`,
          value: 1
        });
      }
    };

    // Añadir event listeners
    window.addEventListener('scroll', trackScroll);
    document.addEventListener('click', trackClicks);

    // Limpiar event listeners
    return () => {
      window.removeEventListener('scroll', trackScroll);
      document.removeEventListener('click', trackClicks);
    };
  }, []);

  return null;
};