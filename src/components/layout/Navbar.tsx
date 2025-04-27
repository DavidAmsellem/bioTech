import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detectar la sección activa
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeNavbar = () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse) {
      const bsCollapse = document.querySelector('.navbar-collapse');
      if (bsCollapse) {
        bsCollapse.classList.remove('show');
      }
    }
  };

  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', closeNavbar);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', closeNavbar);
      });
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <i className="bi bi-leaf me-2"></i>
          BioTech
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className={`nav-link ${activeSection === 'inicio' ? 'active' : ''}`} href="#inicio">
                <strong>Inicio</strong>
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeSection === 'proyecto' ? 'active' : ''}`} href="#proyecto">
                <strong>Sobre</strong>
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeSection === 'metodologia' ? 'active' : ''}`} href="#metodologia">
                <strong>Metodología</strong>
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeSection === 'equipo' ? 'active' : ''}`} href="#equipo">
                <strong>Equipo</strong>
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeSection === 'galeria' ? 'active' : ''}`} href="#galeria">
                <strong>Galería</strong>
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeSection === 'contacto' ? 'active' : ''}`} href="#contacto">
                <strong>Contacto</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};