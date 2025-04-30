import { UnderlineText } from '../ui/UnderlineText';
import '../../styles/sections/blog.css';

const blogPosts = [
  {
    id: 1,
    title: "Innovación en Biorremediación",
    excerpt: "Últimos avances en técnicas de recuperación de suelos mediante biotecnología.",
    image: "/images/blog/bio-innovation.jpg",
    category: "Investigación",
    date: "28 Abril 2025",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Casos de Éxito",
    excerpt: "Resultados comprobados en la regeneración de suelos agrícolas degradados.",
    image: "/images/blog/success-cases.jpg",
    category: "Resultados",
    date: "15 Abril 2025",
    readTime: "4 min"
  },
  {
    id: 3,
    title: "Agricultura Sostenible",
    excerpt: "Prácticas regenerativas para mantener la salud del suelo a largo plazo.",
    image: "/images/blog/sustainable.jpg",
    category: "Sostenibilidad",
    date: "1 Abril 2025",
    readTime: "6 min"
  }
];

export const Blog = () => {
  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <h2 className="section-title text-center">
          Nuestro <UnderlineText>Blog</UnderlineText>
        </h2>
        <p className="section-subtitle text-center">
          Últimas novedades y artículos sobre biotecnología y regeneración de suelos
        </p>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card" data-aos="fade-up">
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-card-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-readtime">{post.readTime}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href="#" className="blog-link">
                  Leer más <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};