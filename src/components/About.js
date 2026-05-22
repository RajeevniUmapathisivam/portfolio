import { ABOUT_STATS, SITE } from "../data/portfolio";
import { IconDownload } from "./Icons";

const PROFILE_IMAGE = `${process.env.PUBLIC_URL}/profile.jpg`;
const CV_URL = `${process.env.PUBLIC_URL}/cv.pdf`;
const CV_FALLBACK = `${process.env.PUBLIC_URL}/cv.html`;

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">My introduction</p>
        </div>
        <div className="about-grid">
          <div className="about-image-wrap">
            <img src={PROFILE_IMAGE} alt={`${SITE.name} portrait`} loading="lazy" />
          </div>
          <div>
            <p className="about-text">
              I am an enthusiastic IT undergraduate focused on full-stack development,
              system design, and building real-world scalable applications. I enjoy turning
              complex problems into clean, user-friendly web experiences — from REST APIs and
              databases to polished React frontends.
            </p>
            <div className="about-stats">
              {ABOUT_STATS.map((s) => (
                <div key={s.label} className="stat-card">
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            <a href={CV_URL} className="btn-teal" download="Rajeevni-Umapathisivam-CV.pdf">
              Download CV <IconDownload />
            </a>
            <p className="cv-alt-link">
              <a href={CV_FALLBACK} target="_blank" rel="noreferrer">
                View printable CV
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
