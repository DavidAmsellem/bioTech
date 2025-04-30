import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieContextType {
  preferences: CookiePreferences;
  updatePreferences: (newPreferences: Partial<CookiePreferences>) => void;
  hasConsent: boolean;
  setConsent: (consent: boolean) => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const CookieProvider = ({ children }: { children: React.ReactNode }) => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Siempre necesarias
    analytics: false,
    marketing: false,
  });

  const [hasConsent, setHasConsent] = useState<boolean>(false);

  useEffect(() => {
    // Cargar preferencias guardadas
    const savedPreferences = Cookies.get('cookiePreferences');
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
      setHasConsent(true);
    }
  }, []);

  const updatePreferences = (newPreferences: Partial<CookiePreferences>) => {
    const updatedPreferences = { ...preferences, ...newPreferences };
    setPreferences(updatedPreferences);
    Cookies.set('cookiePreferences', JSON.stringify(updatedPreferences), { expires: 365 });
    setHasConsent(true);
  };

  return (
    <CookieContext.Provider value={{ preferences, updatePreferences, hasConsent, setConsent: setHasConsent }}>
      {children}
    </CookieContext.Provider>
  );
};

export const useCookies = () => {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error('useCookies debe ser usado dentro de un CookieProvider');
  }
  return context;
};