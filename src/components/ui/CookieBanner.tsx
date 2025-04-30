import { useState } from 'react';
import { useCookies } from '../../context/CookieContext';
import '../../styles/ui/cookie-banner.css';

export const CookieBanner = () => {
  const { preferences, updatePreferences, hasConsent } = useCookies();
  const [showDetails, setShowDetails] = useState(false);

  if (hasConsent) return null;

  const handleAcceptAll = () => {
    updatePreferences({
      necessary: true,
      analytics: true,
      marketing: true
    });
  };

  const handleAcceptSelected = () => {
    updatePreferences(preferences);
  };

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <h3>🍪 Política de Cookies</h3>
        <p>
          Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. 
          Algunas son necesarias para el funcionamiento del sitio, mientras que otras 
          nos ayudan a mejorarlo.
        </p>
        
        {showDetails && (
          <div className="cookie-preferences">
            <div className="cookie-option">
              <label>
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                />
                Necesarias
              </label>
              <p>Cookies esenciales para el funcionamiento del sitio.</p>
            </div>

            <div className="cookie-option">
              <label>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => updatePreferences({ analytics: e.target.checked })}
                />
                Analíticas
              </label>
              <p>Nos ayudan a entender cómo utilizas el sitio.</p>
            </div>

            <div className="cookie-option">
              <label>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => updatePreferences({ marketing: e.target.checked })}
                />
                Marketing
              </label>
              <p>Personalizan tu experiencia y el contenido que ves.</p>
            </div>
          </div>
        )}

        <div className="cookie-actions">
          <button 
            className="btn btn-outline-secondary"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Ocultar preferencias' : 'Configurar preferencias'}
          </button>
          {showDetails ? (
            <button 
              className="btn btn-primary"
              onClick={handleAcceptSelected}
            >
              Guardar preferencias
            </button>
          ) : (
            <button 
              className="btn btn-primary"
              onClick={handleAcceptAll}
            >
              Aceptar todas
            </button>
          )}
        </div>
      </div>
    </div>
  );
};