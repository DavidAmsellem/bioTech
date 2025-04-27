export const Contact = () => {
  return (
    <section className="contact" id="contacto">
      <div className="container">
        <h2 className="text-center mb-4" data-aos="fade-down">
          <i className="bi bi-envelope-paper-fill me-2 shake-icon"></i>
          Contáctanos
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="nombre"
                    placeholder=" "
                  />
                  <label className="form-label" htmlFor="nombre">Nombre</label>
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email"
                    placeholder=" "
                  />
                  <label className="form-label" htmlFor="email">Correo electrónico</label>
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="asunto"
                    placeholder=" "
                  />
                  <label className="form-label" htmlFor="asunto">Asunto</label>
                </div>
                <div className="form-group">
                  <textarea 
                    className="form-control" 
                    id="mensaje"
                    rows={4}
                    placeholder=" "
                  ></textarea>
                  <label className="form-label" htmlFor="mensaje">Mensaje</label>
                </div>
                <button type="submit" className="btn btn-submit btn-hover">
                  Enviar mensaje
                </button>
              </form>
            </div>
            <div className="contact-info">
              <div className="contact-item">
                <i className="bi bi-geo-alt-fill"></i>
                <span>Universidad de Murcia, Campus de Espinardo</span>
              </div>
              <div className="contact-item">
                <i className="bi bi-envelope-fill"></i>
                <span>info@biotech.com</span>
              </div>
              <div className="contact-item">
                <i className="bi bi-phone-fill"></i>
                <span>+34 968 123 456</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};