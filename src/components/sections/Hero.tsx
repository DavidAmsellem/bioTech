import { Parallax } from 'react-parallax';

const heroImage = '/images/hero-bg.png';

export const Hero = () => {
  return (
    <Parallax
      blur={0}
      bgImage={heroImage}
      bgImageAlt="Cultivos sostenibles"
      strength={200}
    >
      <section className="hero" id="inicio">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h1 className="display-4 mb-4">Proyecto de Remediación de Cultivos</h1>
              <p className="lead mb-4">Innovando en la recuperación y sostenibilidad de suelos agrícolas</p>
              <div className="d-flex gap-3">
                <a href="#proyecto" className="btn btn-primary btn-lg btn-icon">
                  Conócenos <i className="bi bi-arrow-right"></i>
                </a>
                <a href="#contacto" className="btn btn-outline-primary btn-lg">
                  Contactar
                </a>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
              {/* Contenido del hero */}
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
};