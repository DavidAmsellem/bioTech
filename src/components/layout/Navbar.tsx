import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
              <a className="nav-link" href="#inicio">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyecto">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#metodologia">Metodología</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#equipo">Equipo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#galeria">Galería</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};