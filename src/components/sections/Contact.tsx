export const Contact = () => {
  return (
    <section className="contact py-5" id="contacto">
      <div className="container">
        <h2 className="text-center mb-4" data-aos="fade-down">
          <i className="bi bi-envelope-paper-fill text-primary me-2 shake-icon"></i>
          Contacto
        </h2>
        <div className="row">
          <div className="col-lg-6 mx-auto" data-aos="fade-up" data-aos-delay="200">
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Nombre" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Correo electrónico" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows={4} placeholder="Mensaje"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};