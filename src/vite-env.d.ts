/// <reference types="vite/client" />

declare module 'react-parallax' {
  import { ComponentType, ReactNode } from 'react';
  
  interface ParallaxProps {
    blur?: number;
    bgImage?: string;
    bgImageAlt?: string;
    strength?: number;
    renderLayer?: (percentage: number) => ReactNode;
    disabled?: boolean;
    children?: ReactNode;
    className?: string;
  }

  const Parallax: ComponentType<ParallaxProps>;
  export { Parallax };
}

interface Window {
  bootstrap: { [key: string]: unknown };
}

declare let bootstrap: { [key: string]: unknown };
