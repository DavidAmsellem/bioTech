export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="col-md-4 mb-4">
            <h3 className="footer-title">BioTech</h3>
            <p className="footer-text">
              Innovando en la recuperación y sostenibilidad de suelos agrícolas a través de soluciones biotecnológicas avanzadas.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <h3 className="footer-title">Enlaces Rápidos</h3>
            <ul className="footer-links">
              <li>
                <a href="#inicio"><i className="bi bi-chevron-right"></i>Inicio</a>
              </li>
              <li>
                <a href="#proyecto"><i className="bi bi-chevron-right"></i>Sobre el Proyecto</a>
              </li>
              <li>
                <a href="#metodologia"><i className="bi bi-chevron-right"></i>Metodología</a>
              </li>
              <li>
                <a href="#equipo"><i className="bi bi-chevron-right"></i>Equipo</a>
              </li>
              <li>
                <a href="#contacto"><i className="bi bi-chevron-right"></i>Contacto</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h3 className="footer-title">Contáctanos</h3>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="#" className="social-link" aria-label="Email">
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; {new Date().getFullYear()} BioTech. Todos los derechos reservados.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p>Proyecto de Remediación de Cultivos</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};