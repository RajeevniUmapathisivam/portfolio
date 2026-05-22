import { services } from "../data/portfolio";

export default function Services() {
  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I Offer</span>
          <h2 className="section-title">Services</h2>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <article key={s.title} className="service-card">
              <span className="service-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
