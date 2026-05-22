import { ABOUT_STATS, SITE } from "../data/portfolio";

const ABOUT_IMAGE = `${process.env.PUBLIC_URL}/${SITE.aboutImage}`;

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header section-header-left">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Professional Bio</h2>
        </div>
        <div className="about-grid">
          <div className="about-photo-wrap">
            <img src={ABOUT_IMAGE} alt="Professional workspace" loading="lazy" />
          </div>
          <div className="about-content">
            <div className="about-info-cards">
              {ABOUT_STATS.map((s) => (
                <div key={s.label} className="info-card">
                  <span className="info-card-icon">{s.icon}</span>
                  <div>
                    <strong className="info-card-value">{s.value}</strong>
                    <span className="info-card-label">{s.label}</span>
                    <span className="info-card-sub">{s.sub}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="about-text-block">
              {SITE.aboutBio.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="about-text">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
