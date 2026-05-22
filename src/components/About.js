import { ABOUT_STATS, SITE, achievements } from "../data/portfolio";
import { IconDownload } from "./Icons";

const ABOUT_IMAGE = `${process.env.PUBLIC_URL}/${SITE.aboutImage}`;
const CV_URL = `${process.env.PUBLIC_URL}/${SITE.cvPdf}`;

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
            <img
              src={ABOUT_IMAGE}
              alt="Professional developer workspace"
              loading="lazy"
            />
          </div>
          <div>
            <p className="about-text">{SITE.aboutSummary}</p>
            <div className="about-stats">
              {ABOUT_STATS.map((s) => (
                <div key={s.label} className="stat-card">
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            <ul className="about-achievements">
              {achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <a
              href={CV_URL}
              className="btn-teal"
              download="Rajeevni-Umapathisivam-CV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download CV <IconDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
