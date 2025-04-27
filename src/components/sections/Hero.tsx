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
              <h1 className="display-4">Proyecto de Remediación de Cultivos</h1>
              <p className="lead">Innovando en la recuperación y sostenibilidad de suelos agrícolas</p>
              <button className="btn btn-primary btn-lg">Conócenos</button>
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