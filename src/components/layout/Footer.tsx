export const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="col-md-6">
            <p>&copy; {new Date().getFullYear()} Proyecto de Remediación de Cultivos</p>
          </div>
          <div className="col-md-6 text-end">
            <a href="#" className="text-light me-3">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-light me-3">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" className="text-light me-3">
              <i className="bi bi-github"></i>
            </a>
            <a href="#" className="text-light">
              <i className="bi bi-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};