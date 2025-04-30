import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Methodology } from './components/sections/Methodology'
import { Results } from './components/sections/Results'
import { Team } from './components/sections/Team'
import { Contact } from './components/sections/Contact'
import { Analytics } from './components/analytics/Analytics'
import { ThemeProvider } from './context/ThemeContext'
import { CookieProvider } from './context/CookieContext'
import { GrowingPlant } from './components/layout/GrowingPlant'
import { HorizontalScroll } from './components/sections/HorizontalScroll'
import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { ValenTime } from './components/sections/ValenTime';
import { CardCarousel } from './components/sections/CardCarousel';
import { Waves } from './components/layout/Waves';
import { CookieBanner } from './components/ui/CookieBanner';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minLoadingTime = 2000;
    const loadStartTime = Date.now();

    window.onload = () => {
      const timeElapsed = Date.now() - loadStartTime;
      const remainingTime = Math.max(minLoadingTime - timeElapsed, 0);

      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider>
      <CookieProvider>
        <Analytics />
        <Navbar />
        <GrowingPlant />
        <main>
          <Hero />
          <Waves />
          <ValenTime />
          <About />
          <CardCarousel />
          <Methodology />
          <HorizontalScroll />
          <Results />
          <Team />
          <Contact />
        </main>
        <Footer />
        <CookieBanner />
      </CookieProvider>
    </ThemeProvider>
  );
}

export default App;
