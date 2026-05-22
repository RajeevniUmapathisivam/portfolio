import { SITE } from "../data/portfolio";
import { IconLinkedIn, IconGitHub, IconMail, IconDownload } from "./Icons";

const PROFILE_IMAGE = `${process.env.PUBLIC_URL}/${SITE.profileImage}`;
const CV_URL = `${process.env.PUBLIC_URL}/${SITE.cvPdf}`;

export default function Hero() {
  return (
    <section id="home" className="hero">
      <aside className="hero-social" aria-label="Social links">
        <a href={SITE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <IconLinkedIn />
        </a>
        <a href={`mailto:${SITE.email}`} aria-label="Email">
          <IconMail />
        </a>
        <a href={SITE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <IconGitHub />
        </a>
      </aside>

      <div className="hero-center">
        <p className="hero-greeting">
          Hello, I&apos;m <span className="text-purple">{SITE.shortName}</span>
        </p>
        <h1 className="hero-name">{SITE.role}</h1>
        <p className="hero-desc">{SITE.tagline}</p>

        <div className="hero-btns">
          <a href={CV_URL} className="btn-outline" download="Rajeevni-CV.pdf">
            <IconDownload /> Download CV
          </a>
          <a href="#about" className="btn-primary">
            About me
          </a>
        </div>

        <div className="hero-arch-wrap">
          <div className="hero-arch-glow" />
          <div className="hero-arch">
            <img src={PROFILE_IMAGE} alt={SITE.name} className="hero-arch-img" />
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll down">
        <span className="hero-scroll-icon">🖱️</span>
        <span>Scroll Down</span>
        <span className="hero-scroll-line" />
      </a>
    </section>
  );
}
