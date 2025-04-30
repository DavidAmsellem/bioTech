import { useTypewriter, Cursor } from 'react-simple-typewriter';

export const Hero = () => {
  const [text] = useTypewriter({
    words: [
      'Remediación de Cultivos',
      'Innovación Sostenible',
      'Biotecnología Ambiental',
      'Recuperación de Suelos'
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 40,
    typeSpeed: 70,
  });

  return (
    <section id="hero" className="hero">
      <div className="video-background">
        <iframe
          src="https://player.vimeo.com/video/1039408593?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1#t=12s"
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="Background video"
        ></iframe>
      </div>
      <div className="overlay"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center" data-aos="fade-up">
            <h1 className="mb-3 text-center">
              Proyecto de{' '}
              <span style={{ fontWeight: 700, color: 'var(--text-dark)' }}>
                {text}
              </span>
              <Cursor cursorStyle="_" />
            </h1>
            <p className="lead mb-4 text-center">Innovando en la recuperación y sostenibilidad de suelos agrícolas</p>
            <div className="d-flex gap-3 justify-content-center">
              <a href="#proyecto" className="btn btn-primary btn-icon">
                Conócenos <i className="bi bi-arrow-right"></i>
              </a>
              <a href="#contacto" className="btn btn-outline-primary">
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};